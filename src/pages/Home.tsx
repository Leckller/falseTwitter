import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, doc, onSnapshot, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { db, storage } from '../firebase';
import { GlobalState, PostsType } from '../types';
import { posts } from '../redux/actions/ActionPosts';

function Home() {
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
  const [imgTwt, setImgTwt] = useState(false);
  const [SubmitForm, setSubmitForm] = useState({
    arquivo: { name: '' },
    text: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(db, 'Posts'));
    onSnapshot(q, (querySnapshot) => {
      const PostsArray:PostsType[] = [];
      querySnapshot.forEach((u) => {
        PostsArray.push(u.data());
      });
      console.log(PostsArray);
      dispatch(posts(PostsArray));
    });
  }, []);
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { arquivo, text } = SubmitForm;
    const storageRef = ref(storage, `imagens/${arquivo.name}`);
    const uploadTask = uploadBytesResumable(storageRef, arquivo);
    console.log(arquivo.name);
    if (!imgTwt) {
      addDoc(collection(db, 'Posts'), {
        imageUrl: '',
        userId: user.uid,
        altImg: '',
        text,
        userName: user.displayName,
      });
    }
    if (imgTwt) {
      setImgTwt(false);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          if (progress === 100) {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
              addDoc(collection(db, 'Posts'), {
                imageUrl: downloadUrl,
                userId: user.uid,
                altImg: arquivo.name,
                text,
                userName: user.displayName,
              });
            });
          }
        },
      );
    }
  };
  return (
    <div>
      <h1>home</h1>
      <form onSubmit={ (e) => handleOnSubmit(e) }>
        <input
          type="file"
          name="arquivo"
          onClick={ () => setImgTwt(true) }
          onChange={ (e) => setSubmitForm({ ...SubmitForm, arquivo: e.target.files[0] }) }
        />
        <input
          type="text"
          name="tweet"
          onChange={ (e) => setSubmitForm({ ...SubmitForm, text: e.target.value }) }
        />
        <button type="submit">enviar</button>
        {/* <progress /> */}
      </form>
    </div>
  );
}

export default Home;

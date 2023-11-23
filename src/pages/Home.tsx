import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db, storage } from '../firebase';
import { GlobalState } from '../types';

function Home() {
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arquivo = document.querySelector('[name=arquivo]').files[0];
    const storageRef = ref(storage, `imagens/${arquivo.name}`);
    const uploadTask = uploadBytesResumable(storageRef, arquivo);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        if (progress === 100) {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            addDoc(collection(db, 'Users'), {
              imageUrl: downloadUrl,
              userId: user.uid,
              imageName: arquivo.name,
            });
          });
        }
      },
    );
  };
  return (
    <div>
      <h1>home</h1>
      <form onSubmit={ (e) => handleOnSubmit(e) }>
        <input
          type="file"
          name="arquivo"
        />
        <button type="submit">enviar</button>
        {/* <progress /> */}
      </form>
    </div>
  );
}

export default Home;

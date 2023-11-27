import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';
import useUser from '../hooks/useUser';
import RandomIdFunction from '../utils/RandomIdFunction';
import { PostsType } from '../types';

function TweetComentM({ setClose, id, coments, setReload, reload }:
{ setClose: (p: boolean) => void, id: string, coments: PostsType[],
  setReload: (p:boolean) => void, reload: boolean }) {
  const user = useUser();
  const [submitForm, setSubmitForm] = useState({
    arquivo: {}, text: '',
  });
  const Comentar = async () => {
    const data = new Date();
    const dataRef = [data.toDateString().split(' '), data.toLocaleTimeString()];
    const postRef = doc(db, 'Posts', id);
    await updateDoc(postRef, {
      coments: [
        ...coments,
        {
          imageUrl: '',
          userId: user.uid,
          altImg: '',
          text: submitForm.text,
          userName: user.displayName,
          postId: RandomIdFunction(),
          data: JSON.stringify(dataRef),
          userImg: user.photoURL,
          likes: [],
          edit: false,
          coments: [],
        },
      ],
    });
    setTimeout(() => {
      setReload(!reload);
    }, 500);
  };
  return (
    <div
      className="w-4/5 h-80 z-10 bg-black border-8
     border-gray-900 absolute top-0 flex flex-col items-center"
    >
      <div className="w-full flex flex-row justify-between pt-3 pb-3 pl-5 pr-5">
        <button onClick={ () => setClose(false) }>X</button>
        <button
          onClick={ () => {
            Comentar();
            setClose(false);
          } }
        >
          Postar

        </button>
      </div>
      <div className="w-full h-full p-3">
        <textarea
          onChange={ (e) => setSubmitForm({ ...submitForm, text: e.target.value }) }
          placeholder="O que está acontecendo?"
          className="w-full h-full bg-transparent border-none outline-none"
          name="textArea"
          id="textarea"
        />
      </div>
    </div>
  );
}

export default TweetComentM;

import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { GlobalState } from '../types';
import RandomIdFunction from '../utils/RandomIdFunction';
import TweetM from './TweetM';
import TweetD from './TweetD';

/* eslint-disable jsx-a11y/label-has-associated-control */
function Tweetar({ setClose, close }: {
  close: boolean, setClose: (p: boolean) => void }) {
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
  const [SubmitForm, setSubmitForm] = useState<{ text: string, arquivo: File }>(
    { arquivo: {} as File, text: '' },
  );

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // Envio Tweet sem foto
    const idPost = RandomIdFunction();
    const data = new Date();
    const dataRef = [data.toDateString().split(' '), data.toLocaleTimeString()];
    await setDoc(doc(db, 'Posts', idPost), {
      imageUrl: '',
      userId: user.uid,
      altImg: '',
      text: SubmitForm.text,
      userName: user.displayName,
      postId: idPost,
      data: JSON.stringify(dataRef),
      userImg: user.photoURL,
      likes: [],
      edit: false,
      coments: [],
    });
    // método para adicionar sem especificar o nome do objeto
    //   addDoc(collection(db, 'Posts'), {
    //     imageUrl: '',
    //     userId: user.uid,
    //     altImg: '',
    //     text: SubmitForm.text,
    //     userName: user.displayName,
    //     postId: RandomIdFunction(),
    //     data,
    //     userImg: user.photoURL,
    //     likes: [],
    //   });
    setSubmitForm({
      arquivo: {} as File,
      text: '',
    });
    setClose(!close);
  };
  if (window.innerWidth <= 550) {
    return (
      <TweetM
        SubmitForm={ SubmitForm }
        close={ close }
        handleOnSubmit={ handleOnSubmit }
        setClose={ setClose }
        setSubmitForm={ setSubmitForm }
      />
    );
  }
  return (
    <TweetD
      SubmitForm={ SubmitForm }
      close={ close }
      handleOnSubmit={ handleOnSubmit }
      setClose={ setClose }
      setSubmitForm={ setSubmitForm }
    />
  );
}

export default Tweetar;

import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import RandomIdFunction from './RandomIdFunction';

const handleOnSubmit = async (
  e: React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  SubmitForm: { arquivo: File, text: string },
  user: any,
) => {
  e.preventDefault();
  // Envio Tweet sem foto
  const idPost = RandomIdFunction();
  const data = new Date();
  await setDoc(doc(db, 'Posts', idPost), {
    imageUrl: '',
    userId: user.uid,
    altImg: '',
    text: SubmitForm.text,
    userName: user.displayName,
    postId: idPost,
    data: JSON.stringify(data),
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
  // setSubmitForm({
  //   arquivo: {} as File,
  //   text: '',
  // });
  // setClose(!close);
};

export default handleOnSubmit;

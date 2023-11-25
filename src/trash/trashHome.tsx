// /* eslint-disable react-hooks/exhaustive-deps */
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { db, storage } from '../firebase';
// import { GlobalState, PostsType } from '../types';
// import { posts } from '../redux/actions/ActionPosts';

// function Home() {
//   const { user } = useSelector((state:GlobalState) => state.UserReducer);
//   const [imgTwt, setImgTwt] = useState(false);
//   const [returnPosts, setReturnPosts] = useState<PostsType[]>([]);
//   const [SubmitForm, setSubmitForm] = useState<{
//     text: string,
//     arquivo: File,
//   }>({
//     arquivo: {} as File,
//     text: '',
//   });
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(posts(returnPosts));
//     console.log(returnPosts);
//   }, [returnPosts]);
//   const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const { arquivo, text } = SubmitForm;
//     const storageRef = ref(storage, `imagens/${arquivo.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, arquivo);
//     if (!imgTwt) {
//       addDoc(collection(db, 'Posts'), {
//         imageUrl: '',
//         userId: user.uid,
//         altImg: '',
//         text,
//         userName: user.displayName,
//       });
//       console.log('enviado');
//       const q = query(collection(db, 'Posts'));
//       const up = onSnapshot(q, (querySnapshot) => {
//         querySnapshot.forEach((u) => {
//           setReturnPosts([...returnPosts, u.data() as PostsType]);
//         });
//       });
//       up();
//     }
//     if (imgTwt) {
//       setImgTwt(false);
//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log(`Upload is ${progress}% done`);
//           if (progress === 100) {
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
//               addDoc(collection(db, 'Posts'), {
//                 imageUrl: downloadUrl,
//                 userId: user.uid,
//                 altImg: arquivo.name,
//                 text,
//                 userName: user.displayName,
//               });
//             });
//           }
//         },
//       );
//       const q = query(collection(db, 'Posts'));
//       const up = onSnapshot(q, (querySnapshot) => {
//         querySnapshot.forEach((u) => {
//           setReturnPosts([...returnPosts, u.data() as PostsType]);
//         });
//       });
//       up();
//     }
//   };
//   return (
//     <div>
//       <h1>home</h1>
//       <form onSubmit={ (e) => handleOnSubmit(e) }>
//         <input
//           type="file"
//           name="arquivo"
//           onClick={ () => {
//             setImgTwt(true);
//           } }
//           onChange={ (e) => {
//             setSubmitForm({ ...SubmitForm, arquivo: e.target.files[0] });
//           } }
//         />
//         <input
//           type="text"
//           name="tweet"
//           onChange={ (e) => setSubmitForm({ ...SubmitForm, text: e.target.value }) }
//         />
//         <button type="submit">enviar</button>
//         {/* <progress /> */}
//       </form>
//     </div>
//   );
// }

// export default Home;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { GlobalState, PostsType } from '../types';
import PostM from '../components/PostM';
import useUser from '../hooks/useUser';
import { storage } from '../firebase';

function User() {
  const { id } = useParams();
  const user = useUser();
  const { globalPosts } = useSelector((state:GlobalState) => state.PostsReducer);
  const userPosts = globalPosts.filter((p) => p.userId === id);
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const [viewImg, setViewImg] = useState(false);
  const infos = userPosts[0];
  const [previewImage, setPreviewImage] = useState('');
  const [file, setFile] = useState<{
    arquivo: File, nome: string, url: string
  }>({
    arquivo: {} as File, nome: infos.userName, url: infos.userId,
  });
  useEffect(() => {
    const { arquivo } = file;
    const storageRef = ref(storage, `imagens/${arquivo.name}`);
    const uploadTask = uploadBytesResumable(storageRef, arquivo);
    if (arquivo.name) {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          if (progress === 100) {
            setTimeout(() => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                setPreviewImage(downloadUrl);
              });
            }, 500);
          }
        },
      );
    }
  }, [file.arquivo]);
  const [editProfile, setEditProfile] = useState(false);
  const onDeleteImage = async () => {
    setPreviewImage('');
  };
  const onSetImage = async () => {
    const { arquivo } = file;
    const storageRef = ref(storage, `imagens/${arquivo.name}`);
    const uploadTask = uploadBytesResumable(storageRef, arquivo);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        if (progress === 100) {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            console.log(downloadUrl);
          });
        }
      },
    );
  };
  return (
    <div>
      <header className="w-screen h-64 border-b border-gray-900 relative flex flex-col">
        <div
          className="w-full h-32 bg-gradient-to-tr from-gray-700 to-gray-900
        flex justify-start items-start p-3"
        >
          <button
            className="rounded-full bg-black w-10 h-10 flex items-center justify-center"
            onClick={ () => navigate(-1) }
          >
            <div className="scale-150">
              <IoArrowUndoOutline />
            </div>
          </button>
        </div>
        <div className="h-1/6">
          <button onClick={ () => setViewImg(!viewImg) }>
            <img
              className="rounded-full w-1/5 border-2
               border-black absolute top-20 left-5"
              src={ userPosts[0].userImg }
              alt={ userPosts[0].userName }
            />
          </button>
          {viewImg ? (
            <div
              className="absolute w-5/6 h-80 ml-8 p-5 bg-black
            border-4 border-gray-900 z-20 flex items-center justify-center"
            >
              <img className="w-64 h-64" src={ infos.userImg } alt="" />
              <button
                className="absolute right-0 top-0 p-5"
                onClick={ () => setViewImg(false) }
              >
                X
              </button>
            </div>
          ) : (
            <div className="absolute" />
          )}
        </div>
        <div className="h-1/6 flex flex-row justify-between">
          <h1 className="pl-5 pt-1 text-2xl">{infos.userName}</h1>
          {infos.userId === user.uid ? (
            <button
              className="mr-5 rounded-lg
            p-2 flex items-center border border-gray-900"
              onClick={ () => setEditProfile(!editProfile) }
            >
              Editar Perfil
            </button>
          ) : (
            ''
          )}
          {editProfile ? (

            <div
              className="absolute w-5/6  ml-8 p-5 bg-black
             border-4 border-gray-900 z-20"
            >

              <button
                onClick={ () => {
                  setEditProfile(false);
                  setFile({
                    arquivo: {} as File, nome: infos.userName, url: infos.userId,
                  });
                } }
              >
                X

              </button>

              <div className="flex gap-4 flex-col">

                <label htmlFor="nome">

                  <input
                    className="bg-transparent outline-none"
                    id="nome"
                    placeholder="Nome do Perfil"
                    type="text"
                  />
                </label>

                <label htmlFor="uid">

                  <input
                    className="bg-transparent outline-none"
                    id="uid"
                    placeholder="@ do Perfil"
                    type="text"
                  />
                </label>

                <label
                  htmlFor="arquivo"
                  className="cursor-pointer"
                >
                  {previewImage ? (
                    <div className="relative">

                      <button
                        className="absolute bg-black w-10 h-10
                        flex items-center justify-center right-0
                        border-4 border-gray-900
                        "
                        onClick={ onDeleteImage }
                      >
                        X
                      </button>

                      <img src={ previewImage } alt="preview" />

                    </div>
                  ) : (
                    <h2>Foto do Perfil</h2>
                  )}
                  <input
                    onChange={ (e) => {
                      setPreviewImage('');
                      setFile({ ...file,
                        arquivo: e.target.files[0] });
                    } }
                    className="hidden"
                    id="arquivo"
                    type="file"
                  />
                </label>
              </div>
              <button
                onClick={ () => onSetImage() }
              >
                Salvar

              </button>
            </div>

          ) : (
            <div className="absolute" />
          )}

        </div>

        <div
          className="flex flex-row w-full items-center
        overflow-x-auto overflow-y-hidden"
        >
          <button className="p-3">Publicações</button>
          <button className="p-3">Respostas</button>
          <button className="p-3">Mídia</button>
          <button className="p-3">Curtidas</button>
        </div>
      </header>
      <main className="w-screen h-screen">
        {userPosts && userPosts.map((p) => (
          <PostM
            key={ p.postId }
            actP={ p as PostsType }
            reload={ reload }
            setReload={ setReload }
          />
        ))}
      </main>
    </div>
  );
}

export default User;

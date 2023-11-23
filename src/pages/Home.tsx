import { useState } from 'react';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

function Home() {
  const [files, setFiles] = useState([]);
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arquivo = document.querySelector('[name=arquivo]').files[0];
    const storageRef = ref(storage, `imagens/${arquivo.name}`);
    const uploadTask = uploadBytesResumable(storageRef, arquivo);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    });
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

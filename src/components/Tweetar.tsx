import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { GlobalState } from '../types';

/* eslint-disable jsx-a11y/label-has-associated-control */
function Tweet({ setClose, close }: { close: boolean, setClose: (p: boolean) => void }) {
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
  const [SubmitForm, setSubmitForm] = useState<{ text: string, arquivo: File }>(
    { arquivo: {} as File, text: '' },
  );

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Envio Tweet sem foto
    addDoc(collection(db, 'Posts'), {
      imageUrl: '',
      userId: user.uid,
      altImg: '',
      text: SubmitForm.text,
      userName: user.displayName,
    });
  };
  return (
    <div>
      <div>
        <button onClick={ () => setClose(!close) }>X</button>
      </div>
      <div>
        <label htmlFor="textAreaTweet">
          O que está acontecendo?
          <textarea
            name="Tweet"
            id="textAreaTweet"
            onChange={ (e) => setSubmitForm({ ...SubmitForm, text: e.target.value }) }
          />
        </label>
      </div>
      <form onSubmit={ handleOnSubmit }>
        <label htmlFor="arquivo">
          <input id="arquivo" type="file" />
        </label>
        <button>Postar</button>
      </form>
    </div>
  );
}

export default Tweet;

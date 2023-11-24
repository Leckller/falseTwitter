import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { GlobalState, PostsType } from '../types';
import { TweetStyle } from '../Styles/Styles';
import RandomIdFunction from '../utils/RandomIdFunction';

/* eslint-disable jsx-a11y/label-has-associated-control */
function Tweetar({ setClose, close }: {
  close: boolean, setClose: (p: boolean) => void }) {
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
  const [SubmitForm, setSubmitForm] = useState<{ text: string, arquivo: File }>(
    { arquivo: {} as File, text: '' },
  );

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Envio Tweet sem foto
    const data = new Date().toJSON();
    addDoc(collection(db, 'Posts'), {
      imageUrl: '',
      userId: user.uid,
      altImg: '',
      text: SubmitForm.text,
      userName: user.displayName,
      postId: RandomIdFunction(),
      data,
      userImg: user.photoURL,
    });
    setSubmitForm({
      arquivo: {} as File,
      text: '',
    });
    setClose(!close);
  };
  if (window.innerWidth <= 550) {
    return (
      <TweetStyle>
        <div>
          <button onClick={ () => setClose(!close) }>X</button>
          <button type="submit">Postar</button>
        </div>
        <div>
          <label htmlFor="textAreaTweet">
            <textarea
              maxLength={ 350 }
              name="Tweet"
              id="textAreaTweet"
              onChange={ (e) => setSubmitForm({ ...SubmitForm, text: e.target.value }) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="arquivo">
            Image
            <input id="arquivo" type="file" />
          </label>
        </div>
      </TweetStyle>
    );
  }
  return (
    <TweetStyle>
      <div>
        <button onClick={ () => setClose(!close) }>X</button>
      </div>
      <div>
        <label htmlFor="textAreaTweet">
          <textarea
            maxLength={ 350 }
            name="Tweet"
            id="textAreaTweet"
            onChange={ (e) => setSubmitForm({ ...SubmitForm, text: e.target.value }) }
          />
        </label>
      </div>
      <form onSubmit={ handleOnSubmit }>
        <div>
          <label htmlFor="arquivo">
            Image
            <input id="arquivo" type="file" />
          </label>
        </div>
        <div>
          <button type="submit">Postar</button>
        </div>
      </form>
    </TweetStyle>
  );
}

export default Tweetar;

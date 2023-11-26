/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { TweetDivBody } from '../Styles/TweetStyles';

function TweetD({ setClose, close, handleOnSubmit, setSubmitForm, SubmitForm }: {
  setClose: (p: boolean) => void, close: boolean, handleOnSubmit: (e
  : React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  , setSubmitForm: (p: { text: string, arquivo: File }) => void
  , SubmitForm: { text: string, arquivo: File }
}) {
  return (
    <TweetDivBody>
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
    </TweetDivBody>
  );
}

export default TweetD;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { TweetDivBody } from '../Styles/TweetStyles';
import useUser from '../hooks/useUser';

function TweetD({ setClose, close, handleOnSubmit }: {
  setClose: (p: boolean) => void, close: boolean, handleOnSubmit: (e
  : React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>, SubmitForm: {
      arquivo: File, text: string
    }, user: any) => void
}) {
  const user = useUser();
  const [SubmitForm, setSubmitForm] = useState<{ text: string, arquivo: File }>(
    { arquivo: {} as File, text: '' },
  );
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
      <form onSubmit={ (e) => handleOnSubmit(e, SubmitForm, user) }>
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

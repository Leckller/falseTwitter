/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import handleOnSubmit from '../utils/tweetFunction';
import useUser from '../hooks/useUser';

function TweetM({ setClose, close }: {
  setClose: (p: boolean) => void, close: boolean,
}) {
  const [submitForm, setSubmitForm] = useState<{ text: string, arquivo: File }>(
    { arquivo: {} as File, text: '' },
  );
  const user = useUser();
  return (
    <div
      className="w-screen h-screen z-10 bg-black border-8
   border-gray-900 absolute top-0 flex flex-col items-center"
    >
      <div className="w-full flex flex-row justify-between pt-3 pb-3 pl-5 pr-5">
        <button onClick={ () => setClose(!close) }>X</button>
        <button
          onClick={ (e) => {
            handleOnSubmit(e, submitForm, user);
            setClose(!close);
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

export default TweetM;

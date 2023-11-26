/* eslint-disable jsx-a11y/label-has-associated-control */
import { TweetDivBody, TweetDivForm,
  TweetDivHeader, TweetDivText } from '../Styles/TweetStyles';

function TweetM({ setClose, close, handleOnSubmit, setSubmitForm, SubmitForm }: {
  setClose: (p: boolean) => void, close: boolean, handleOnSubmit: (e
  : React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  , setSubmitForm: (p: { text: string, arquivo: File }) => void
  , SubmitForm: { text: string, arquivo: File }
}) {
  return (
    <TweetDivBody>
      <TweetDivHeader>
        <button onClick={ () => setClose(!close) }>X</button>
        <button onClick={ (e) => handleOnSubmit(e) } type="submit">Postar</button>
      </TweetDivHeader>
      <TweetDivText>
        <label htmlFor="textAreaTweet">
          <textarea
            placeholder="O que está acontecendo?"
            maxLength={ 350 }
            name="Tweet"
            id="textAreaTweet"
            rows={ 20 }
            onChange={ (e) => setSubmitForm({ ...SubmitForm, text: e.target.value }) }
          />
        </label>
      </TweetDivText>
      <TweetDivForm>
        <form onSubmit={ (e) => handleOnSubmit(e) }>
          <label htmlFor="arquivo">
            Image
            <input id="arquivo" type="file" />
          </label>
        </form>
      </TweetDivForm>
    </TweetDivBody>
  );
}

export default TweetM;

import TweetM from './TweetM';
import TweetD from './TweetD';
import handleOnSubmit from '../utils/tweetFunction';

/* eslint-disable jsx-a11y/label-has-associated-control */
function Tweetar({ setClose, close }: {
  close: boolean, setClose: (p: boolean) => void }) {
  if (window.innerWidth <= 550) {
    return (
      <TweetM
        close={ close }
        setClose={ setClose }
      />
    );
  }
  return (
    <TweetD
      close={ close }
      handleOnSubmit={ handleOnSubmit }
      setClose={ setClose }
    />
  );
}

export default Tweetar;

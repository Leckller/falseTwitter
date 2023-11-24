/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Tweetar from '../components/Tweetar';

function Home() {
  const [close, setClose] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(posts(returnPosts));
  }, []);
  return (
    <div>
      <h1>home</h1>
      {close ? <button>Tweetar</button> : (
        <Tweetar close={ close } setClose={ setClose } />
      )}
    </div>
  );
}

export default Home;

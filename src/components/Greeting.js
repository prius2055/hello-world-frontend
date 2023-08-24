import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGreeting } from '../store/greetingSlice';

function Greeting() {
  const { message } = useSelector((state) => state.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <main>
      <h1>{message}</h1>
    </main>
  );
}

export default Greeting;

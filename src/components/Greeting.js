import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGreeting } from '../store/greetingSlice';

function Greeting() {
  const { message } = useSelector((state) => state.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  console.log(message);

  return (
    <main>
      <h1>{message}</h1>
    </main>
  );
}

export default Greeting;

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveUser } from './selectors';

const App = () => {
  const activeUser = useSelector(getActiveUser);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    dispatch({ type: 'SET_ACTIVE_USER', payload: 1});
  };

  return (
    <div>
      <h1>Active User: {activeUser.name}</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleClick}>Change User</button>
    </div>
  );
};

export default App;
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveUser } from './store'; // Импортируем сгенерированный экшен
import { getActiveUser } from './selectors'; // Обновите селектор, если необходимо

const App = () => {
  // Используем селектор для получения активного пользователя из состояния
  const activeUser = useSelector(getActiveUser);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    // Диспатчим экшен, сгенерированный `createSlice`
    dispatch(setActiveUser(1)); // Устанавливаем активного пользователя с id 1
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

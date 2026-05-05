import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increaseBy10 } from "./redux/CounterSlice";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Count is at:{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseBy10(10))}>+10</button>
    </div>
  );
};

export default App;

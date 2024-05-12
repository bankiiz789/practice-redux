import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducer/counterSlice";
import { useNavigate } from "react-router-dom";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col gap-2">
      <h1 className="text-2xl">{count}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="border-2 border-blue-200 rounded-lg p-1"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="border-2 border-red-200 rounded-lg p-1"
        >
          Increment
        </button>
      </div>
      <div className="border-2 border-black p-2 rounded-lg">
        <button onClick={() => navigate("/user")}>Go to CRUD</button>
      </div>
    </div>
  );
}

export default Counter;

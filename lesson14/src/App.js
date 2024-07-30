import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  countSelector,
  decrement,
  increment,
  reset,
} from "./store/counterSlice/counterSlice";
import { fetchtodosApi, todoSelector } from "./store/todoSlice/TodoSlice";
const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);
  const { todos, isLoading, error } = useSelector(todoSelector);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handledecrement = () => {
    dispatch(decrement());
  };
  const resetCount = () => {
    dispatch(reset());
  };
  useEffect(() => {
    dispatch(fetchtodosApi());
  }, [dispatch]);
  if (isLoading)
    return (
      <div className="fixed w-screen h-screen flex items-center justify-center">
        <img src="https://miro.medium.com/v2/resize:fit:496/0*e9V_4JhbTHafOBWa.gif" />
      </div>
    );
  if (error) return <h1>Error</h1>;

  return (
    <div className="container">
      <h1>Hello Redux&Redux tooklit</h1>
      <div className="flex_center">
        <button onClick={handleIncrement} className="btn">
          Incement
        </button>
        <span>{count}</span>
        <button onClick={handledecrement} className="btn">
          Decrement
        </button>
        <button onClick={resetCount} className="btn">
          Reset
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {todos &&
          todos.map((todo) => (
            <div
              className="border border-solid rounded-md max-w-[300px] w-full min-h-[100px] p-4"
              key={todo.id}
            >
              <h3>{todo.title}</h3>
              <p>{todo.completed ? "completed" : "not completed"}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;

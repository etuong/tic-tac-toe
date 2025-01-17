// The React useMemo Hook returns a memoized value.
// Think of memoization as caching a value so that it does not need to be recalculated.
// This hook only runs when one of its dependencies update.
// In the following example, the expensive function will only run when count is changed and not when todo's are added.

import { useMemo, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </>
  );
};

const expensiveCalculation = (num) => {
  console.log("I am being called!")
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default Example;

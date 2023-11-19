import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import React from "react";
import { CreateTodoButton } from "./TodoButton";

function App() {
  const arrayTodo = [
    { text: "comer", completed: true },
    { text: "jugar", completed: true },
    { text: "lavar", completed: false },
    { text: "estudiar", completed: false },
    { text: "correr", completed: false },
  ];
  return (
    <div className="App">
      das
      <TodoCounter completed={16} total={222} />
      <TodoSearch />
      <TodoList>
        {arrayTodo.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;

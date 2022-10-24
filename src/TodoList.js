

import React from "react";
import Form from "./Form";

const TodoList = ({ todoList, onCheckBtnClick }) => {
  return (
    <>
      {todoList.map((todo) => (
        <Form key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />
      ))}
    </>
  );
}

export default  TodoList;
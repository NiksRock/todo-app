import { useState, useEffect } from "react";
import db from "./../../firebase";
const TodoList = (props) => {
  var [todoList, setTodoList] = useState({});
  useEffect(() => {
    db.child("todolist").on("value", (snapshot) => {
      if (snapshot.val()) {
        setTodoList({ ...snapshot.val() });
      } else setTodoList({});
    });
  }, []);
  const onDelete = (key) => {
    db.child(`todolist/${key}`).remove((err) => console.log(err));
  };
  return (
    <ul className="list-group">
      {Object.keys(todoList).map((obj) => {
        return (
          <li className="list-group-item" id={obj}>
            <div className="row">
              <div className="col-md-10 ">
                <div className="todo-title">
                  <span className="badge badge-warning tag-todo">{todoList[obj].todoTitle} </span> 
                  <span className="badge badge-warning todo-owner">{todoList[obj].personName} </span>
                </div>
                <div className="todo-des ">&nbsp;{todoList[obj].todoDescription}</div>
              </div>
              <div className="col-md-1">
                <i
                  role="button"
                  className="far fa-trash-alt text-danger"
                  onClick={() => onDelete(obj)}
                ></i>
              </div>
              <div className="col-md-1">
                <i
                  class="fas fa-edit text-primary"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    props.updateTodo(todoList[obj], obj);
                  }}
                ></i>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

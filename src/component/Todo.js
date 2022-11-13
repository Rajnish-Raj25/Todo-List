import React, { useEffect, useState } from "react";
import "../component/css/Todo.css";

const getLocalItem = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inpValue, setInputVal] = useState("");
  const [value, setValue] = useState(getLocalItem());

  const additem = () => {
    // const allInputData = {
    //   id: new Date().getTime().toString(),
    //   name: inpValue,
    // };

    if (!inpValue) {
    } else {
      setValue([...value, inpValue]);
      setInputVal("");
    }
  };

  const deletetask = (id) => {
    const updatetask = value.filter((elem, index) => {
      return id !== index;
    });
    setValue(updatetask);
  };

  const removetask = () => {
    setValue([]);
  };

  //  adding data in the local storage

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(value));
  }, [value]);
  return (
    <>
      <div className="main_container">
        <div className="todo_container">
          <h1 className="header">Todo Application</h1>
          <div className="all_item">
            <input
              type="text"
              placeholder="Enter your task... "
              value={inpValue}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
            />
            <i className="fa fa-plus" title="Add Item" onClick={additem}></i>
            <div className="all_task">
              {value.map((element, index) => {
                return (
                  <div className="each_task" key={index}>
                    <p>{element}</p>
                    <div className="icon">
                      <i className="fa fa-edit" title="edit task"></i>
                      <i
                        className="fa fa-trash"
                        title="delete task"
                        onClick={() => deletetask(index)}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="btn" onClick={removetask}>
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

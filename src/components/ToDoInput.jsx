import React, { useContext, useState } from "react";
function ToDoInput() {
  const [Title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  let render = <h1>No task Available</h1>;

  if (mainTask.length > 0) {
    render = mainTask.map((task, index) => {
      return (
        <li
          key={index}
          className="bg-white shadow-amber-50 mb-3  flex justify-around  items-center p-2 "
        >
          <h5 className="text-3xl text-blue-700 mr-2 p-2">{task.Title}</h5>
          <h6 className="text-xl text-blue-600 mr-2 p-2">{task.desc}</h6>
          <button
            onClick={(e) => {
              // e.stopPropagation()
              handledelete(index);
            }}
            className="bg-red-500 m-2 px-2 py-1 text-white text-xl rounded-lg  hover:bg-red-600 cursor-pointer"
          >
            Delete Task
          </button>

          {/* <button
            onClick={(index) => {
              const updatedTasks = mainTask.map((task, i) =>
                i === index ? { ...mainTask, done: !mainTask.done } : mainTask
              );
              setmainTask(updatedTasks);
            }}
            className="bg-green-500 m-2 px-2 py-1 text-white text-xl rounded-lg  hover:bg-green-600 cursor-pointer"
          >
            {mainTask.done ? "✅" : "Mark As done"}
          </button> */}
        </li>
      );
    });
  }

  function onTaskHander(e) {
    setTitle(e.target.value);
    // console.log(Title);
  }
  function onDescHander(e) {
    setDesc(e.target.value);
    // console.log(desc);
  }
  function onsubmitHandler(e) {
    e.preventDefault();
  }
  function onClickHander() {
    // console.log("new task added");
    if (!Title.trim() || !desc.trim()) {
      return null;
    } else {
      setmainTask([...mainTask, { Title, desc, done: false }]);
      console.log(mainTask);
      setTitle("");
      setDesc("");
    }
  }
  function handledelete({ index }) {
    const copyTask = [...mainTask];
    // console.log(copyTask)
    copyTask.splice(index, 1);
    //  console.log(copyTask)
    setmainTask(copyTask);
  }
  return (
    <>
      <div className="flex items-center flex-wrap p-5 ">
        <form onSubmit={onsubmitHandler}>
          <input
            type="text"
            value={Title}
            placeholder="Enter Task Here"
            onChange={onTaskHander}
            className="border-1 border-blue-950 m-5 py-3 px-4 shadow-md rounded text-lg"
          />
          <input
            type="text"
            value={desc}
            placeholder="Enter Description Here"
            onChange={onDescHander}
            className="border-1 border-blue-950  m-5 py-3 px-4 shadow-md rounded text-lg"
          />
          <button
            onClick={onClickHander}
            className="bg-blue-950 text-white rounded shadow-md text-lg ml-6 px-3 py-2 cursor-pointer h-3/2"
          >
            Add New task
          </button>
        </form>
        <div className="bg-slate-100 m-5 p-5 rounded-lg outline-none shadow-md w-screen   ">
          <ul>{render}</ul>
        </div>
      </div>
    </>
  );
}
export default ToDoInput;

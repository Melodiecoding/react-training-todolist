import React from "react";
import "./App.css";
import { data } from "./data/tasks";
import { TaskFormModal } from "./components/TaskFormModal";
import Header from "./components/Header"
import { TasksList } from "./components/TasksList";

const App = () => {
  const title = "To do list";
  const tasks = data;
  const taskToEdit: any = null;
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(false);
  };

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();
    console.error("I need to be implemented");
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  return (
    <div className="main">
      <Header title={ title }/>
      <TasksList tasks={ tasks }/>
      <button
        className="add-task-btn"
        onClick={(handleOpenModal)}
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() => setShowModal(false)} addOrEditTask={function (event: any, taskId?: number | undefined): void {
          throw new Error("Function not implemented.");
          // console.log("pass me a method that will close the modal");
        } }
        // addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
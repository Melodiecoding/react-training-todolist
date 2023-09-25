import React from "react";
import "./TasksList.css";
import TaskType from "../models/Task";
import { Task } from "./Task";
import { data } from "../data/tasks";


type TasksListProps = {
    tasks : TaskType[];
  };

const tasks = data;

export const TasksList = (props: TasksListProps) => {

  return (<>
    <div className="list-container">
      {tasks.map((tasks) => (
      <Task key={tasks.id} task={tasks}/>
      ))}
    </div>
  </>)
}

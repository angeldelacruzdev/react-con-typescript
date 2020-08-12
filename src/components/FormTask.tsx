import React, { useState } from "react";
import './style.css';
import { useSubmitForm } from "../hook/useSubmitForm";


type formElement = React.FormEvent<HTMLFormElement>; 


interface Task {
    id: number,
    name: string,
    done: boolean
}

export const FormTask = (): JSX.Element => {


  const { handleSubmit, handleDeleteTask ,newTask, setNewTask, tasks} = useSubmitForm();


  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <form onSubmit={ handleSubmit}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Escriba la pregunta"
            onChange={ e => setNewTask(e.target.value)} 
            value={newTask}
        />
          <button className="btn btn-primary mt-2 btn-block" onClick={e => handleSubmit}>Add Task</button>
        </form>
      </div>
      <div className="col-md-6">
        <h2>List Task</h2>
        <hr />
        <ul className="list-group">
        {
          tasks.map( (task: Task, i: number) => (
            <li key={ i } className="list-group-item">
              <span>
                {task.name}
              </span>
              <button 
                className="btn btn-danger"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))
        }
      </ul>
      </div>  
    </div>
  );
};

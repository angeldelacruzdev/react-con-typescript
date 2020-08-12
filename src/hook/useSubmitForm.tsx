import { useState } from "react";

type formElement = React.FormEvent<HTMLFormElement>; 

interface Task {
    id: number,
    name: string,
    done: boolean
}

export const useSubmitForm = () => {


    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTask] = useState<Task[]>([])

    const handleSubmit = (e: formElement) => {
        e.preventDefault();
        if(newTask.trim()){
          const id: number = new Date().getTime();
          handleAddTask(newTask, id );
        }
    }

    const handleAddTask = (name: string, id: number) =>{
       
    const  taskItem: Task[]  =  [...tasks, {id, name, done: false}];
    setTask(taskItem );
    setNewTask('');
    
    }

    const handleDeleteTask = (id: number)  => {

      const newTaskItem = tasks.filter(task  => task.id !==  id);

      setTask(newTaskItem );
    }

    return { handleSubmit , handleDeleteTask, newTask, setNewTask, tasks}

}
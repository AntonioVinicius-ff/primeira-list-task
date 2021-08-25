import React, {createContext, useState, useEffect} from "react";
import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props =>{
const initialState = JSON.parse
  (localStorage.getItem ('tasks'))||[];

 const [tasks,setTasks] = useState(initialState);
    
const [editItem, setEditItem] = useState(null);

useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify
    (tasks));
},[tasks]);

    const addTask = title => {
        setTasks([...tasks, {title, id:uuid() }]);
    };
const removeTask = id =>{
    setTasks(tasks.filter(task => task.id !== id));
};
const deletList = () => {
    setTasks([]);
};
const findItem = id =>{
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
}
const editTask = (title, id)=>{
    const newTasks = tasks.map(task=>(task.id === id ? {title,id}:task))
    
    setTasks(newTasks);
setEditItem(null);

};
    return (
    <TaskListContextProvider value ={{tasks,
         addTask,
    removeTask,
     deletList,
      findItem,
       editItem,
        editTask
        }}
        >
        {props.children}
    </TaskListContextProvider>
    );
};

export default TaskListContextProvider;
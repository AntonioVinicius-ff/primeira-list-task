import React,{useContext, useState, useEffect} from "react";
import { TaskListContext } from "./context/TaskListContext";

 const TaskForm = () => {
  const {addTask, deletList, editItem, editTask} = useContext(TaskListContext);

const [title, setTitle] = useState("");

   const handleChange = e =>{
setTitle(e.targer.value);

   };
   const handleSubmit = e =>{
e.preventDefault();
if(!editItem){
    addTask(title);
    setTitle("");
}else{
    editTask(title, editItem.id);
}
   };

useEffect(()=>{
if(editItem){
    setTitle(editItem.title)
    console.log(editItem);
}else{
    setTitle("")
}

}, [editItem]);

     return(
      <form onSubmit={handleSubmit} className="form">
<input
onChange={handleChange}
value={title}
type="text"
className="task-input"
placeholder="add..."
required
/>
<div className="buttons">
<button type="submit" className="btn add-task-btn">
    {editItem ? 'Edit Task':'Add'}
</button>
<button onClick={deletList} className="btn delet-btn">
delete
</button>
</div>
      </form>
     )
 }

 export default TaskForm;
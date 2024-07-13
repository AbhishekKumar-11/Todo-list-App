import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({ deleteItem , task ,id }) {
   const [complete, setCompleted] = useState(task.completed);
    const toggleComplete = () => { 
     //   console.log(task);
        setCompleted(!task.completed)
    };
   
    const [data,setData] = useState(`${task.data}`)
    
   
     
  return (
    <div  id={complete ? "complteted" : ""}  onClick={toggleComplete} className=' hover:cursor-pointer w-2/3 h-full bg-cyan-600 mb-10 text-center  py-1  rounded-md flex items-center justify-around '>
<p  >{task.data}</p>
      <div  className='flex items-center gap-[10px]'>
       
        <FontAwesomeIcon className="hover:cursor-pointer" icon={faTrash} onClick={()=> deleteItem(task.id)}/>
        </div>
    </div>
    
  );
}

export default Todo;

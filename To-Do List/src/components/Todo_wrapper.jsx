import React, { useState } from 'react'
import Todo_input from './Todo_input'
import Todo from './Todo';

function Todo_wrapper() {

   let [todos,setTodos] = useState([]);
   let [count ,setCount ] = useState(0);

   const  todo = (data)=> {
      setTodos( (prev) =>[...prev,{data:data,completed:false ,id: count}] ) ; 
      setCount(count+1);
  //  console.log(todos);
      // todos.map((elem)=>{
      //    console.log(elem);
      // })
   }
   const deleteItem = (index) =>{
    setTodos(todos.filter(task => task.id !== index));

    // console.log(todos);
   }
  return (
    <div className='w-[500px] h-fit bg-purple-300 absolute top-[15%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg mt-[100px]  flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-white text-2xl'>Make your day more productive </h1>
        <Todo_input todo ={todo} />
        
         {todos.map((todo,index) =>{
        // console.log(todo); 
         return  <Todo deleteItem ={deleteItem} task={todo} key={index} />
         })}
        </div>
  )
}

export default Todo_wrapper
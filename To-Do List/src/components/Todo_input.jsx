import React, { useState } from 'react'

function Todo_input({todo}) {
    let  [input,setInput]  =  useState("") ;


  const handleSubmit = (e)=>{
    e.preventDefault(); 
    setInput("");
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='px-5  py-5  flex items-center '> 
    <input value={input}  onChange={(e) =>{setInput(e.target.value)}} className='h-[40px] w-3/4 bg-zinc-500 rounded-md outline-none px-2 font-semibold text-white' placeholder='enter the task '></input>
    <button className=' shrink px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300' onClick={() => todo(input)}>Add</button>
    </form>
    </>
  )
}

export default Todo_input
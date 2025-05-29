import React, { useState } from 'react'

function State() {
    const[count,setCount]=useState(0)
  return (
    <>
    <p>you clicked{count} times </p>
    <button className='border p-1 rounded'
    onClick={()=>{setCount(count+1)}}>
        click </button>
        </>
  )
}
export default State
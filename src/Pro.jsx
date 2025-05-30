import { TextField } from '@mui/material'
import React from 'react'

function Pro() {
  return (
  <>
   
   <div className='ml-110 p-3'>
<h1 className='text-2xl font-bold text-black p-2 '>Contact Us</h1>
<div className='flex flex-col gap-2 max-w-md'>
<label htmlFor="">Name</label>

<TextField  id="outlined-textarea" label=" enter your name" placeholder='eg: rizwan' variant="outlined" />
</div>





   </div>
   <div className='ml-110 p-3'>

<div className='flex flex-col gap-2 max-w-md'>

<label htmlFor="">Email</label>
<TextField  id="outlined-textarea" label=" enter your email" placeholder='eg: abdc@email.com' variant="outlined" />


</div>





   </div>
   <div className='ml-110 p-3'>

<div className='flex flex-col gap-2 max-w-md'>
  <label htmlFor="">Message</label>
<TextField  id="outlined-multiline-static"

 
label=" write your message"
multiline
rows={5}
 />
</div>
<div className='p-5'>
<button className='bg-blue-950 text-amber-50  h-20 w-80 m-4 hover:bg-blue-700 cursor-pointer  '>Submit
  
  
  
  </button>   
   </div>


   </div>
   

   
   
   
   
   
   
   
   
    </>
  )}
export default Pro
import React, { useState } from 'react'
import { use } from 'react'
  import Cards from './Components/Cards'

// const API_URL = 'http://localhost:5000/api/users'

const App = () => {

  const [name, setname] = useState("")
  const [position, setposition] = useState("")
  const [image, setimage] = useState("")
  const [alldata, setalldata] = useState([])

  const HandleSubmit = (e)=>{
    e.preventDefault();
    let newdata = {name,position,image}
    setalldata([...alldata,newdata])
    setname("")
    setposition("")

    setimage("")

  }

  const deleteHandler = (index)=>{
      const copyUser = [...alldata]
     const deletedUser=  copyUser.splice(index,1);
      setalldata(copyUser)
  }
  return (
    
   <div className=' p-10   gap-6 items-center justify-center   bg-zinc-200'>
     
     <div className='w-[300px] mb-12   rounded-sm   flex items-center justify-center h-[350px]  max-w-sm mx-auto p-4 bg-jpgcover bg-center   shadow-lg'   style={{ backgroundImage: "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2563.jpg?semt=ais_hybrid')" }}>
      <form onSubmit={
        HandleSubmit
      } className='p-4 flex flex-col items-center justify-center gap-3'>
        <img className='w-12 ' src="https://sheryians.com/Sheryians_Logo_wFKd9VClG.png" alt="" />
        <h1 className='font-bold text-teal-800 text-sm whitespace-nowrap '>SHERYIANS CODING <span className='text-orange-600'>SCHOOL</span></h1>
        <input 
        value={name}
        onChange={(e)=>setname(e.target.value)}
        type="text" placeholder='Enter your name'
        className='p-2 border-2 px-4 py-1  border-teal-700 rounded-md' />

        <input 
        value={image}
        onChange={(e)=>setimage(e.target.value)}
        type="text" placeholder='Enter image URL'
        className='p-2 border-2 px-4 py-1 border-teal-700 rounded-md' />
  
        <input 
        value={position}
        onChange={(e)=>setposition(e.target.value)}
        type="text" placeholder='Enter Your Position'
        className='p-2 border-2 px-4 py-1  border-teal-700 rounded-md' />
        

        <button className='mt-5 bg-blue-500 text-white px-4 py-1 rounded-full border-none'>Submit</button>
      </form>

    </div>
      <div className='flex justify-center items-center'>
        {alldata.map((item,index)=>{
          return <Cards key={index} item={item} index={index} deleteHandler={deleteHandler}/>
        })}
      </div>
   </div>
  )
}

export default App
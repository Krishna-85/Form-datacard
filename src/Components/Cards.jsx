import React from 'react'

const Cards = ({item,index,deleteHandler}) => {
  // console.log(index);
  return (
        <div key={index} className='h-[300px] w-[250px] p-2 border-2   border-teal-600 rounded-md flex flex-col items-center '>
            <div className='h-[60%] rounded-md overflow-hidden'>
            <img className='h-[120px] w-[120px] object-cover object-top rounded-full mx-auto'  src={item.image} alt="" />
            </div>
            <div className=' text-bold   text-xl text-center '>
                <h1 className='font-semibold capitalize '>{item.name}</h1>
                <h1 className='capitalize font-semibold text-teal-600'>{item.position}</h1>
                <h1>{item.id}</h1>
            </div>
           <div className='p-5'>
             <button onClick={()=>{
               deleteHandler(index)
             
             }} className='mx-auto bg-red-600 font-semibold border-none text-white px-6 py-1 rounded-full '>Delete</button>
           </div>
          </div>
  )
}

export default Cards
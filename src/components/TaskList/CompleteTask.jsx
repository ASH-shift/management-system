import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='  flex flex-col shrink-0 h-full p-5 w-[300px] rounded-xl bg-blue-400'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 '>Accept Task</button> 
     
   
    </div>
   
    </div>
  )
}

export default CompleteTask
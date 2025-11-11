import React from 'react'
import TaskListNumbers from './TaskListNumbers'

const Header = () => {
  return (
    <div className='flex text-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Ash</span></h1>
        <button className='bg-amber-700 px-5 rounded py-2 text-lg font-medium' >Log Out</button>

        
    </div>
  )
}

export default Header
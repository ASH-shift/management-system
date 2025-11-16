import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import AdminDashboard from './AdminDashboard'

const EmployeeDashboard = (props) => {
 
  return (
    <div className='text-white p-10 bg-[#1C1C1C] h-screen'>
      
    <Header changeUser={props.changeUser} data={props.data}/>
    <TaskListNumbers  data={props.data}/>
    <TaskList  data={props.data}/>
    {/* <AdminDashboard/> */}
    </div>
  )
}

export default EmployeeDashboard
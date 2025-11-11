import React, { useState } from 'react'

const login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const SubmitHandler=(e)=>{
        e.preventDefault();
       console.log('Form Submitted')

       setemail('');
       setpassword('');
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
            <form  
            onSubmit={(e)=>{
                SubmitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                 <input  
                 value={email}
                 onChange={(e)=>{
                    setemail(e.target.value)
                 }}
                 
                 className='border-2 border-emerald-400 px-2 py-4 rounded-full text-xl text-white' type="email" placeholder='Enter your email' />
            <input
             value={password}
                 onChange={(e)=>{
                    setpassword(e.target.value)
                 }}
            
            required className='border-2 border-emerald-400 px-2 py-4 mt-3 rounded-full text-xl text-white' type="password" placeholder='Enter Password'/>
            <button required className='border-2 mt-5 bg-emerald-400 px-6 py-2  rounded-full text-xl text-white'>Login</button>
            </form>
           
        </div>
    </div>
  )
}

export default login
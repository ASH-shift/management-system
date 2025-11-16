import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");   // ❗ remove login session
    props.changeUser(null);                    // ❗ go back to login
  };

  return (
    <div className='flex text-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>
          {props.data?.firstName || "Admin"}
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className='bg-amber-700 px-5 rounded py-2 text-lg font-medium'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header

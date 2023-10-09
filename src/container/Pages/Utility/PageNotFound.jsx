import React from 'react'
import Gif from '../../assests/404.gif'
import { Link } from 'react-router-dom'
const PageNotFound = () => {

  return (
    <div className='w-full h-screen  bg-[#fcfcff]'>

      <div className='w-full h-[50%] flex items-center justify-center'>
        <img src={Gif} className='h-auto' />
      </div>
      <div className='text-center p-5 mt-[2rem] leading-4'>
        <h2 className='text-3xl font-Poppins font-semibold'> OOP's !</h2>
        <h3 className='text-2xl font-Poppins'>Page Not Found</h3>
        <p className='leading-10 text-lg font-Poppins'>
          Looks like you choose the wrong path . Go back Home
        </p>
        <div className='p-3 m-3  flex justify-center items-center'>
          <Link to='/'>
            <div className='rounded-lg cursor-pointer p-3 text-lg text-white font-Poppins hover:bg-red-600 bg-red-500 '>
              Back Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound

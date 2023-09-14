import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <div className='flex w-full font-Poppins py-3 px-2 bg-gray-300' >
    
            

            <div className='w-[70%] p-3'>
                <div className='w-full text-center flex flex-col items-center '>

                    <img src='https://kjsit.somaiya.edu.in/assets/kjsieit/images/Logo/kjsieit-logo.svg' />
                    <h2 className='mt-5 text-sm'>
                        Designed and Developed by
                    </h2>
                    <h2 className='font-Poppins text-xs mt-2'>
                        Department Of Computer Engineering 
                    </h2>
                    <h2 className='font-semibold text-sm'>
                        K.J Somaiya Institute of Technology
                    </h2>
                    <p className='mt-4 text-sm'>
                        All Rights Reserved | {new Date().getFullYear()}
                    </p>
                </div>
            </div>

            <div className='p-3 w-[30%] ml-10'>

                <h2 className='font-semibold my-4 '> Quick Links</h2>
                <ul>
                    <li className='text-slate-800 hover:scale-105 transition-all duration-500 '>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className='text-slate-800 hover:scale-105 transition-all duration-500 '>
                        <Link to={'/auth/login'}>
                            Login
                        </Link>
                    </li>
                    <li className='text-slate-800 hover:scale-105 transition-all duration-500 '>
                        <Link to={'/results'}>
                            Results
                        </Link>
                    </li>
                    <li className='text-slate-800 hover:scale-105 transition-all duration-500 '>
                        <Link to={'/guidelines'}>
                            Guidelines
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Footer

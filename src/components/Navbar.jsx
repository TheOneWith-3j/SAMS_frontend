import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className='p-1 bg-white'>
            <div className='flex font-Poppins'>

                {/* Image  */}
                <Link to='/'>
                    <div className='m-3'>
                        <img src="https://kjsit.somaiya.edu.in/assets/kjsieit/images/Logo/kjsieit-logo.svg" alt='kjsit-logo' style={{height:"100px", width:"600px"}}  className='scale-100' />
                    </div>
                </Link>

                {/* Links */}
                <div className='flex items-center' >

                    <Link to={'/guidelines'}>
                        <div className=' cursor-pointer p-2 mx-4 hover:scale-105 transition-all duration-300'>
                            <p className='text-red-800 font-Roboto text-2xl font-semibold'>
                                Guidelines
                            </p>
                        </div>
                    </Link>

                    <Link to={'/groups'}>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p className='text-red-800 font-Roboto text-2xl font-semibold'>
                                Groups
                            </p>
                        </div>
                    </Link>

                    <Link to='/results'>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p className='text-red-800 font-Roboto text-2xl font-semibold'>
                                Results
                            </p>
                        </div>
                    </Link>

                    <Link to='/about'>
                        <div className='p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300'>
                            <p className='text-red-800 font-Roboto text-2xl font-semibold'>
                                About
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Profile  */}

                <div className='flex items-center w-full justify-end'>
                    <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar

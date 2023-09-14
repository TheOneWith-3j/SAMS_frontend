import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Wave from 'react-wavify'
import Field from '../../components/utils/Field'
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {

    const [credentials, setCredentials] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));

    };

    const handleClick = () => {

        navigate('/auth/forgot-password')
    }

    const handleSubmit = async () => {

        if (Object.keys(credentials).length === 2) {

            await axios.post('http://localhost:5001/auth/login', credentials)
                .then((res) => {
                    console.log(res);
                    if (res.data['authorized']) {

                        localStorage.setItem('token', res.data['token'])
                        localStorage.setItem('user_id', res.data['user_id'])
                        localStorage.setItem('institution', res.data['institution'])
                        localStorage.setItem('role', res.data['role'])
                        setCredentials({})

                        switch (res.data['role']) {

                            case "ADMIN":
                                navigate('/admin/dashboard')
                                break;

                            case "IEAC":
                                navigate('/ieac')
                                break;

                            case "HOI":
                                navigate('/hoi')
                                break;

                            case "STUDENTS ADMIN":
                                navigate('/students-admin')
                                break;

                            case "SPORTS ADMIN":
                                navigate('/sports-admin')
                                break;

                            case "STUDENT":
                                navigate('/students')
                                break;

                            case "PEER":
                                navigate('/peers')
                                break;

                            case "RESEARCH ADMIN":
                                navigate('/research-admin')
                                break;

                        }
                    }
                    else {
                        console.log("Failed to login");
                    }
                })
                .catch((err) => {

                    console.log(err);
                    Swal.fire({
                        title: "User not Found",
                        imageUrl: 'https://img.freepik.com/premium-vector/male-student-feeling-confused-while-looking-up-with-thoughtful-focused-expression-questioned-thinking-curious-with-question-mark-concept-illustration_270158-365.jpg?w=2000',
                        imageHeight: '200',
                        text: "Check your email ID, password and retry",
                        confirmButtonColor: 'rgb(185,28,28)'
                    })

                })
        }
        else {
            Swal.fire({
                title: 'All Fields Required',
                text: "You may have missed to enter some fields",
                icon: 'info',
                confirmButtonColor: 'rgb(185,28,28)'
            })
        }
    }

    return (
        <div className='h-screen'>
            <Navbar />

            <div className='flex items-center mt-[3rem]'>
                <div className='mx-auto shadow-xl w-[30%] p-5 rounded-md'>
                    <div className='text-center'>
                        <h2 className='font-Poppins text-2xl font-semibold text-red-700'>
                            Login
                        </h2>
                    </div>
                    <div className='p-5'>
                        <Field
                            className='w-full'
                            page='login'
                            placeholder="kjsit_hoi@somaiya.edu"
                            title="Email"
                            type='email'
                            name="user_email"
                            value={credentials['user_email'] || ''}
                            onChange={handleChange}
                        />
                        <Field
                            className="w-full"
                            page='login'
                            placeholder="password"
                            title="Password"
                            type='password'
                            name="user_password"
                            value={credentials['user_password'] || ''}
                            onChange={handleChange}
                        />
                        <p
                            onClick={handleClick}
                            className='mx-4 py-3 hover:cursor-pointer font-Poppins text-md text-blue-800 hover:animate-pulse'
                        >
                            Forgot password ?
                        </p>
                    </div>
                    <div className='flex justify-center p-5'>
                        <button
                            className='w-[70%] text-white rounded-lg bg-red-700 p-3 hover:bg-red-600'
                            onClick={handleSubmit}
                            type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <Wave
                fill="#b91c1c"
                paused={false}
                className='absolute bottom-0 -z-10'
                options={{
                    height: 10,
                    amplitude: 50,
                    speed: 0.15,
                    points: 5
                }}
            />
        </div>
    )
}

export default Login

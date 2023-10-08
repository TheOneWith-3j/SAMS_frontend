import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import FormCard from '../../../components/utils/FormCard';
import Teaching from '../../assests/teaching.jpeg'
import NonTeaching from '../../assests/non-teaching.jpeg'
import { MoonLoader } from 'react-spinners';
import axios from 'axios';


const Student = () => {

    const [loading, setLoading] = useState(true)
    const [authorized, setAuthorized] = useState(false)

    const navigate = useNavigate();

    const handleLogout = () => {

        // remove token from local storage

        localStorage.removeItem('token')
        localStorage.removeItem('user_id')

        Swal.fire({
            title: 'Successfully Logged Out',
            icon: 'success',
            confirmButtonColor: 'rgb(185,28,28)'
        })

        // navigate to login page
        navigate('/auth/login')
    }

    useEffect(() => {

        if (!localStorage.getItem('token') || !localStorage.getItem('user_id')) {
            Swal.fire({
                title: "Failed to Login",
                text: "We failed to recognize you! Try relogging",
                imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
                // imageWidth:"150",
                imageHeight: '250',
                confirmButtonColor: "rgb(185,28,28)"
            })
            navigate('/auth/login')
        }
        else {

            axios.get('http://localhost:5001/auth/validate', {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                    'user_id': localStorage.getItem('user_id')
                }
            })
                .then((res) => {

                    if (res.data['authorized'] && res.data['role'] === 'PEER') {

                        setAuthorized(res.data['authorized'])
                        setLoading(false)
                    }
                    else {

                        Swal.fire({
                            title: "Failed to Login",
                            text: "We failed to recognize you! Try relogging",
                            imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
                            // imageWidth:"150",
                            imageHeight: '250',
                            confirmButtonColor: "rgb(185,28,28)"
                        })
                        navigate('/auth/login')
                    }
                })
                .catch((err) => {
                    console.log(err);
                    Swal.fire({
                        title: "Failed to Login",
                        text: "We failed to recognize you! Try relogging",
                        imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
                        // imageWidth:"150",
                        imageHeight: '250',
                        confirmButtonColor: "rgb(185,28,28)"
                    })
                    navigate('/auth/login')
                })
        }
    }, [])


    return (
        <div>
            {
                loading
                    ?
                    <>
                        <div className='w-full h-screen flex justify-center items-center'>
                            <MoonLoader
                                loading={loading}
                                size={50}
                                color="rgb(185,28,28"
                            />
                        </div>
                    </>
                    :
                    authorized
                        ?
                        <>

                            <Navbar />

                            <div className='flex justify-between font-Poppins p-10'>
                                <div>
                                    <h2 className='text-xl text-red-800 font-semibold '>
                                        Peer Login
                                    </h2>
                                    <p className='text-sm'>
                                        {localStorage.getItem('institution')}
                                    </p>
                                </div>
                                <div>
                                    <div className='p-2 cursor-pointer' onClick={handleLogout}>
                                        <LogoutRoundedIcon />
                                    </div>
                                </div>
                            </div>

                            <div className='flex w-full justify-evenly p-10 mb-8'>

                                <div className='w-[50%]'>
                                    <FormCard
                                        image={Teaching}
                                        title="Teaching Feedback"
                                        info="Feedbacks for teaching staff for awards nomination"
                                        link="/forms/feedback-02"
                                    />
                                </div>

                                <div className='w-[50%]'>
                                    <FormCard
                                        image={NonTeaching}
                                        title="Non Teaching Feedback"
                                        info="Feedbacks for non-teaching staff for awards nomination"
                                        link="/forms/feedback-04"
                                    />
                                </div>

                            </div>

                            <Footer />
                        </>
                        :
                        navigate('/auth/login')
            }
        </div>
    )
}

export default Student


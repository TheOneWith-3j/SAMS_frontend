import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../../components/SideBar'
import Box from '../../../components/status components/Box'
import LineGraph from '../../../components/status components/LineGraph'
import Datagrid from '../../../components/status components/Datagrid'
import Piechart from '../../../components/status components/Piechart'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import Swal from 'sweetalert2'

const Admin = () => {

    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(true)
    const [counts, setCounts] = useState('');
    const [pastData, setPastData] = useState('');
    const [rows, setRows] = useState('');
    const [pieData,setPieData] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {

        // first load all data
        loadDashboardData()


        // check user authentication

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
            navigate('/auth/login')
        }

        axios.get('http://localhost:5001/auth/validate', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'user_id': localStorage.getItem('user_id')
            }
        })
            .then((res) => {

                if (res.data['authorized'] && res.data['role'] === 'ADMIN') {

                    setAuthorized(res.data['authorized'])
                    setLoading(false);
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
                navigate('/auth/login')
            })

    }, [])

    const loadDashboardData = () => {

        // all Counts
        axios.get('http://localhost:5001/admin/data/count/all', {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token'),
            }
        })
            .then((res) => {
                setCounts(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })

        // 15 days Count
        axios.get('http://localhost:5001/admin/data/count/15', {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token'),
            }
        })
            .then((res) => {
                setPastData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })

        // institution Wise count 
        axios.get('http://localhost:5001/admin/data/count/institution-wise', {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token'),
            }
        })
            .then((res) => {
                setRows(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })

         // group Wise count

         axios.get('http://localhost:5001/admin/data/count/group', {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token'),
            }
        })
            .then((res) => {
                setPieData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })


    }

    /**
     * Logout Feature
     */

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


    return (
        <div className='adminPage'>

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
                            {/* sidebar  */}
                            <div className='flex h-screen text-white font-Poppins'>
                                <SideBar />
                                <div className='flex p-3  flex-col w-full overflow-y-scroll'>
                                    <div className='p-2 flex flex-row items-center justify-between'>
                                        <div className='w-[70%]'>
                                            <div className='text-black font-Roboto text-2xl '>
                                                DashBoard
                                            </div>
                                            <div className='text-black  '>
                                                Welcome to your Dashboard
                                            </div>
                                        </div>
                                        <div className='text-black'>
                                            <div
                                                onClick={handleLogout}
                                                className='flex flex-col cursor-pointer text-center justify-center'>
                                                <div>
                                                    <LogoutRoundedIcon />
                                                </div>
                                                Logout
                                            </div>
                                        </div>
                                    </div>

                                    {/* flex div containing boxes and graph  */}
                                    <div className='flex flex-row p-2 text-black justify-between'>

                                        {/* count section  */}
                                        <div className='flex flex-row w-[30%]'>
                                            <div>
                                                <Box title="Research Forms" count={counts.researchFormCount} />
                                                <Box title="Non Teaching Forms" count={counts.nonTeachingFormCount} />
                                            </div>
                                            <div>
                                                <Box title="Teaching Forms" count={counts.teachingFormCount} />
                                                <Box
                                                    title="Total Forms Filled"
                                                    count={
                                                        counts.institutionFormCount +
                                                        counts.researchFormCount +
                                                        counts.sportsFormCount +
                                                        counts.teachingFormCount +
                                                        counts.nonTeachingFormCount +
                                                        counts.feedbackOneFormCount +
                                                        counts.feedbackTwoFormCount +
                                                        counts.feedbackThreeFormCount +
                                                        counts.feedbackFourFormCount +
                                                        counts.studentsFormCount
                                                    }
                                                />
                                            </div>
                                        </div>

                                        {/* graph section  */}
                                        <div className='w-[70%]'>
                                            <LineGraph data={pastData} />
                                        </div>
                                    </div>

                                    {/* flex row containing table and piechart  */}
                                    <div className='flex flex-row text-black p-5 h-full'>
                                        <div className='w-[70%] custom-scroll bg-[#FFFAFA] rounded-lg p-4 h-[25rem] overflow-y-scroll'>
                                            <Datagrid
                                                rows={rows}
                                            />
                                        </div>
                                        <div className='w-[30%]'>
                                            <Piechart data={pieData} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </>
                        :
                        null
            }

        </div>
    )
}

export default Admin

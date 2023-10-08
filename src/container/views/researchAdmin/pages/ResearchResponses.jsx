import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import SideBar from '../components/Sidebar'
import { columns01 } from '../../../../data/AnalysisData/RESEARCH ADMIN/structure'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

const ResearchResponses = () => {

    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState(columns01)

    const [loading, setLoading] = useState(true)
    const [authorized, setAuthorized] = useState(false)

    const navigate = useNavigate();

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

                    if (res.data['authorized'] && res.data['role'] === 'RESEARCH ADMIN') {

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

        const url = 'http://localhost:5001/research-admin/data/research'
        axios.get(url, {
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

    }, [])

    return (
        <div className='flex'>

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
                            <SideBar />

                            <div className='flex overflow-y-scroll flex-col w-full h-screen'>

                                <div className='p-5'>

                                    <div>
                                        <h2 className='text-xl font-Poppins font-semibold capitalize'>
                                            Research Form Responses
                                        </h2>
                                    </div>

                                    <div className='my-5'>

                                        <DataGrid
                                            columns={columns}
                                            rows={rows}
                                            density='comfortable'
                                            slots={{
                                                toolbar: GridToolbar,
                                            }}
                                            slotProps={{
                                                toolbar: {
                                                    showQuickFilter: true,
                                                    quickFilterProps: { debounceMs: 500 },
                                                }
                                            }}
                                            sx={{
                                                boxShadow: 2,
                                                padding: 2
                                            }}
                                        />

                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        navigate('/auth/login')
            }

        </div>
    )
}

export default ResearchResponses

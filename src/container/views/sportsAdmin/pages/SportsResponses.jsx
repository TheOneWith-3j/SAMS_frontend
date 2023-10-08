import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import SideBar from '../components/Sidebar'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns01, columns02, columns03 } from '../../../../data/AnalysisData/SPORTS ADMIN/structure';
import axios from 'axios'
import Swal from 'sweetalert2';
import { MoonLoader } from 'react-spinners';

const SportsResponses = () => {

    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [title, setTitle] = useState()
    const [loading, setLoading] = useState(true)
    const [authorized, setAuthorized] = useState(false)

    const location = useLocation();
    const navigate = useNavigate()

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

                    if (res.data['authorized'] && res.data['role'] === 'SPORTS ADMIN') {

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

        let path = location.pathname.split('/responses/')[1];
        let name = path.replaceAll('-', " ");

        switch (path) {
            case 'sports-star-girl':
                setColumns(columns01)
                break;

            case 'sports-star-boy':
                setColumns(columns02)
                break;

            case 'inspiring-coach':
                setColumns(columns03)
                break;

            default:
                navigate('/sports-admin')
        }

        const url = `http://localhost:5001/sports-admin/data/${path}`

        axios.get(url, {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then((res) => {
                setRows(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })

        setTitle(name);

    }, [location])

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
                            <div className='flex flex-col w-full h-screen overflow-y-scroll'>
                                <div className='p-5'>

                                    <div>
                                        <h2 className='text-xl font-Poppins font-semibold capitalize'>
                                            {title}
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

export default SportsResponses

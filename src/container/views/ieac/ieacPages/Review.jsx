import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../ieacComponents/Sidebar'
import { useLocation } from 'react-router-dom'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns01, columns02, columns04, columns05 } from '../../../../data/AnalysisData/IEAC/structure';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MoonLoader } from 'react-spinners';

const Review = () => {

    const [title, setTitle] = useState('');
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const location = useLocation();
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

                    if (res.data['authorized'] && res.data['role'] === 'IEAC') {

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

        let pathLabel = location.pathname.split('/review/')[1];
        setTitle(pathLabel);

        switch (pathLabel) {
            case 'outstanding-institution':
                setColumns(columns01)
                break;

            case 'teaching':
                setColumns(columns04)
                break;

            case 'non-teaching':
                setColumns(columns05)
                break;

            default:
                navigate('/ieac')
        }

        const url = `http://localhost:5001/hoi/data/${pathLabel}`;

        axios.get(url, {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then((res) => {
                if (res.data) {
                    setRows(res.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }, [location])


    const handleFileChange = (event) => {
        const data = {
            approvalFile: event.target.files[0]
        }

        const path = window.location.href.split('/review/')[1];

        //axios file upload 
        Swal.fire({
            title: 'Confirmation',
            icon: 'question',
            text: `Selected File: ${data.approvalFile.name}`,
            showDenyButton: true,
            confirmButtonText: 'Upload File'
        })
            .then((res) => {
                if (res.isConfirmed == true) {
                    axios.post(`http://localhost:5001/ieac/data/${path}`, data, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'user_id': localStorage.getItem('user_id'),
                            'x-access-token': localStorage.getItem('token'),
                        }
                    }).
                        then((res) => {
                            Swal.fire({
                                icon: 'success',
                                title: 'File Uploaded Successfully'
                            })
                                .then((res) => {
                                    window.location.reload();
                                })
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            })
    }

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
                            <div className='flex h-screen'>
                                <SideBar />

                                <div className='flex p-5 flex-col w-full font-Poppins overflow-y-scroll'>
                                    <h2 className='text-xl font-semibold'>
                                        {title.toUpperCase()} Form Responses
                                    </h2>
                                    <div className='mt-[3rem] p-2'>

                                        <DataGrid
                                            rows={rows}
                                            columns={columns}
                                            density='comfortable'
                                            slots={{ toolbar: GridToolbar }}
                                            slotProps={{
                                                toolbar: {
                                                    showQuickFilter: true,
                                                    quickFilterProps: { debounceMs: 500 },
                                                },
                                            }}
                                            sx={{
                                                boxShadow: 2,
                                                padding: 2
                                            }}
                                        />

                                    </div>
                                    {
                                        rows[0]
                                            ?
                                            rows[0].ieacApprovedFile != null
                                                ?
                                                null
                                                :
                                                <div>
                                                    <input type='file' name='approvalFile' onChange={handleFileChange}></input>
                                                </div>
                                            :
                                            <div>
                                                <input type='file' name='approvalFile' onChange={handleFileChange}></input>
                                            </div>
                                    }
                                </div>
                            </div>
                        </>
                        :
                        navigate('/auth/login')
            }

        </div>
    )
}

export default Review

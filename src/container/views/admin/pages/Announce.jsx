import React, { useEffect, useState } from 'react'
import SideBar from '../../../../components/SideBar'
import { FileUploader } from 'react-drag-drop-files'
import Swal from 'sweetalert2'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
const Announce = () => {

    const [announced, setAnnounced] = useState(false)
    const [url, setUrl] = useState()
    const [loading, setLoading] = useState(true)
    const [authorized, setAuthorized] = useState(false)

    const navigate = useNavigate();

    const fileTypes = ["CSV", "XLSX"];

    const handleChange = (file) => {
        console.log(file);

        Swal.fire({
            icon: 'question',
            title: "Confirmation",
            text: `Selected File : ${file.name}`
        })
            .then((res) => {
                if (res.isConfirmed) {

                    // make axios post request
                    axios.post('http://localhost:5001/admin/data/announce-results', { result: file }, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    })
                        .then((res) => {
                            console.log(res);
                            window.location.reload()
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            })
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

                    if (res.data['authorized'] && res.data['role'] === 'ADMIN') {

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

        const url = 'http://localhost:5001/admin/data/results'
        axios.get(url, {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then((res) => {

                if (res.data.data.length != 0) {

                    let path = res.data.data[0].result;
                    path = path.split('data')[1]
                    setUrl(path)
                    setAnnounced(true)
                } else {
                    console.log(res.data);
                }
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

                            <div className='flex flex-col w-full h-screen overflow-y-scroll'>
                                <div className='p-5 font-Poppins'>

                                    <h2 className='text-xl font-semibold'>
                                        📢 Announce Results
                                    </h2>

                                    {
                                        announced
                                            ?
                                            <>
                                                <p className='my-2'>
                                                    <span className='font-semibold text-green-700'>Status</span> : Announced
                                                </p>

                                                <div>
                                                    Results have been announced for the current Year . Download The File to View

                                                    <div className='bg-red-800 text-white p-3 hover:bg-red-400 w-52 my-8 rounded-xl text-center animate-pulse'>
                                                        <a href={`http://localhost:5001${url}`} download>Download</a>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <p className='my-2'>
                                                    <span className='font-semibold text-green-700'>Status</span> : Not Announced
                                                </p>
                                                <p className='text-md my-3'>
                                                    Drop a Excel File with names of winner's , their institute name  and Award category to Announce Results Publicly
                                                </p>

                                                <div className='my-5 p-2 flex justify-center'>
                                                    <div className=' rounded-xl bg-slate-100 h-[200px] w-[50%] flex justify-center items-center'>
                                                        <FileUploader handleChange={handleChange} name="result" types={fileTypes} />
                                                    </div>
                                                </div>
                                            </>
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

export default Announce

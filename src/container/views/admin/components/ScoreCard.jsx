import React, { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BarGraph from './BarGraph';
import axios from 'axios';

const ScoreCard = () => {


    const cardRef = useRef(null);
    const [apiData, setApiData] = useState({})
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const handleDownload = () => {

        const cardElement = cardRef.current;

        html2canvas(cardElement, {
            scale: 2,
            backgroundColor: null,
            logging: false,
            useCORS: true,
        }).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'scoreCard.png';
            link.click();
        });

    }

    useEffect(() => {


        if (window.location.href.split('/')[4] === 'teaching') {

            axios.get('http://localhost:5001/admin/data/teaching/scorecard', {
                headers: {
                    'user_id': localStorage.getItem('user_id'),
                    'x-access-token': localStorage.getItem('token'),
                    'applicationid': window.location.href.split('/scorecard/')[1],
                }
            })
                .then((res) => {
                    setApiData(res.data);
                    setLoading(false)

                    setData([
                        {
                            name: 'HOI',
                            AvgScore: res.data.hoi_avg,
                        },
                        {
                            name: 'IEAC',
                            AvgScore: res.data.ieac_avg,
                        },
                        {
                            name: 'Students',
                            AvgScore: res.data.student_avg,
                        },
                        {
                            name: 'Peers',
                            AvgScore: res.data.peers_avg
                        }
                    ])

                })
                .catch((err) => {
                    console.log(err);
                })

        }

        else {

            axios.get('http://localhost:5001/admin/data/non-teaching/scorecard', {
                headers: {
                    'user_id': localStorage.getItem('user_id'),
                    'x-access-token': localStorage.getItem('token'),
                    'applicationid': window.location.href.split('/scorecard/')[1],
                }
            })
                .then((res) => {
                    setApiData(res.data);
                    setLoading(false)

                    setData([
                        {
                            name: 'HOI',
                            AvgScore: res.data.hoi_avg,
                        },
                        {
                            name: 'IEAC',
                            AvgScore: res.data.ieac_avg,
                        },
                        {
                            name: 'Students',
                            AvgScore: res.data.student_avg,
                        },
                        {
                            name: 'Peers',
                            AvgScore: res.data.peers_avg
                        }
                    ])

                })
                .catch((err) => {
                    console.log(err);
                })

        }


    }, [])

    return (
        <div className='w-full flex items-center justify-center h-screen font-Poppins'>

            <div className='w-[60%] flex justify-center'>

                <div ref={cardRef} className=' h-[28rem] w-[80%] shadow-xl bg-[#ffffff] rounded-md'>

                    <div className='flex p-1 items-center '>

                        <div className=''>
                            <img
                                src='data:image/png;base64,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'
                                className='mix-blend-multiply w-20'
                            />
                        </div>

                        <div className='items-center w-full text-center font-Roboto'>
                            <h1 className='text-xl font-semibold text-red-800 '>
                                Somaiya Awards Scorecard {new Date().getFullYear()}
                            </h1>
                        </div>

                        <div
                            className='flex items-center text-sm text-center mx-3 cursor-pointer'
                            onClick={handleDownload}
                        >
                            <FileDownloadOutlinedIcon color='rgb(185,28,28)' className='scale-90' />
                            Download
                        </div>
                    </div>

                    <div className='my-1 mt-5 p-1 flex'>

                        <div className='mx-3 w-full'>

                            <h3 className='my-1 text-sm'>
                                <span className='text-red-800 font-semibold'> Name : </span>
                                <span> {loading ? <Skeleton width={200} /> : apiData.name}</span>
                            </h3>

                            <h3 className='my-1 text-xs'>
                                <span className='text-red-800 font-semibold'> Institute : </span>
                                <span> {loading ? <Skeleton width={200} /> : apiData.institute}</span>
                            </h3>

                            <h3 className='my-1 text-xs'>
                                <span className='text-red-800 font-semibold'> Award Type : </span>
                                <span> {loading ? <Skeleton width={200} /> : apiData.category}</span>
                            </h3>

                            <div className='mt-5'>
                                <h2 className='font-semibold text-blue-700'>
                                    Scores
                                </h2>

                                <div className='mt-5'>

                                    <h3 className='text-sm my-1'>
                                        <span className='text-red-800 font-semibold'> Score A : </span>
                                        <span> {loading ? <Skeleton width={200} /> : apiData.scoreA}</span>
                                    </h3>
                                    {console.log(apiData)}
                                    <h3 className='text-sm my-1'>
                                        <span className='text-red-800 font-semibold'> Score B : </span>
                                        <span> {loading ? <Skeleton width={200} /> : apiData.scoreB}</span>
                                    </h3>
                                    {
                                        (window.location.href.split('/')[4] === 'teaching')
                                            ?
                                            <>
                                                <h3 className='text-sm my-1'>
                                                    <span className='text-red-800 font-semibold'> Score C : </span>
                                                    <span> {loading ? <Skeleton width={200} /> : apiData.scoreC}</span>
                                                </h3>
                                            </>
                                            :
                                            null
                                    }

                                    <h3 className='text-sm my-1'>
                                        <span className='text-red-800 font-semibold'> Average Feedback Students : </span>
                                        <span> {loading ? <Skeleton width={200} /> : apiData.student_avg}</span>
                                    </h3>

                                    <h3 className='text-sm my-1'>
                                        <span className='text-red-800 font-semibold'> Average Feedback Peers : </span>
                                        <span> {loading ? <Skeleton width={200} /> : apiData.peers_avg}</span>
                                    </h3>

                                    <h3 className='text-sm my-1'>
                                        <span className='text-red-800 font-semibold'> Final Score : </span>
                                        <span> {loading ? <Skeleton width={200} /> : 0.6*((apiData.student_avg+ apiData.peers_avg)/2) + 0.4*(apiData.ieac_avg) }</span>
                                    </h3>

                                </div>

                            </div>
                        </div>

                        <div className='w-full justify-center items-center'>
                            <BarGraph
                                data={data}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreCard

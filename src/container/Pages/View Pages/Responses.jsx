import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import SideBar from '../../../components/SideBar';
import { motion } from 'framer-motion'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns01, columns02, columns03, columns04, columns05, columns06, columns07, columns08, columns09, columns10, columns11, columns12 } from '../../../data/AnalysisData/ADMIN/structure';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';
import Swal from 'sweetalert2';


const Responses = () => {

  /**
   * Sample section
   */

  // const [rows, setRows] = useState()
  const [title, setTitle] = useState()
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)

  const navigate = useNavigate();


  const location = useLocation()

  useEffect(() => {

    // Authentication
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

    let path = location.pathname.split('/responses/')[1];

    console.log(path);

    switch (path) {
      case 'outstanding-institution':
        setTitle('Outstanding Institution')
        setColumns(columns01);
        break;

      case 'research':
        setTitle('Research')
        setColumns(columns02);
        break;

      case 'students':
        setTitle('Students')
        setColumns(columns03);
        break;

      case 'sports-boy':
        setTitle('Sports Star Boy')
        setColumns(columns11);
        break;

      case 'sports-girl':
        setTitle('Sports Star Girl')
        setColumns(columns10);
        break;

      case 'sports-coach':
        setTitle('Inspiring Coach')
        setColumns(columns12);
        break;

      case 'teaching':
        setTitle('Teaching')
        setColumns(columns04);
        break;

      case 'non-teaching':
        setTitle('Non Teaching')
        setColumns(columns05);
        break;

      case 'feedback-01':
        setTitle('Teaching Students Feedback')
        setColumns(columns06);
        break;

      case 'feedback-02':
        setTitle('Teaching Peers Feedback')
        setColumns(columns07);
        break;

      case 'feedback-03':
        setTitle('Non Teaching Students Feedback')
        setColumns(columns08);
        break;

      case 'feedback-04':
        setTitle('Non Teaching Peers Feedback')
        setColumns(columns09);
        break;

      default:
        navigate('/admin/dashboard')

    }

    axios.get(`http://localhost:5001/admin/data/forms/${path}`, {
      headers: {
        'user_id': localStorage.getItem('user_id'),
        'x-access-token': localStorage.getItem('token'),
      }
    })
      .then((res) => {
        console.log(res);
        setRows(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })


  }, [location]);



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
              <div className='flex flex-row'>
                <SideBar />

                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  className='flex flex-col p-5 w-full overflow-x-scroll'>

                  <div className='flex flex-col w-full p-5'>

                    <h2 className='text-xl font-Poppins font-semibold'>
                      {title}
                    </h2>

                    <div className='my-5'>

                      <DataGrid
                        rows={rows}
                        columns={columns}
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

                </motion.div>
              </div>
            </>
            :
            navigate('/auth/login')
      }

    </div>
  )
}

export default Responses

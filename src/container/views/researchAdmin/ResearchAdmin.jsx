import React, { useState, useEffect } from 'react'
import SideBar from './components/Sidebar'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';

const ResearchAdmin = () => {

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

              <div className='flex-col flex w-full h-screen overflow-y-scroll'>
                <div className='flex justify-between font-Poppins p-10'>
                  <div>

                    <h2 className='text-xl text-red-800 font-semibold '>
                      Welcome Research Admin
                    </h2>

                  </div>
                  <div>
                    <div className='p-2 cursor-pointer' onClick={handleLogout}>
                      <LogoutRoundedIcon />
                    </div>
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

export default ResearchAdmin

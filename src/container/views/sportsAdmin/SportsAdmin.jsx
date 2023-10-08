import React, { useState, useEffect } from 'react'
import SideBar from './components/Sidebar'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Tile from '../studentsAdmin/components/Tile'

const SportsAdmin = () => {

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

  //AUTH
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

              <div className='flex flex-col h-screen w-full overflow-y-scroll'>

                <div className='font-Poppins p-5'>

                  <div className='flex items-center justify-between'>
                    <div>
                      <h2 className='text-xl font-semibold '>
                        Welcome Sports Admin
                      </h2>
                    </div>
                    <div>

                      <div className='p-2 flex flex-col justify-center items-center cursor-pointer' onClick={handleLogout}>

                        <div>
                          <LogoutRoundedIcon />
                        </div>

                        <div>
                          Logout

                        </div>

                      </div>
                    </div>
                  </div>

                  <h2 className='text-xl font-semibold'>
                    Features
                  </h2>

                  <Tile
                    title="Columns Selection"
                    text="Columns Selection: Look for the Columns Selection feature in the column header section. You may find a checkbox or an icon to toggle the visibility of columns."
                  />

                  <Tile
                    title="Data Export"
                    text="Export: Locate the Export functionality in the toolbar or a context menu within the Data Grid component. It might be represented by an icon (e.g., CSV icon, Excel icon) or a menu item like 'Export to CSV or Export to Excel.'"
                  />

                  <Tile
                    title="Filter"
                    text="Find the Filter option in the column headers. Look for a filter menu or dialog that allows you to apply various filter criteria to the data."
                  />

                  <Tile
                    title="Sorting"
                    text="Clicking on a column header typically triggers the sorting functionality.
                    When a user clicks on a column header for the first time, the data is sorted in ascending order (e.g., from the smallest to the largest value).
                    Clicking on the same column header again reverses the sorting order, showing the data in descending order (e.g., from the largest to the smallest value)."
                  />

                  <Tile
                    title="Quick Filter"
                    text="Quick Filter often performs a partial match, meaning it shows results that contain the entered search term, regardless of its position in the data.
                    Clearing the search input field or deleting its contents usually brings back the full dataset, restoring the original view."
                  />
                </div>
              </div>

            </>
            :
            navigate('/auth/login')
      }
    </div>
  )
}

export default SportsAdmin

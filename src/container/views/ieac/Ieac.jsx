import React, { useState, useEffect } from 'react'
import SideBar from './ieacComponents/Sidebar'
import { MoonLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Tile from './ieacComponents/Tile';
import Inst1 from '../../assests/inst1.png'
import Inst2 from '../../assests/inst2.png'
import Inst3 from '../../assests/inst3.png'
import Inst4 from '../../assests/inst4.png'
import Inst5 from '../../assests/inst5.png'


const Ieac = () => {

  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  /**
   * Logout
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


  /**
   * Authorization 
   */

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
  }, [])

  return (
    <div className='h-screen w-full'>
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
              <div className='flex'>
                <SideBar />
                <div className='flex flex-col p-5 font-Poppins w-full overflow-y-scroll h-screen'>

                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col'>
                      <div className='text-xl font-semibold'>
                        Welcome IEAC Member
                      </div>
                      <div className='text-sm'>
                        {localStorage.getItem('institution')}
                      </div>
                    </div>

                    <div
                      onClick={handleLogout}
                      className='p-5 mr-[2rem] hover:cursor-pointer flex flex-col items-center'>
                      <div>
                        <LogoutRoundedIcon />
                      </div>
                      <div>
                        Logout
                      </div>
                    </div>
                  </div>

                  <div className='mt-[2rem]'>
                    <h2 className='text-lg font-semibold'>
                      Instructions
                    </h2>
                    <div className='p-2 ml-[2rem] mt-3'>

                      <div>

                        <Tile
                          title="1. Navigate to Recommended / Not Recommeded Columns"
                          info="In each form responses there is a column name recommended to recommend a nominee to futher rounds. In case some category of awards there is a not recommeded column which is mandatory for marking the nominees"
                          image={Inst1}
                        />

                        <Tile
                          title="2. Click on checkbox to Recommned"
                          info="Click on the checkbox in front of the nominee to Recommend him/her"
                          image={Inst2}
                        />

                        <Tile
                          title="3a. Confirm your decision"
                          info="Click on confirm if you confirm your decision to recommend the nominee else click deny or anywhere else on screen"
                          image={Inst3}
                        />

                        <Tile
                          title="3b. Enter your score and confirm"
                          info="In case of teaching and non- teaching category of awards IAEC Member are required to enter their score of each nominee wheter he/she is recommended or not  and confirm "
                          image={Inst4}
                        />
                        
                        <Tile
                          title="4. Upload Recommendation File"
                          info="At last after confirming all the decision and marking recommeded and not recommended ones upload the recommendation file and confirm it "
                          image={Inst5}
                        />

                      </div>
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

export default Ieac

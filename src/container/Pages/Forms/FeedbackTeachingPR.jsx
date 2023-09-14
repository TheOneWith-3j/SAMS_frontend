import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms'
import FeedbackTeachingPeerForm from '../../../data/Forms/FeedbackTeachingPeerForm'
import FeedbackPeerTeaching from '../../../components/utils/data/FeedbackPeerTeaching'
import Swal from 'sweetalert2';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import Footer from '../../../components/Footer';

const FeedbackTeachingPR = () => {

  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)


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

          if (res.data['authorized'] && res.data['role'] === 'PEER') {

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


  const headings = ["Basic Information", "Nominee Ratings", "Review"]
  const limit = headings.length - 1
  const aboutForm = "The peers' feedback form for teaching enables colleagues to provide valuable insights on teaching effectiveness. This form fosters collaboration, encourages professional growth, and promotes a culture of continuous improvement. By collecting feedback from peers, teaching staff gain valuable perspectives to refine their teaching approaches and enhance the learning experience for students.";
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

              <Navbar />

              <FormInfo
                title="Peers Feedback Form for Teaching"
                info={aboutForm}
              />

              <Forms
                pageHeadings={headings}
                pageCount={limit}
                data={FeedbackTeachingPeerForm}
                stages={FeedbackPeerTeaching}
              />

              <div className='mt-[5rem]'>
                <Footer />
              </div>

            </>
            :
            navigate('/auth/login')
      }
      
    </div>
  )
}

export default FeedbackTeachingPR
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInfo from '../../../components/FormInfo'
import Navbar from '../../../components/Navbar'
import Forms from '../../../components/Forms'
import PeerNonTeachingFeedbackForm from '../../../data/Forms/PeerNonTeachingFeedbackForm'
import FeedbackPeerNonTeaching from '../../../components/utils/data/FeebackPeerNonTeaching'
import Swal from 'sweetalert2';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import Footer from '../../../components/Footer';


const FeedbackNonTeachingPR = () => {

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

  const title = "Peers Feedback Form for Non Teaching"
  const headings = ["Basic Information", "Nominee Ratings", "Review"]
  const limit = headings.length - 1;
  const aboutForm = "The peers' feedback form for non-teaching staff promotes collaboration, growth, and continuous improvement. It allows colleagues to provide constructive input on performance, helping non-teaching staff refine their skills and enhance services for the benefit of students and the institution.";

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
                title={title}
                info={aboutForm}
              />

              <Forms
                pageHeadings={headings}
                pageCount={limit}
                data={PeerNonTeachingFeedbackForm}
                stages={FeedbackPeerNonTeaching}
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

export default FeedbackNonTeachingPR
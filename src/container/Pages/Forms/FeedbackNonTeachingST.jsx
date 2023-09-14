import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms';
import StudentNonTeachingFeedback from '../../../components/utils/data/StudentNonTeachingFeedback';
import StudentNonTeachingFeedbackForm from '../../../data/Forms/StudentNonTeachingFeedbackForm';
import Swal from 'sweetalert2';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import Footer from '../../../components/Footer';

const FeedbackNonTeachingST = () => {

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

          if (res.data['authorized'] && res.data['role'] === 'STUDENT') {

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


  const headings = ["Student Details", "Details of the employee to be evaluated", "Your feedback about the employee", "Review"]
  const limit = headings.length - 1;

  const aboutForm = "Student feedback on non-teaching staff is a valuable tool for continuous improvement, as it allows for addressing concerns, recognizing outstanding service, enhancing support services, fostering a positive and supportive learning environment, and ultimately ensuring a high-quality student experience. This feedback empowers non-teaching staff to adapt and grow, meeting the evolving needs of students and providing them with the best possible educational journey.";

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
                title="Student's Feedback: Non-Teaching Staff"
                info={aboutForm}
              />

              <Forms
                pageHeadings={headings}
                pageCount={limit}
                data={StudentNonTeachingFeedbackForm}
                stages={StudentNonTeachingFeedback}
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

export default FeedbackNonTeachingST

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms';
import StudentTeachingFeedback from '../../../components/utils/data/StudentTeachingFeedback';
import StudentTeachingFeedbackForm from '../../../data/Forms/StudentTeachingFeedbackForm';
import Swal from 'sweetalert2';
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import Footer from '../../../components/Footer';

const FeedbackTeachingST = () => {

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


  const headings = ["Student Details", "Details of the teacher to be evaluated", "Your Feedback about the Teacher", "Review"]
  const limit = headings.length - 1;
  const message = "In Feedback Section of Teaching Staff 1 represents lowest marks and 5 is considered as highest"
  const aboutForm = "The feedback form is essential for students to share their thoughts and suggestions, allowing the teaching staff to continuously improve their performance. By providing feedback, students help the teaching staff understand their needs better, fostering a collaborative and supportive learning environment. This form promotes open communication and enables the teaching staff to assess their teaching methods, ensuring high-quality education for students.";
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
                title="Student's Feedback- Teaching Staff"
                info={aboutForm}
              />

              <Forms
                pageHeadings={headings}
                pageCount={limit}
                data={StudentTeachingFeedbackForm}
                stages={StudentTeachingFeedback}
                message={message}
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

export default FeedbackTeachingST

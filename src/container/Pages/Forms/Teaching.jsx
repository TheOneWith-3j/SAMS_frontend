import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms'
import TeachingForm from '../../../data/Forms/TeachingForm'
import TeachingFormStages from '../../../components/utils/data/TeachingFormStages'
import { MoonLoader } from 'react-spinners'
import Swal from 'sweetalert2'
import axios from 'axios'


const Teaching = () => {


  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    /**
     * Authentication
     */
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

          if (res.data['authorized'] && res.data['role'] === 'HOI') {

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

  /**
   * data
   */
  const title = "Awards Application Form- Teaching"
  const award_info = `The Foundation Day celebration of our organization is when we celebrate, encourage and
  honour our trusted faculty members, proactive staff members and enthusiastic students
  who together strive to make Somaiya Vidyavihar an ideal knowledge eco-system.
  The Human Resources team have been organizing annually the Awards under four
  categories (Faculty, Staff, Students, Research & Institution)
  This form is specific to the award category- Faculty members`

  const message = `Please score the candidate on a scale of 1 – 5 on the below points, with 1 being the
  lowest score and 5 being the highest- Please attach the relevant documents to support your
  nomination.`

  const headings = ["Basic Information", "Pedagogical Competence", "Beyond The Classroom", "Professional Development", "Supportings"]
  const limit = headings.length - 1
  return (
    <div>

      {
        loading
          ?
          <MoonLoader
            loading={loading}
            size={50}
            color="rgb(185,28,28"
          />
          :
          authorized
            ?
            <>
              <Navbar />
              <FormInfo
                title={title}
                info={award_info}
              />
              <Forms
                pageHeadings={headings}
                pageCount={limit}
                data={TeachingForm}
                stages={TeachingFormStages}
                message={message}
              />
            </>
            :
            navigate('/')
      }
    </div>
  )
}

export default Teaching

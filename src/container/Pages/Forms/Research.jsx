import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms'
import ResearchForm from '../../../data/Forms/ResearchForm'
import ResearchFormStages from '../../../components/utils/data/ResearchFormStages'
import Swal from 'sweetalert2'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'

const Research = () => {


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
   * Data
   */
  const title = "Dr. S.K. Somaiya Award (Excellence In Research)"
  const awardInfo = `Dr. S. K. Somaiya Award (Excellence in Research) is a one-time research excellence award intending to recognize and honor faculty for 'her/he/their outstanding research achievements in terms of original and review publications, granted research projects, consultancy services, and intellectual assets thus contributing to our vibrant research ecosystem. Nominations for the 2022 awards are open through Thursday, Aug. 11, 2022. The winners will be awarded in the Research Excellence Award category during the Foundation Day celebration.`

  const limit = 6
  const headings = [
    "Faculty Affiliation Details",
    "Research Publications",
    "Research Meetings",
    "Research Projects",
    "Intellectual Property",
    "Research Awards",
    "UnderTaking and Evidence",
  ]

  const message = `Specify the number here and details to be provided in the document.
  Kindly adhere to the instruction provided in the 'Specific Note' under the Research
  Meetings head in the document template`

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
                info={awardInfo}
              />
              <Forms
                pageCount={limit}
                pageHeadings={headings}
                data={ResearchForm}
                stages={ResearchFormStages}
                message={message}
              />
            </>
            :
            navigate('/')
      }

    </div>
  )
}

export default Research

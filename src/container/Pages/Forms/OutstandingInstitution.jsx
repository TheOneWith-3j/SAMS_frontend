import React,{useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms'
import OutstandingInstForm from '../../../data/Forms/OutstandingInstForm'
import OutsInstStages from '../../../components/utils/data/OutsInstStages'
import { MoonLoader } from 'react-spinners'
import Swal from 'sweetalert2'
import axios from 'axios'

const OutstandingInstitution = () => {

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

  const message = " You may please attach relevant supporting documents in the attachment section at the end of the form. Kindly mention N.A. to the fields not applicable or not relevant."
  const limit = 12;
  const pageHeaders = [
    "Basic Information",
    "Overall performance improvement",
    "Infrastructure and Facilities",
    "Student Achievements",
    "Faculty Achievements",
    "Institution Culture",
    "Collaborations and tie-ups with other educational institutes both national and International",
    "Participation in Social and Community projects",
    "Alumni involvement in institution activities",
    "Placement Achievement for students",
    "Contribution to intra campus synergy (learning & sharing from other HOIs ,SVV, AV, Nareshwadi, Sakarwadi, Sameerwadi)",
    "Support provided to Trust Administration",
    "Supportings"
  ]

  const info = "The objective of this award is to recognize an Institution within Somaiya Vidyavihar, which aligns itself best with the Trusts’ vision of being and working towards becoming a world class teaching and research institution. An institute that is global in the reach of its ideas and universal in its service, and is holistic in its approach and experiential in nature, will be lauded."

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
                info={info}
                title="Outstanding Institution"
              />
              <Forms
                pageHeadings={pageHeaders}
                pageCount={limit}
                data={OutstandingInstForm}
                stages={OutsInstStages}
                message={message}
              />
            </>
            :
            navigate('/')
      }


    </div>
  )
}

export default OutstandingInstitution

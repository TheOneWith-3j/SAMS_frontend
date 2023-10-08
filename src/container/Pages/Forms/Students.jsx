import React,{useEffect, useState} from 'react'
import Navbar from '../../../components/Navbar'
import Forms from '../../../components/Forms'
import StudentsFormData from '../../../data/Forms/StudentsFormData';
import StudentsFormStages from '../../../components/utils/data/StudentsFormStages';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import FormInfo from '../../../components/FormInfo'

const Students = () => {

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
     * Form Info
     */
    const awardInfo = "Student awards recognize and honor exceptional efforts, fostering confidence and motivation. They inspire goal-setting and excellence. Awards validate hard work, encouraging healthy competition and ambition. They reinforce positive behaviors, positively impacting personal and academic growth.";

    /**
     * Forms Body
     */

    const pageHeaders=[
        "Basic Information",
        "Reasons",
        "Supporting Documents",
    ];

    const limit =2;
    const message = "Please upload supporting documents at the end of the form . Upload only single PDF file "


    
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
                title="Students Awards"
                info={awardInfo}
              />
              <Forms
                pageHeadings={pageHeaders}
                pageCount={limit}
                data={StudentsFormData}
                stages={StudentsFormStages}
                message={message}
              />
            </>
            :
            navigate('/')
      }


        </div>
    )
}

export default Students

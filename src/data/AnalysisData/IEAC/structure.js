// column structures for HOI analysis part 

/**
 * As IEAC Member can see 5 forms data define 5 columns structue that will be exported for analysis part 
 * We use material UI's GridColDef to define
 * 
 * column01 - outstanding Institution
 * column02 - Research
 * column03 - Sports
 * column04 - Teaching
 * column05 - NonTeaching 
 * 
 * 
 * Also an extra upload button to uplad file with analysis
 */

import { GridColDef } from "@mui/x-data-grid";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Swal from 'sweetalert2';
import axios from "axios";

/**
 * Handlers
 */


const handleChange = () => {

}

/**
 * @deprecated : Permanently moved to Research Admin
 */
const handleResearchChange = (params, event) => {
    if (event.target.checked == true) {

        const approvedNomineeName = params.row['faculty_name'];

        const data = {
            applicationID: params.row['id'],
        };

        const path = window.location.href.split('/review/')[1];

        Swal.fire({
            title: 'Confirmation',
            icon: 'question',
            text: `Do you to confirm your decision to approve ${approvedNomineeName} ?`,
            showDenyButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: 'Deny',
            confirmButtonColor: '#4bb543',

        })
            .then((res) => {
                if (res.isConfirmed == true) {
                    //axios put
                    axios.put(`http://localhost:5001/ieac/data/${path}`, data, {
                        headers: {
                            'user_id': localStorage.getItem('user_id'),
                            'x-access-token': localStorage.getItem('token'),
                        }
                    })
                        .then((res) => {
                            console.log(res);
                            window.location.reload();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                else {
                    event.target.checked = false;
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

/**Sports Handler */
/**@deprecated : IAEC Approval Removed */

const handleSportsChange = (params,event)=>{

    if (event.target.checked == true) {

        const data = {
            applicationID: params.row['id'],
        };

        const path = window.location.href.split('/review/')[1];

        Swal.fire({
            title: 'Confirmation',
            icon: 'question',
            text: `Do you to confirm your decision to approve ?`,
            showDenyButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: 'Deny',
            confirmButtonColor: '#4bb543',

        })
            .then((res) => {
                if (res.isConfirmed == true) {
                    //axios put
                    axios.put(`http://localhost:5001/ieac/data/${path}`, data, {
                        headers: {
                            'user_id': localStorage.getItem('user_id'),
                            'x-access-token': localStorage.getItem('token'),
                        }
                    })
                        .then((res) => {
                            console.log(res);
                            window.location.reload();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                else {
                    event.target.checked = false;
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

}

/**Teaching Handles */

const handleTeachRecommend = (params, event) => {

    if (event.target.checked == true) {
        Swal.fire({
            title: "Score for Recommeded",
            confirmButtonText: 'Confirm',
            confirmButtonColor: 'rgb(185,28,28)',
            html:
                `
            <div>
                <div class='my-3 text-center text-xl text-red-700 font-Poppins font-semibold'>
                    <h2>
                        ${params.row['faculty_name']}'s Score
                    </h2>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p> A. Padagogical Competence Score </p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-A'></input>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p>B.Beyond the classroom </p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-B'></input>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p> C. Self and professional development </p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-C'></input>
                </div>
            </div>
            `,
            preConfirm:() => {
                const scoreA = Swal.getPopup().querySelector('#score-A').value
                const scoreB = Swal.getPopup().querySelector('#score-B').value
                const scoreC = Swal.getPopup().querySelector('#score-C').value
                if (!scoreA || !scoreB || !scoreC) {
                  Swal.showValidationMessage(`Please enter all fields !`)
                }
                return { scoreA:scoreA, scoreB:scoreB , scoreC: scoreC }
            },
        })
        .then((res)=>{
            if(res.isConfirmed == true){

                // creata a payload to pass
                const data = {
                    scoreA: res.value.scoreA,
                    scoreB: res.value.scoreB,
                    scoreC: res.value.scoreC,
                    recommended:true,
                    applicationID: params.row['id'],
                }

                // make a put request axios
                const path = window.location.href.split('/review/')[1]; 
                axios.put(`http://localhost:5001/ieac/data/${path}`,data,{
                    headers:{
                        'x-access-token':localStorage.getItem('token'),
                        'user_id': localStorage.getItem('user_id')
                    }
                })
                .then((res)=>{
                    
                    Swal.fire({
                        title:'Update Successful',
                        icon:'success',
                        confirmButtonColor:'rgb(185,28,28)',
                        confirmButtonText:'Okay'
                    })
                    .then((res)=>{
                        window.location.reload()
                    })
                })
                .catch((err)=>{
                    console.log(err);
                })

            }
            else{
                event.target.checked=false;
            }
        })
    }
}

const handleTeachNotRecommend = (params, event) => {
    if (event.target.checked == true) {
        Swal.fire({
            title: 'Score for Not Recommended',
            confirmButtonText: 'Confirm',
            confirmButtonColor: 'rgb(185,28,28)',
            html:
                `
            <div>
                <div class='my-3 text-center text-xl text-red-700 font-Poppins font-semibold'>
                    <h2>
                        ${params.row['faculty_name']}'s Score
                    </h2>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p> A. Padagogical Competence Score </p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-A'></input>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p>B.Beyond the classroom </p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-B'></input>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p> C. Self and professional development </p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-C'></input>
                </div>
            </div>
            `,
            preConfirm:() => {
                const scoreA = Swal.getPopup().querySelector('#score-A').value
                const scoreB = Swal.getPopup().querySelector('#score-B').value
                const scoreC = Swal.getPopup().querySelector('#score-C').value
                if (!scoreA || !scoreB || !scoreC) {
                  Swal.showValidationMessage(`Please enter all fields !`)
                }
                return { scoreA:scoreA, scoreB:scoreB , scoreC: scoreC }
            },
        })
        .then((res)=>{
            
            if(res.isConfirmed == true){
                
                 // creata a payload to pass
                 const data = {
                    scoreA: res.value.scoreA,
                    scoreB: res.value.scoreB,
                    scoreC: res.value.scoreC,
                    recommended:false,
                    applicationID: params.row['id'],
                }

                // make a put request axios
                const path = window.location.href.split('/review/')[1]; 
                axios.put(`http://localhost:5001/ieac/data/${path}`,data,{
                    headers:{
                        'x-access-token':localStorage.getItem('token'),
                        'user_id': localStorage.getItem('user_id')
                    }
                })
                .then((res)=>{
                    
                    Swal.fire({
                        title:'Update Successful',
                        icon:'success',
                        confirmButtonColor:'rgb(185,28,28)',
                        confirmButtonText:'Okay'
                    })
                    .then((res)=>{
                        window.location.reload()
                    })
                })
                .catch((err)=>{
                    console.log(err);
                })

            }
            else{
                event.target.checked = false;
            }
        })
    }
}

/**Non teaching Handles */
const handleNonTeachRecommend = (params,event)=>{

    if (event.target.checked == true) {
        Swal.fire({
            title: "Score for Recommeded",
            confirmButtonText: 'Confirm',
            confirmButtonColor: 'rgb(185,28,28)',
            html:
                `
            <div>
                <div class='my-3 text-center text-xl text-red-700 font-Poppins font-semibold'>
                    <h2>
                        ${params.row['staff_name']}'s Score
                    </h2>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p> Part A Score</p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-A'></input>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p>Part B Score </p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-B'></input>
                </div>
            </div>
            `,
            preConfirm:() => {
                const scoreA = Swal.getPopup().querySelector('#score-A').value
                const scoreB = Swal.getPopup().querySelector('#score-B').value
                if (!scoreA || !scoreB) {
                  Swal.showValidationMessage(`Please enter all fields !`)
                }
                return { scoreA:scoreA, scoreB:scoreB }
            },
        })
        .then((res)=>{
            if(res.isConfirmed == true){

                // creata a payload to pass
                const data = {
                    scoreA: res.value.scoreA,
                    scoreB: res.value.scoreB,
                    recommended:true,
                    applicationID: params.row['id'],
                }

                
                // make a put request axios
                const path = window.location.href.split('/review/')[1]; 
                axios.put(`http://localhost:5001/ieac/data/${path}`,data,{
                    headers:{
                        'x-access-token':localStorage.getItem('token'),
                        'user_id': localStorage.getItem('user_id')
                    }
                })
                .then((res)=>{
                    
                    Swal.fire({
                        title:'Update Successful',
                        icon:'success',
                        confirmButtonColor:'rgb(185,28,28)',
                        confirmButtonText:'Okay'
                    })
                    .then((res)=>{
                        window.location.reload()
                    })
                })
                .catch((err)=>{
                    console.log(err);
                })

            }
            else{
                event.target.checked=false;
            }
        })
    }
}


const handleNonTeachNotRecommend = (params,event)=>{

    if (event.target.checked == true) {
        Swal.fire({
            title: 'Score for Not Recommended',
            confirmButtonText: 'Confirm',
            confirmButtonColor: 'rgb(185,28,28)',
            html:
                `
            <div>
                <div class='my-3 text-center text-xl text-red-700 font-Poppins font-semibold'>
                    <h2>
                        ${params.row['staff_name']}'s Score
                    </h2>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p>Part A Score </p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-A'></input>
                </div>
                <div class='text-sm text-left font-Poppins text-red-700 my-2'>
                    <p>Part B Score</p>
                </div>
                <div class="flex justify-start my-1">
                    <input type='number' class='border-2 font-Poppins border-black shadow-lg rounded-xl p-2' id='score-B'></input>
                </div>
            </div>
            `,
            preConfirm:() => {
                const scoreA = Swal.getPopup().querySelector('#score-A').value
                const scoreB = Swal.getPopup().querySelector('#score-B').value
                if (!scoreA || !scoreB) {
                  Swal.showValidationMessage(`Please enter all fields !`)
                }
                return { scoreA:scoreA, scoreB:scoreB }
            },
        })
        .then((res)=>{
            
            if(res.isConfirmed == true){
                
                 // creata a payload to pass
                 const data = {
                    scoreA: res.value.scoreA,
                    scoreB: res.value.scoreB,
                    recommended:false,
                    applicationID: params.row['id'],
                }
                

                // make a put request axios
                const path = window.location.href.split('/review/')[1]; 
                axios.put(`http://localhost:5001/ieac/data/${path}`,data,{
                    headers:{
                        'x-access-token':localStorage.getItem('token'),
                        'user_id': localStorage.getItem('user_id')
                    }
                })
                .then((res)=>{
                    
                    Swal.fire({
                        title:'Update Successful',
                        icon:'success',
                        confirmButtonColor:'rgb(185,28,28)',
                        confirmButtonText:'Okay'
                    })
                    .then((res)=>{
                        window.location.reload()
                    })
                })
                .catch((err)=>{
                    console.log(err);
                })

            }
            else{
                event.target.checked = false;
            }
        })
    }

}

const columns01: GridColDef[] = [
    { field: 'id', headerName: 'Application ID', width: 150 },
    { field: 'email_id', headerName: 'Email ID', width: 150 },
    { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
    { field: 'institution_name', headerName: 'Institution Name', width: 200 },
    { field: 'established_In', headerName: 'Established In', width: 150 },
    { field: 'head_of_institution', headerName: 'Head of Institution', width: 200 },
    { field: 'hoi_designation', headerName: 'HOI Designation', width: 200 },
    { field: 'hoi_joining_date', headerName: 'HOI Joining Date', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_number', headerName: 'Contact Number', width: 150 },
    { field: 'q_01', headerName: 'Question 01', width: 200 },
    { field: 'q_02', headerName: 'Question 02', width: 200 },
    { field: 'q_03', headerName: 'Question 03', width: 200 },
    { field: 'q_04', headerName: 'Question 04', width: 200 },
    { field: 'q_05', headerName: 'Question 05', width: 200 },
    { field: 'q_06', headerName: 'Question 06', width: 200 },
    { field: 'q_07', headerName: 'Question 07', width: 200 },
    { field: 'q_08', headerName: 'Question 08', width: 200 },
    { field: 'q_09', headerName: 'Question 09', width: 200 },
    { field: 'q_10', headerName: 'Question 10', width: 200 },
    { field: 'q_11', headerName: 'Question 11', width: 200 },
    { field: 'q_12', headerName: 'Question 12', width: 200 },
    { field: 'q_13', headerName: 'Question 13', width: 200 },
    { field: 'q_14', headerName: 'Question 14', width: 200 },
    { field: 'q_15', headerName: 'Question 15', width: 200 },
    { field: 'q_16', headerName: 'Question 16', width: 200 },
    { field: 'q_17', headerName: 'Question 17', width: 200 },
    { field: 'institution_ratings', headerName: 'Institution Ratings', width: 200 },
    { field: 'q_18', headerName: 'Question 18', width: 200 },
    { field: 'q_19', headerName: 'Question 19', width: 200 },
    { field: 'q_20', headerName: 'Question 20', width: 200 },
    { field: 'q_21', headerName: 'Question 21', width: 200 },
    { field: 'q_22', headerName: 'Question 22', width: 200 },
    { field: 'q_23', headerName: 'Question 23', width: 200 },
    { field: 'q_24', headerName: 'Question 24', width: 200 },
    { field: 'q_25', headerName: 'Question 25', width: 200 },
    { field: 'q_26', headerName: 'Question 26', width: 200 },
    { field: 'q_27', headerName: 'Question 27', width: 200 },
    { field: 'q_28', headerName: 'Question 28', width: 200 },
    { field: 'q_29', headerName: 'Question 29', width: 200 },
    { field: 'q_30', headerName: 'Question 30', width: 200 },
    { field: 'q_31', headerName: 'Question 31', width: 200 },
    { field: 'q_32', headerName: 'Question 32', width: 200 },
    { field: 'q_33', headerName: 'Question 33', width: 200 },
    { field: 'q_34', headerName: 'Question 34', width: 200 },
    { field: 'q_35', headerName: 'Question 35', width: 200 },
    { field: 'q_36', headerName: 'Question 36', width: 200 },
    { field: 'q_37', headerName: 'Question 37', width: 200 },
    { field: 'q_38', headerName: 'Question 38', width: 200 },
    {
        field: 'supportings', headerName: 'Supportings', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'ieac_approved', headerName: 'IEAC Approved', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    {
        field: 'hr_approved', headerName: 'HR Approved', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
];

/**
 * @deprecated : permanently moved to research Admin
 */
const columns02: GridColDef[] = [
    { field: 'id', headerName: 'Application ID', width: 150 },
    { field: 'faculty_name', headerName: 'Faculty Name', width: 150 },
    { field: 'designation', headerName: 'Designation', width: 150 },
    { field: 'institution', headerName: 'Institution', width: 150 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'tenure', headerName: 'Tenure', width: 150 },
    { field: 'org_articles_count', headerName: 'Org Articles Count', width: 150 },
    { field: 'review_papers_count', headerName: 'Review Papers Count', width: 150 },
    { field: 'letters_count', headerName: 'Letters Count', width: 150 },
    { field: 'case_studies_count', headerName: 'Case Studies Count', width: 150 },
    { field: 'books_count', headerName: 'Books Count', width: 150 },
    { field: 'chapters_count', headerName: 'Chapters Count', width: 150 },
    { field: 'presentations_international_count', headerName: 'Presentations International Count', width: 200 },
    { field: 'presentation_national_count', headerName: 'Presentation National Count', width: 200 },
    { field: 'international_seminar_count', headerName: 'International Seminar Count', width: 200 },
    { field: 'national_seminar_count', headerName: 'National Seminar Count', width: 200 },
    { field: 'international_workshops_count', headerName: 'International Workshops Count', width: 200 },
    { field: 'national_workshops_count', headerName: 'National Workshops Count', width: 200 },
    { field: 'completed_minorp_count', headerName: 'Completed Minorp Count', width: 200 },
    { field: 'ongoing_minorp_count', headerName: 'Ongoing Minorp Count', width: 200 },
    { field: 'completed_majorp_count', headerName: 'Completed Majorp Count', width: 200 },
    { field: 'ongoing_majorp_count', headerName: 'Ongoing Majorp Count', width: 200 },
    { field: 'completed_consultancy_count', headerName: 'Completed Consultancy Count', width: 200 },
    { field: 'ongoing_consultancy_count', headerName: 'Ongoing Consultancy Count', width: 200 },
    { field: 'revenue_from_projects', headerName: 'Revenue from Projects', width: 200 },
    { field: 'granted_patents_count', headerName: 'Granted Patents Count', width: 200 },
    { field: 'filed_patents_count', headerName: 'Filed Patents Count', width: 200 },
    { field: 'granted_copyrights_count', headerName: 'Granted Copyrights Count', width: 200 },
    { field: 'filed_copyrights_count', headerName: 'Filed Copyrights Count', width: 200 },
    { field: 'granted_industrial_designs_count', headerName: 'Granted Industrial Designs Count', width: 250 },
    { field: 'filed_industrial_designs_count', headerName: 'Filed Industrial Designs Count', width: 250 },
    { field: 'international_awards_won_count', headerName: 'International Awards Won Count', width: 250 },
    { field: 'national_awards_won_count', headerName: 'National Awards Won Count', width: 250 },
    {
        field: 'evidence_of_research', headerName: 'Evidence of Research', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value!=null ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'evidence_of_data_provided', headerName: 'Evidence of Data Provided', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value!= null ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    { field: 'confirmation_of_trueData', headerName: 'Confirmation of True Data', width: 200, },
    {
        field: 'ieacApproved', headerName: 'IEAC Approved', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    {
        field: 'recommended', headerName: 'Recommended', width: 150, align: 'center', renderCell: (params) => {
            return params.row['ieacApproved']
                ?
                 params.row['ieacApprovedFile']== null
                 ?
                 'Upload Pending'
                 :
                 <a
                    className="p-2 bg-red-700 rounded-xl shadow-red-100 text-white"
                    href={`http://localhost:5001/${params.row['ieacApprovedFile'].split('data')[1]}`}>
                    Download
                </a>
                :
                <input
                    type="checkbox"
                    onChange={(event) => handleResearchChange(params, event)}
                >

                </input>
        }
    },
    {
        field: 'hr_approved', headerName: 'HR Approved', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
];

/**@deprecated : Permanently Moved to SPORTS ADMIN */
const columns03: GridColDef[] = [
    { field: 'id', headerName: 'Application ID', width: 150 },
    { field: 'email_id', headerName: 'Email ID', width: 150 },
    { field: 'institute_name', headerName: 'Institute Name', width: 150 },
    { field: 'nominee_inspiring_teacher', headerName: 'Nominee Inspiring Teacher', width: 200 },
    {
        field: 'nominee_teacher_photo', headerName: 'Nominee Teacher Photo', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'nominee_teacher_hoi_assessment', headerName: 'Nominee Teacher HOI Assessment', width: 250, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    { field: 'nominee_sportsStar_girl', headerName: 'Nominee Sports Star (Girl)', width: 200 },
    { field: 'nominee_ss_girl_sport', headerName: 'Nominee SS Girl Sport', width: 200 },
    {
        field: 'nominee_ss_girl_photo', headerName: 'Nominee SS Girl Photo', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'nominee_ss_girl_hoi_assessment', headerName: 'Nominee SS Girl HOI Assessment', width: 250, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    { field: 'nominee_sportsStar_boy', headerName: 'Nominee Sports Star (Boy)', width: 200 },
    { field: 'nominee_ss_boy_sport', headerName: 'Nominee SS Boy Sport', width: 200 },
    {
        field: 'nominee_ss_boy_photo', headerName: 'Nominee SS Boy Photo', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'nominee_ss_boy_hoi_assessment', headerName: 'Nominee SS Boy HOI Assessment', width: 250, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'recommended', headerName: 'Recommended', width: 150, align: 'center', renderCell: (params) => {
            return params.row['ieacApproved']
                ?
                 params.row['ieacApprovedFile']== null
                 ?
                 'Upload Pending'
                 :
                 <a
                    className="p-2 bg-red-700 rounded-xl shadow-red-100 text-white"
                    href={`http://localhost:5001/${params.row['ieacApprovedFile'].split('data')[1]}`}>
                    Download
                </a>
                :
                <input
                    type="checkbox"
                    onChange={(event) => handleSportsChange(params, event)}
                >

                </input>
        }
    },
    {
        field: 'ieacApproved', headerName: 'IEAC Approved', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    {
        field: 'hr_approved', headerName: 'HR Approved', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
];

const columns04: GridColDef[] = [
    { field: 'id', headerName: 'Application ID', width: 150 },
    { field: 'email_id', headerName: 'Email ID', width: 150 },
    { field: 'faculty_name', headerName: 'Faculty Name', width: 150 },
    { field: 'awards_category', headerName: 'Awards Category', width: 150 },
    { field: 'institute_name', headerName: 'Institute Name', width: 150 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'designation', headerName: 'Designation', width: 150 },
    { field: 'date_of_appointment', headerName: 'Date of Appointment', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 150 },
    { field: 'contact_number', headerName: 'Contact Number', width: 150 },
    { field: 'q_01', headerName: 'Q01', width: 100 },
    { field: 'q_02', headerName: 'Q02', width: 100 },
    { field: 'q_03', headerName: 'Q03', width: 100 },
    { field: 'q_04', headerName: 'Q04', width: 100 },
    { field: 'q_05', headerName: 'Q05', width: 100 },
    { field: 'q_06', headerName: 'Q06', width: 100 },
    { field: 'q_07', headerName: 'Q07', width: 100 },
    { field: 'q_08', headerName: 'Q08', width: 100 },
    { field: 'q_09', headerName: 'Q09', width: 100 },
    { field: 'q_10', headerName: 'Q10', width: 100 },
    { field: 'q_11', headerName: 'Q11', width: 100 },
    { field: 'q_12', headerName: 'Q12', width: 100 },
    { field: 'q_13', headerName: 'Q13', width: 100 },
    { field: 'q_14', headerName: 'Q14', width: 100 },
    { field: 'q_15', headerName: 'Q15', width: 100 },
    { field: 'q_16', headerName: 'Q16', width: 100 },
    { field: 'q_17', headerName: 'Q17', width: 100 },
    { field: 'q_18', headerName: 'Q18', width: 100 },
    { field: 'q_19', headerName: 'Q19', width: 100 },
    { field: 'q_20', headerName: 'Q20', width: 100 },
    {
        field: 'data_evidence', headerName: 'Data Evidence', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'profile_photograph', headerName: 'Profile Photograph', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'recommended', headerName: 'Recommended', width: 150, align: 'center', renderCell: (params) => {
            return params.row['ieac_scoreA']==null
            ?
            <input type="checkbox" name="recommend" onChange={(event) => handleTeachRecommend(params, event)}></input>
            :
            'Completed'
        }
    },
    {
        field: 'not-recommended', headerName: 'Not Recommended', width: 150, align: 'center', renderCell: (params) => {
            return params.row['ieac_scoreA']== null ?
             <input type="checkbox" name="not-recommend" onChange={(event) => handleTeachNotRecommend(params, event)}></input>
            :
            'Completed'
        }
    },
    {
        field: 'ieacApprovedFile', headerName: 'Approved Reason File', width: 200, renderCell: (params) => {
            if (!params.row['ieacApprovedFile']) {
                return "Upload Pending ..."
            }
            else {
                return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
            }
        }
    },
    {
        field: 'ieacApproved', headerName: 'IEAC Approved', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    {
        field: 'hr_approved', headerName: 'HR Approved', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
];

const columns05: GridColDef[] = [
    { field: 'id', headerName: 'Application ID', width: 150 },
    { field: 'email_id', headerName: 'Email ID', width: 150 },
    { field: 'staff_name', headerName: 'Staff Name', width: 150 },
    { field: 'award_category', headerName: 'Award Category', width: 150 },
    { field: 'institute_name', headerName: 'Institute Name', width: 150 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'designation', headerName: 'Designation', width: 150 },
    { field: 'appointment_date', headerName: 'Appointment Date', width: 200 },
    { field: 'somaiya_email_id', headerName: 'Somaiya Email ID', width: 150 },
    { field: 'phone_number', headerName: 'Phone Number', width: 150 },
    { field: 'q_01', headerName: 'Q01', width: 100 },
    { field: 'q_02', headerName: 'Q02', width: 100 },
    { field: 'q_03', headerName: 'Q03', width: 100 },
    { field: 'q_04', headerName: 'Q04', width: 100 },
    { field: 'q_05', headerName: 'Q05', width: 100 },
    { field: 'q_06', headerName: 'Q06', width: 100 },
    { field: 'q_07', headerName: 'Q07', width: 100 },
    { field: 'q_08', headerName: 'Q08', width: 100 },
    { field: 'q_09', headerName: 'Q09', width: 100 },
    { field: 'q_10', headerName: 'Q10', width: 100 },
    { field: 'q_11', headerName: 'Q11', width: 100 },
    { field: 'q_12', headerName: 'Q12', width: 100 },
    { field: 'q_13', headerName: 'Q13', width: 100 },
    { field: 'q_14', headerName: 'Q14', width: 100 },
    { field: 'q_15', headerName: 'Q15', width: 100 },
    { field: 'q_16', headerName: 'Q16', width: 100 },
    { field: 'q_17', headerName: 'Q17', width: 100 },
    { field: 'q_18', headerName: 'Q18', width: 100 },
    { field: 'q_19', headerName: 'Q19', width: 100 },
    { field: 'q_20', headerName: 'Q20', width: 100 },
    { field: 'q_21', headerName: 'Q21', width: 100 },
    { field: 'q_22', headerName: 'Q22', width: 100 },
    { field: 'q_23', headerName: 'Q23', width: 100 },
    { field: 'q_24', headerName: 'Q24', width: 100 },
    {
        field: 'proof_docs', headerName: 'Proof Documents', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'nominee_photograph', headerName: 'Nominee Photograph', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'recommended', headerName: 'Recommended', width: 150, align: 'center', renderCell: (params) => {
            return params.row['ieac_scoreA']==null
            ?
            <input type="checkbox" name="recommend" onChange={(event) => handleNonTeachRecommend(params, event)}></input>
            :
            'Completed'
        }
    },
    {
        field: 'not-recommended', headerName: 'Not Recommended', width: 150, align: 'center', renderCell: (params) => {
            return params.row['ieac_scoreA']== null ?
             <input type="checkbox" name="not-recommend" onChange={(event) => handleNonTeachNotRecommend(params, event)}></input>
            :
            'Completed'
        }
    },
    {
        field: 'ieacApprovedFile', headerName: 'Approved Reason File', width: 200, renderCell: (params) => {
            if (!params.row['ieacApprovedFile']) {
                return 'Upload Pending ...'
            }
            else {
                return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
            }
        }
    },
    {
        field: 'ieacApproved', headerName: 'IEAC Approved', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    {
        field: 'hr_approved', headerName: 'HR Approved', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
];


export {
    columns01,
    columns02,
    // columns03,
    columns04,
    columns05
};
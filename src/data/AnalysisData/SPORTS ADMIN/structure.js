import { GridColDef } from "@mui/x-data-grid";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Swal from 'sweetalert2';
import axios from "axios";

/**
 * NOTE 
 * 
 * columns01 -> Sports Star Girl
 * columns02 -> Sports Star Boy
 * columns03 -> Inspiring Coach
 */

/**
 * Methods
 */

const handleBoyChange = (params, event) => {
    if (event.target.checked === true) {

        const approvedNomineeName = params.row['nominee_ss_boy'];

        const data = {
            type:'sports star boy',
            applicationID: params.row['id'],
        };


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
                if (res.isConfirmed === true) {
                    //axios put
                    axios.put(`http://localhost:5001/sports-admin/data/update`, data, {
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

const handleGirlChange = (params, event) => {
    if (event.target.checked === true) {

        const approvedNomineeName = params.row['nominee_ss_girl'];

        const data = {
            type:'sports star girl',
            applicationID: params.row['id'],
        };


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
                if (res.isConfirmed === true) {
                    //axios put
                    axios.put(`http://localhost:5001/sports-admin/data/update`, data, {
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


const handleCoachChange = (params, event) => {

    if (event.target.checked === true) {

        const approvedNomineeName = params.row['nominee_inspiring_coach'];

        const data = {
            type:'inspiring coach',
            applicationID: params.row['id'],
        };


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
                if (res.isConfirmed === true) {
                    //axios put
                    axios.put(`http://localhost:5001/sports-admin/data/update`, data, {
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

/**
 * Structures
 */

const columns01: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,
    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_ss_girl',
        headerName: 'Nominee Name',
        width: 200,

    },
    {
        field: 'nominee_ss_girl_sport',
        headerName: 'Nominee`s Sport',
        width: 200,

    },
    {
        field: 'q_21',
        headerName: 'Outstanding Performance',
        width: 100,

    },
    {
        field: 'q_22',
        headerName: 'Encouragement of Effort',
        width: 100,

    },
    {
        field: 'q_23',
        headerName: 'Contribution to development of Sports culture in Somaiya campus',

        width: 100,

    },
    {
        field: 'q_24',
        headerName: 'Intensity of Competition',
        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score (out of 5) ',
        width: 100,

    },
    {
        field: 'isApprovedSportsGirl', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                <input
                    type="checkbox"
                    onChange={(event) => handleGirlChange(params, event)}
                >

                </input>
        },
    },
    {
        field: 'nominee_ss_girl_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_ss_girl_supportings',
        headerName: 'Nominee Supportings',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },

]

const columns02: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,

    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_ss_boy',
        headerName: 'Nominee Name',
        width: 200,

    },
    {
        field: 'nominee_ss_boy_sport',
        headerName: 'Nominee`s Sport',
        width: 200,

    },
    {
        field: 'q_25',
        headerName: 'Outstanding Performance',
        width: 100,

    },
    {
        field: 'q_26',
        headerName: 'Encouragement of Effort',
        width: 100,

    },
    {
        field: 'q_27',
        headerName: 'Contribution to development of Sports culture in Somaiya campus',
        width: 100,

    },
    {
        field: 'q_28',
        headerName: 'Intensity of Competition',
        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score (out of 5) ',
        width: 100,

    },
    {
        field: 'isApprovedSportsBoy', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                <input
                    type="checkbox"
                    onChange={(event) => handleBoyChange(params, event)}
                >
                </input>
        },
    },
    {
        field: 'nominee_ss_boy_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_ss_boy_supportings',
        headerName: 'Nominee Supportings',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
]

const columns03: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,

    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_inspiring_coach',
        headerName: 'Nominee Name',
        width: 250,

    },
    {
        field: 'nominee_coach_comments',
        headerName: 'HOI Comments',
        width: 300,

    },
    {
        field: 'q_01',
        headerName: 'Skill to demonstrate competency in motor skills and movement patterns needed to perform a variety of physical activities.',
        width: 100,

    },
    {
        field: 'q_02',
        headerName: 'Skill in analysis of the training and competition preparation required by athletes (the team) to perform at the top level (International/National/State)',
        width: 100,

    },
    {
        field: 'q_03',
        headerName: 'Skill in analysis of the strategies, tactics and psychological preparation required by athletes (the team) to perform at the top level',
        width: 100,

    },
    {
        field: 'q_04',
        headerName: 'Skill to exhibit responsible personal and social behavior that respects self and others in physical activity settings.',
        width: 100,

    },
    {
        field: 'q_05',
        headerName: 'Skill to value physical activity for health, enjoyment, challenge, self-expression, and/or social interaction.',
        width: 100,

    },
    {
        field: 'q_06',
        headerName: 'Ability to explain the factors that contribute to high performance to Athletes and others.',
        width: 100,

    },
    {
        field: 'q_07',
        headerName: 'Delivery of training sessions aligned to short- and long-term performance goals and appropriate to the athletes involved.',
        width: 100,

    },
    {
        field: 'q_08',
        headerName: 'Organization of training sessions that are time-effective and maximize value of available equipment and facilities.',
        width: 100,

    },
    {
        field: 'q_09',
        headerName: 'Analysis of athlete`s or team`s performance and determination of necessary changes in training and preparation',
        width: 100,

    },
    {
        field: 'q_10',
        headerName: 'Setting of appropriate level goals for athletes (the team) for the year and long-term ',
        width: 100,

    },
    {
        field: 'q_11',
        headerName: 'Demonstrated ability to set progression of goals to achieve long-range (International medal) goals',
        width: 100,

    },
    {
        field: 'q_12',
        headerName: 'Ability to have athletes (the team) peak at appropriate times of the season / academic year',
        width: 100,

    },
    {
        field: 'q_13',
        headerName: 'Effective monitoring of student-athletes for over-training, injuries, or illness (on own or through use of experts) and appropriate response',
        width: 100,

    },
    {
        field: 'q_14',
        headerName: 'Effective feedback to athletes (the team) related to training and performance results',
        width: 100,

    },
    {
        field: 'q_15',
        headerName: 'Ensuring that elements surrounding competition (for example, nutrition, and transport to and from sites, accommodation, training venues, and so on) support the athletes’ (team’s) ability to perform well',
        width: 100,

    },
    {
        field: 'q_16',
        headerName: 'Work within assigned budget and effectively manage program resources',
        width: 100,

    },
    {
        field: 'q_17',
        headerName: 'Manage the logistics of team projects, including travel, team meetings, technical meetings and practice matches, and discipline',
        width: 100,

    },
    {
        field: 'q_18',
        headerName: 'Ability to learn from each competition cycle and apply lessons to future planning and decision making',
        width: 100,

    },
    {
        field: 'q_19',
        headerName: 'Ability to define and communicate a clear vision for athletes (team)',
        width: 100,

    },
    {
        field: 'q_20',
        headerName: 'Act consistently and instill in athletes (team) belief in their ability to perform at a national/ world level',

        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score Percentage',
        width: 100,

    },
    {
        field: 'isApprovedCoach', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                <input
                    type="checkbox"
                    onChange={(event) => handleCoachChange(params, event)}
                >

                </input>
        },
    },
    {
        field: 'nominee_coach_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_coach_supportings',
        headerName: 'Nominee Supportings',
        width: 300,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },

]

export {
    columns01,
    columns02,
    columns03,
}
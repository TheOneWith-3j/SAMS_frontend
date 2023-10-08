import { GridColDef } from "@mui/x-data-grid";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Swal from 'sweetalert2';
import axios from "axios";

const handleResearchChange = (params, event) => {
    if (event.target.checked == true) {

        const approvedNomineeName = params.row['faculty_name'];

        const data = {
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
                if (res.isConfirmed == true) {
                    //axios put
                    axios.put(`http://localhost:5001/research-admin/data/update`, data, {
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

const columns01: GridColDef[] = [
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
            return <a href={`http://localhost:5001/${params.value != null ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'evidence_of_data_provided', headerName: 'Evidence of Data Provided', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value != null ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    { field: 'confirmation_of_trueData', headerName: 'Confirmation of True Data', width: 200, },
    {
        field: 'approved', headerName: 'Approval Status', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                <input
                    type="checkbox"
                    onChange={(event) => handleResearchChange(params, event)}
                >

                </input>
        },
    },
];


export {
    columns01
}
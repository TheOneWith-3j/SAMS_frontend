import { GridColDef } from "@mui/x-data-grid";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Swal from 'sweetalert2';
import axios from "axios";

const handleStudentsChange = (params, event) => {

  if (event.target.checked == true) {

    const approvedNomineeName = params.row['student_name'];

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
          axios.put(`http://localhost:5001/students-admin/data/update`, data, {
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

const columns01: GridColDef = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email_id', headerName: 'Email', width: 200 },
  { field: 'student_name', headerName: 'Student Name', width: 200 },
  { field: 'students_class', headerName: 'Class', width: 150 },
  { field: 'course', headerName: 'Course', width: 200 },
  { field: 'institution_name', headerName: 'Institution', width: 200 },
  { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
  { field: 'recommendation_note', headerName: 'Recommendation Note', width: 300 },
  {
    field: 'approved', headerName: 'Approval Status', type: 'boolean', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        <input
          type="checkbox"
          onChange={(event) => handleStudentsChange(params, event)}
        >

        </input>
    },
  },
  {
    field: 'supportings', headerName: 'Supportings', width: 200, renderCell: (params) => {
      return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
];

export default columns01
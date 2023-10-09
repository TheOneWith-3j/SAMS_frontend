import React from 'react'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid'


const Datagrid = (props) => {

    const rows: GridRowsProp = props.rows

    const columns: GridColDef[] = [
        { field: 'institute', headerName: 'Institute', width: 200 },
        { field: 'institution_form', headerName: 'Institution Form', width: 150 },
        { field: 'research_form', headerName: 'Research Form', width: 150 },
        { field: 'sports_form', headerName: 'Sports Form', width: 150 },
        { field: 'teaching_form', headerName: 'Teaching Form', width: 150 },
        { field: 'non_teaching_form', headerName: 'Non-Teaching Form', width: 170 },
        { field: 'students_form', headerName: 'Students Form', width: 170 },
    ];

    return (
        <div className='w-[97%] p-2 flex justify-center items-center'>
            <DataGrid
                rows={rows}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
            />
        </div>
    )
}

export default Datagrid

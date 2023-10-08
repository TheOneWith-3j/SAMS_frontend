import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import SideBar from '../../../components/hoi_components/SideBar'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns01 , columns02 , columns03 , columns04 , columns05, columns06 } from '../../../data/AnalysisData/HOI/structure';
import axios from 'axios';


const Analysis = () => {

    const [title, setTitle] = useState()
    const [columns, setColumns] = useState([]);
    const [rows,setRows] = useState([]);
    const location = useLocation()

    useEffect(() => {

        let formTitle = (location.pathname.split('/analysis/')[1]); // dynamic title of table
        
        switch (formTitle) {
            case 'outstanding-institution':
                setColumns(columns01)
                break;
            
            case 'research':
                setColumns(columns02)
                break;
            
            case 'sports':
                setColumns(columns03)
                break;
            
            case 'teaching':
                setColumns(columns04)
                break;
            
            case 'non-teaching':
                setColumns(columns05)
                break;
            
            case 'students':
                setColumns(columns06)
        }

        const url = `http://localhost:5001/hoi/data/${formTitle}`;

        axios.get(url,{
            headers:{
                'user_id':localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data.data);
            if(res.data){
                setRows(res.data.data);
                console.log(rows);
            }
        })
        .catch((err)=>{
            console.log(err);
        });

        
        formTitle = formTitle.charAt(0).toUpperCase() + formTitle.slice(1)

        setTitle(formTitle)

    }, [location])

    return (
        <div>

            <div className='flex'>
                <SideBar />

                <div className='flex flex-col w-full overflow-y-scroll h-screen'>

                    <div className='p-5'>

                        <div className='my-5'>
                            <h2 className='text-xl font-Poppins font-semibold'>
                                {title} Form Analysis
                            </h2>
                        </div>
                        <div className=''>

                            <DataGrid
                            autoHeight
                                columns={columns}
                                rows={rows}
                                slots={{
                                    toolbar: GridToolbar,
                                }}
                                slotProps={{
                                    toolbar: {
                                        showQuickFilter: true,
                                        quickFilterProps: { debounceMs: 500 },
                                    }
                                }}
                                sx={{
                                    boxShadow: 2,
                                    padding: 2
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Analysis

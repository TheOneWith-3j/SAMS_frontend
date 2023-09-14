import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import GirlRoundedIcon from '@mui/icons-material/GirlRounded';
import BoyRoundedIcon from '@mui/icons-material/BoyRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ForestRoundedIcon from '@mui/icons-material/ForestRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='flex h-screen text-white font-Poppins'>
            <Sidebar backgroundColor='rgb(185,28,28)'>
                <Menu
                    menuItemStyles={{
                        button: {
                            backgroundColor: 'rgb(185,28,28)',
                            '&:hover': {
                                backgroundColor: '#880808',
                                color: '#fffff7'
                            },
                        },
                    }}
                >
                    <div className='p-4 text-2xl text-center mb-[1rem] font-Roboto '>
                        <p>
                            STUDENTS
                            <p>
                                ADMIN
                            </p>
                        </p>
                    </div>
                    <MenuItem
                        icon={<HomeRoundedIcon />}
                        component={<Link to='/students-admin' />}
                    >
                        Home
                    </MenuItem>
                    <SubMenu
                        defaultOpen={true}
                        label="Responses"
                        icon={<AssessmentRoundedIcon />}
                    >

                        <MenuItem
                        icon={<GirlRoundedIcon />}
                        component={<Link to='/students-admin/responses/somaiya-star-girl' />}
                        >
                            <p className='text-sm'>
                                Somaiya Star - Girl
                            </p>
                        </MenuItem>

                        <MenuItem
                        icon={<BoyRoundedIcon />}
                        component={<Link to='/students-admin/responses/somaiya-star-boy' />}
                        >
                            <p className='text-sm'>
                                Somaiya Star - Boy
                            </p>
                        </MenuItem>

                        <MenuItem
                        icon={<DesignServicesRoundedIcon />}
                        component={<Link to='/students-admin/responses/somaiya-star-innovator' />}
                        >
                            <p className='text-sm'>
                                Somaiya Star Innovator
                            </p>
                        </MenuItem>

                        <MenuItem
                        icon={<VerifiedRoundedIcon />}
                        component={<Link to='/students-admin/responses/somaiya-star-citizen' />}
                        >
                            <p className='text-sm'>
                                Somaiya Star Citizen
                            </p>
                        </MenuItem>

                        <MenuItem
                        icon={<ForestRoundedIcon />}
                        component={<Link to='/students-admin/responses/somaiya-green-star' />}
                        >
                            <p className='text-sm'>
                                Somaiya Green Star
                            </p>
                        </MenuItem>

                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar

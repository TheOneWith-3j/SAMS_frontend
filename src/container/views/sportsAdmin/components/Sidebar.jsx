import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import GirlRoundedIcon from '@mui/icons-material/GirlRounded';
import BoyRoundedIcon from '@mui/icons-material/BoyRounded';
import SportsOutlinedIcon from '@mui/icons-material/SportsOutlined';
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
                            SPORTS
                            <p>
                                ADMIN
                            </p>
                        </p>
                    </div>
                    <MenuItem
                        icon={<HomeRoundedIcon />}
                        component={<Link to='/sports-admin' />}
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
                            component={<Link to='/sports-admin/responses/sports-star-girl' />}
                        >
                            <p className='text-sm'>
                                Sports Star Girl
                            </p>
                        </MenuItem>

                        <MenuItem
                            icon={<BoyRoundedIcon />}
                            component={<Link to='/sports-admin/responses/sports-star-boy' />}
                        >
                            <p className='text-sm'>
                                Sports Star Boy
                            </p>
                        </MenuItem>

                        <MenuItem
                            icon={<SportsOutlinedIcon />}
                            component={<Link to='/sports-admin/responses/inspiring-coach' />}
                        >
                            <p className='text-sm'>
                                Inspiring Coach
                            </p>
                        </MenuItem>

                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar

import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
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
                            RESEARCH
                            <p>
                                ADMIN
                            </p>
                        </p>
                    </div>
                    <MenuItem
                        icon={<HomeRoundedIcon />}
                        component={<Link to='/research-admin' />}
                    >
                        Home
                    </MenuItem>


                    <MenuItem
                        icon={<FeedRoundedIcon />}
                        component={<Link to='/research-admin/responses/research' />}
                    >
                        <p className='text-sm'>
                            Responses
                        </p>
                    </MenuItem>

                </Menu>
            </Sidebar>
        </div>
    )
}

export default SideBar

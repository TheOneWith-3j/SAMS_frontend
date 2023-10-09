import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import BusinessIcon from '@mui/icons-material/Business';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
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
              IEAC
              <div className='p-1 mt-3 text-xs font-Poppins text-center '>
                {localStorage.getItem('institution')}
              </div>
            </p>
          </div>
          <MenuItem
            icon={<GavelRoundedIcon />}
            component={<Link to='/ieac' />}
          >
            Instructions
          </MenuItem>
          <SubMenu
            defaultOpen={true}
            label="Review"
            icon={<AssessmentRoundedIcon />}
          >
            <MenuItem
              icon={<BusinessIcon />}
              component={<Link to='/ieac/review/outstanding-institution' />}
            >
              Institution Form
            </MenuItem>
            
            <MenuItem
              icon={<BookRoundedIcon />}
              component={<Link to='/ieac/review/teaching' />}
            >
              Teaching Form
            </MenuItem>
            <MenuItem
              icon={<SupervisorAccountRoundedIcon />}
              component={<Link to='/ieac/review/non-teaching' />}
            >
              Non-Teaching Form
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar

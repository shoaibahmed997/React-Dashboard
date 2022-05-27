import React,{useState} from 'react'
import {  IconButton,MenuItem,Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const User = ({user}) => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    let avatarSource ;
    if (user?.gender === 'M'){
        avatarSource = '/male.png'
    }else if (user?.gender === 'F'){
        avatarSource = '/female.png'
    }
    else{
        avatarSource = '/stock.png'
    }
    let dispatch = useDispatch()
    let navigate = useNavigate()
    
    function Logout(){
      dispatch({type:'USER_REMOVE'})
      localStorage.removeItem('DashboardAppUser')
      navigate('/login',{state:{from:'/login'}})
    }


  return (
    <div className='flex items-center'>
     
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot">
                            <Avatar src={avatarSource} >S</Avatar>
                </StyledBadge>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>

                {/* <MenuItem  onClick={handleClose}>Profile</MenuItem> */}
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={Logout}>Logout</MenuItem>
              </Menu>
            </div>

            <div>
                <p className='mt-2'>Hello, <span className='font-semibold text-primary-heading'> {user.firstname} {user.lastname}</span> 
                <br></br>
               <span className='text-xs'>Welcome to Looto bank</span>
                </p>
            </div>

    </div>
  )
}

export default User
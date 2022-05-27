import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const LoginPage = () => {
  let [firstname,setfirstname] = useState('')
  let [lastname,setlastname] = useState('')
  let [gender,setgender] = useState('F')
  let navigate = useNavigate()
  let location = useLocation()
  let from = location?.state?.from?.pathname || '/'
  let dispatch = useDispatch()

  const login = (e)=>{
    e.preventDefault()
    let fname = firstname[0].toUpperCase() + firstname.substring(1)
    let lname = lastname[0].toUpperCase() + lastname.substring(1)
    let user = {firstname:fname,lastname:lname,gender:gender}
    localStorage.setItem('DashboardAppUser',JSON.stringify(user))
    dispatch({type:"USER_ADD",payload:user})
    navigate(from,{replace:true})
  }

  return (
    <div className=' bg-primary-orange-dark flex justify-center h-screen items-center'>
      <div className='mb-20 w-96 bg-primary-orange-light px-10 drop-shadow-xl '>
        <div className='mt-10'>
          <form onSubmit={login} className='flex flex-col gap-8'>
            {/* text field goes here */}
            <TextField value={firstname} required onChange={(e)=>{setfirstname(e.target.value)}} id="outlined-basic" label="First Name" variant="outlined"   />
            
            <TextField value={lastname} required onChange={(e)=>{setlastname(e.target.value)}} id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField
                label="Gender"
                select
                id="demo-simple-select"
                value={gender}
                onChange={(e)=>setgender(e.target.value)}
              >
          <MenuItem defaultChecked value={'F'}>Female</MenuItem>
          <MenuItem value={'M'}>Male</MenuItem>
        </TextField>
            <Button type='submit' variant="contained">Login</Button>
            <Link to='/about'> <p className='text-primary-purple-dark font-bold hover:cursor-pointer hover:text-primary-purple-light'>Know more about app</p></Link>
            <div className='text-primary-purple-dark font-bold text-sm '>Note:Use landscape for mobile device</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
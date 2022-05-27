import React from 'react'
import {useDispatch} from 'react-redux'
import {BsThreeDots} from 'react-icons/bs'
import {MdUpdate} from 'react-icons/md'
import {AiFillDelete,AiFillCopy} from 'react-icons/ai'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar,Snackbar,Alert,Slide } from '@mui/material'



const ClientListItem = ({client,setModes}) => {


  let dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (email)=>{
    handleClose()
    dispatch({type:"DELETE_CLIENT",payload:email})
    handleAlertClick("Client Deleted","success")
  }

  const handleUpdate  = (client)=>{
    dispatch({type:"SELECT_CLIENT",payload:client})
    setModes(2)
  }
  const  copyToClipboard = async (client)=>{
      await navigator.clipboard.writeText(JSON.stringify(client))
      handleClose()
      handleAlertClick("Copied to Clipboard",'success')
  }

  const [Alertopen,setOpen] = React.useState(false)
  const [msg,setMsg]  = React.useState("")
  const [myvariant,setvariant] = React.useState("success")
  const handleAlertClick = (msg,variant) => {
    setOpen(true);
    setMsg(msg);
    setvariant(variant)
  }
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  
  return (
         <div className='bg-white my-1 grid grid-cols-[1fr_1fr_1fr_1fr_1.5fr_.5fr] text-sm items-center p-2 transition-all hover:bg-slate-200 hover:cursor-pointer rounded-md'>
                <div>
                    {client.name}
                </div>
                <div className='flex items-center gap-2'>
                  <Avatar  sx={{ width: 24, height: 24 }} imgProps={{loading:'lazy'}} src={client?.companyLogo} >{client.company[0]}</Avatar>
                    {client.company}
                </div>
                <div>
                    {client.location}
                </div>
                <div>
                    {client.contact}
                </div>
                <div>
                    {client.email}
                </div>
                <div className=' ml-6'>
                    <BsThreeDots onClick={handleClick} />
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                    <MenuItem onClick={()=>copyToClipboard(client)}><AiFillCopy className='mr-1 text-primary-purple-light' /> Copy </MenuItem>
                    <MenuItem onClick={()=>handleUpdate(client)}><MdUpdate className='mr-1 text-blue-500' /> Update </MenuItem>
                    <MenuItem onClick={()=>handleDelete(client.email)}><AiFillDelete className='mr-1 text-red-500' /> Delete </MenuItem>
                  </Menu>
                </div>
                <Snackbar open={Alertopen} autoHideDuration={6000} onClose={handleAlertClose} TransitionComponent={Slide} >
                  <Alert onClose={handleAlertClose} severity={myvariant} sx={{ width: '100%' }}>
                    {msg}
                  </Alert>
                </Snackbar>
              </div>

  )
}

export default ClientListItem
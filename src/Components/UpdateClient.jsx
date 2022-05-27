import React from 'react'
import Heading from './Heading'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { Button, TextField } from '@mui/material'
import CountrySelect from './CountrySelect'

const UpdateClient = ({setModes}) => {

    const selectedClient = useSelector(state=>state.CurrentClientState.SelectedClient)
    const [clientName,setclientName]  = React.useState(selectedClient.name)
    const [clientContact,setclientContact]  = React.useState(selectedClient.contact)
    const [clienteEmail,setclienteEmail]  = React.useState(selectedClient.email)
    const [clientComapny,setclientComapny]  = React.useState(selectedClient.company)
    const [clientCompanyLogo,setclientCompanyLogo]  = React.useState(selectedClient.companyLogo)
    const [clientlocation,setclientlocation]  = React.useState(selectedClient.location)
    
    let dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:"ADD_CLIENT",payload:{name:clientName,company:clientComapny,companyLogo:clientCompanyLogo,location:clientlocation,contact:clientContact,email:clienteEmail}})
        setModes(0)
       
    }
  return (
    <div>
        <div>
            <Heading title={"Update Client"} />
        </div>
            <form onSubmit={handleSubmit}>

        <div className='mt-6 flex flex-col gap-4 justify-center w-1/3'>
            <TextField value={clientName} onChange={(e)=>{setclientName(e.target.value)}} id="outlined-basic" label="Client Name" variant="outlined" required />
            <TextField value={clientContact} onChange={(e)=>{setclientContact(e.target.value)}} id="outlined-basic" label="Contact" variant="outlined" required />
            <TextField value={clienteEmail} onChange={(e)=>{setclienteEmail(e.target.value)}} id="outlined-basic" label="Email" variant="outlined" type='email' required />
            <TextField value={clientComapny} onChange={(e)=>{setclientComapny(e.target.value)}} id="outlined-basic" label="Client Company" variant="outlined" required />
            <TextField value={clientCompanyLogo} onChange={(e)=>{setclientCompanyLogo(e.target.value)}} id="outlined-basic" label="Company Logo URL" variant="outlined" />
            <CountrySelect clientlocation={clientlocation}  setclientlocation={setclientlocation} />
            <Button variant='contained' type='submit'>Update</Button>
        </div>
            </form>
    </div>
  )
}

export default UpdateClient
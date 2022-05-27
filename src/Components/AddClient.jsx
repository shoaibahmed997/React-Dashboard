import React from 'react'
import {useDispatch} from 'react-redux'
import TextField from '@mui/material/TextField';
import {Alert , Button,Snackbar,Slide } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CountrySelect from './CountrySelect';

const steps = ['Client Info', 'Company Info', 'Mischief Managed'];



const AddClient = () => {


    let dispatch = useDispatch()


    const handleSubmit = ()=>{    
        dispatch({type:"ADD_CLIENT",payload:{name:clientName,company:clientComapny,companyLogo:clientCompanyLogo,location:clientlocation,contact:clientContact,email:clienteEmail}})
        handleClick("Client Added Successfully",'success')
    }


    const [clientName,setclientName]  = React.useState('')
    const [clientContact,setclientContact]  = React.useState('')
    const [clienteEmail,setclienteEmail]  = React.useState('')
    const [clientComapny,setclientComapny]  = React.useState('')
    const [clientCompanyLogo,setclientCompanyLogo]  = React.useState('')
    const [clientlocation,setclientlocation]  = React.useState('')

    // snack bar implementation
  const [open,setOpen] = React.useState(false)
  const [msg,setMsg]  = React.useState("")
  const [myvariant,setvariant] = React.useState("success")
  const handleClick = (msg,variant) => {
    setOpen(true);
    setMsg(msg);
    setvariant(variant)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  

    const getStepContent = (stepno)=>{
        switch (stepno) {
            case 0:
                return  <div className='flex gap-4'>
                <TextField value={clientName} onChange={(e)=>{setclientName(e.target.value)}} id="outlined-basic" label="Client Name" variant="outlined" required />
                <TextField value={clientContact} onChange={(e)=>{setclientContact(e.target.value)}} id="outlined-basic" label="Contact" variant="outlined" required />
                <TextField value={clienteEmail} onChange={(e)=>{setclienteEmail(e.target.value)}} id="outlined-basic" label="Email" variant="outlined" type='email' required />
            </div>
            case 1:
                return <div className='flex gap-4'>
                    <TextField value={clientComapny} onChange={(e)=>{setclientComapny(e.target.value)}} id="outlined-basic" label="Client Company" variant="outlined" required />
                    <TextField value={clientCompanyLogo} onChange={(e)=>{setclientCompanyLogo(e.target.value)}} id="outlined-basic" label="Company Logo URL" variant="outlined" />
                    {/* <TextField value={clientlocation} onChange={(e)=>{setclientlocation(e.target.value)}} id="outlined-basic" label="Location" variant="outlined" required /> */}
                    <CountrySelect  setclientlocation={setclientlocation} />
                    </div>
            case 2:
                return <div className=' text-xl'>Everything is done! Click Finish to Confirm</div>

        
            default:
                return <div>Not Found!</div>
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  
    const isStepOptional = (step) => {
      return step === null;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = (e) => {
        e.preventDefault()
        let newSkipped = skipped;
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        if(activeStep === steps.length-1){
            handleSubmit()
        }
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
      setclientName(prev=>"")
      setclientComapny(prev=>"")
      setclientCompanyLogo(prev=>"")
      setclientContact(prev=>"")
      setclienteEmail(prev=>"")
      setclientlocation(prev=>"")
    };

    

  return (
    <div className='px-4'>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
            
             );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
              <div className='text-xl font-extrabold text-primary-green-dark ml-6'>
                    Mischief Managed
              </div>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            <Box sx={{paddingTop:'2rem',paddingLeft:"2rem"}} >
                <form onSubmit={handleNext}>
                {getStepContent(activeStep)}
            
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* <Button type='submit' onClick={handleNext}> */}
            <Button variant='contained' type='submit'>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
          </form>
          </Box>
        </React.Fragment>
      )}
    </Box>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} TransitionComponent={Slide} >
        <Alert onClose={handleClose} severity={myvariant} sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
        
    </div>
  )
}

export default  AddClient
import React,{useState} from 'react'
import Heading from './Heading'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useCategory from '../Hooks/useCategory'
import useBalance from '../Hooks/useBalance'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

import {useDispatch} from 'react-redux'



const AddTransaction = () => {

  // redux related stuff implementation
  const allCategories = useCategory()
  const balance = useBalance()
  let dispatch = useDispatch()
  
  const [transaction,settransaction] = useState({
    title:"",
    amount:10,
    category:allCategories[0],
    date:"",
    transaction_id:(Math.random().toString(32).substring(2, 14)).toUpperCase(),
    note:""
    
  })

  
  const [createCategory,setCreateCategory] = useState({
    name:"",
    col:"#000000",
    income:true
  })

  const [num,setnum]= useState(0)

  // snack bar implementation
  const [open,setOpen] = useState(false)
  const [msg,setMsg]  = useState("")
  const [myvariant,setvariant] = useState("success")
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
  




  const submitTransaction = (e)=>{
    e.preventDefault()
    // if transaction category type was income ==> true then add the amount to the balance otherwise deduct it 
    if (transaction.category.income){
      dispatch({type:"ADD_TRANSACTION",payload:transaction})
      dispatch({type:"ADD_BALANCE",payload:Number(transaction.amount)})
      }else{
        if (transaction.amount > balance){
          handleClick("Insufficient Funds",'error')
        }else{
          dispatch({type:"ADD_TRANSACTION",payload:transaction})
          dispatch({type:"REDUCE_BALANCE",payload:Number(transaction.amount)})
          handleClick("Transaction Added Successfully",'success')
        }
      }
      settransaction({title:"",amount:10,category:allCategories[0], date:"", transaction_id:(Math.random().toString(32).substring(2, 14)).toUpperCase(), note:""})
  }

  
  const submitCategory=(e)=>{
      e.preventDefault()
      // check if the category is already present
      let check = allCategories.some(category=>{return category.name === createCategory.name})
      if (!check){
        dispatch({type:"ADD_CATEGORY",payload:createCategory})
        handleClick("Category Added Successfully",'success')
      }else{
        handleClick("Category Already Present",'error')
      }
      // set the object back to default
      setCreateCategory({name:"",col:"#000000",income:true})

  }



  return (
    <div>
      <div className='text-center mt-4'>
          <Heading title={"Add Transaction"} />
      </div>

      <form onSubmit={submitTransaction} className='flex flex-col mt-4 font-extrabold border-2 py-4 px-10 gap-4 bg-primary-orange-light rounded-md'>
        <div className='flex justify-center '>
          <TextField fullWidth label="Pay to" id="input-with-icon-textfield" inputProps={{maxLength:20}} onChange={(e)=>settransaction({...transaction,title:e.target.value})} value={transaction.title} size="small" required />
        </div>
        <div className='flex justify-center '>
          <TextField fullWidth label="Amount" id="input-with-icon-textfield" InputProps={{startAdornment: (<InputAdornment position="start">$ </InputAdornment>), min:10}}  onChange={(e)=>settransaction({...transaction,amount:e.target.value})} value={transaction.amount} required size='small' type='number' />
        </div>
        <div className='flex justify-center '>
          <TextField fullWidth label="Category" id="input-with-icon-textfield" onChange={(e)=>{settransaction({...transaction,category:allCategories[e.target.value]});setnum(e.target.value)}} value={num} required size='small' select helperText="Need more categories? add category below" >
            {allCategories.map((category,i)=>{
              return <MenuItem value={i} key={i} >{category.name}</MenuItem>
            })}
          </TextField>
        </div>
        <div className='flex justify-center '>
          <TextField fullWidth label={`Note (${200-transaction.note.length})`} id="input-with-icon-textfield" inputProps={{maxLength:200}} onChange={(e)=>settransaction({...transaction,note:e.target.value})} value={transaction.note} size="small" multiline  />
        </div>

            <Button type='submit' variant="contained" >Add Transaction</Button>
      </form>

        {/* add categories section  */}

      <div className='text-center mt-4'>
           
          <Heading title={"Add Category"} />
      </div>
      <form onSubmit={submitCategory} className='flex flex-col mt-4 font-extrabold border-2 py-4 px-10 gap-4 bg-primary-orange-light rounded-md'>
          <div className='flex justify-center '>
            <TextField value={createCategory.name} onChange={(e)=>setCreateCategory({...createCategory,name:e.target.value})} fullWidth label="Category Title" id="input-with-icon-textfield" inputProps={{maxLength:20}}  size="small" required />
          </div>
          <div className='flex justify-center '>
            <TextField value={createCategory.col} onChange={(e)=>setCreateCategory({...createCategory,col:e.target.value})} fullWidth label="Category Colour" id="input-with-icon-textfield" type='color'   size="small" required />
          </div>
          <div className='flex justify-center '>
              <FormControlLabel control={<Switch onChange={()=>setCreateCategory({...createCategory,income:!createCategory.income})} value={createCategory.income} checked={createCategory.income} />} label={`${createCategory.income ? "Money IN" :"Money Out"}`} />
          </div>

          <Button type='submit' variant="contained" >Add Category</Button>

      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} TransitionComponent={Slide} >
        <Alert onClose={handleClose} severity={myvariant} sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AddTransaction
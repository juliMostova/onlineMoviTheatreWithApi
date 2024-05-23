import './LoginIn.css';
import React, { useState } from "react";
import {useForm } from "react-hook-form";
 import FormControlLabel from '@mui/material/FormControlLabel';
 import Checkbox from '@mui/material/Checkbox';


function LoginIn(){
  const {register,
    formState:{
    errors,isValid},
    handleSubmit,reset} = useForm({mode:'onBlur'});

    const[correct,setCorrect] = useState();
    
    

const submit =(data) =>{
  console.log('Login:'+data)
  setCorrect('Your data was sending!')
  
  setTimeout(()=>{
    window.location.reload();
  },5000);
  reset();
}

  return(
    <form onSubmit={handleSubmit(submit)}>
  <label>
        Email*
        </label>
          <input type="text"
          
            {...register("email", {
              requaired: "You ned to type something",
              pattern:{
value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
message:'Type correct email,try again'
              },
              minLength:{
                value:5,
                message:'You have to type min 5 letter'
              }
            })}
          />
       
  <div>
    {
      errors?.email && <p>{errors?.email.message || "Error!"}</p>
    }
  </div>
  <label>
        Password *
        </label>
          <input type="password"
          
            {...register("password", {
              requaired: "You ned to type something",
              pattern:{
value:5,
message:'Type correct password,try again'
              },
              minLength:{
                value:5,
                message:'You have to type min 5 letter'
              }
            })}
          />
       

        <div>
    {
      errors?.password && <p>{errors?.password.message || "Error!"}</p>
    }
  </div>
  <FormControlLabel size='small' control={<Checkbox  />} 
         sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }}
         label="Remember Me"  />

{
  <div style={{color:'green',textAlign:'center',fontSize:'19px'}}>{correct}</div>
  }
<input type="submit"></input> 
    </form>
  )
}

export default LoginIn;
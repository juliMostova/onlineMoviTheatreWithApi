import './SignUp.css';
import React, { useState } from "react";
import { useForm } from "react-hook-form";


function SignUP(){
const {register,
  formState:{
  errors,isValid},
  handleSubmit,reset} = useForm({mode:'onBlur'});

  const [succesEl,setSucces] = useState();


  function dataRegistration(data){
    
fetch('http://localhost:3001/users',{
  method:"POST",
  body:JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
 }
})

  };


  const submit = (data) =>{
console.log(data)
setSucces("Your data was sending!")
reset();

dataRegistration(data);

setTimeout(()=>{
  window.location.reload();
},5000);


  };

  return(
<form onSubmit={handleSubmit(submit)}>
  <label>
  Username*
  </label>
  <input type="text" {...register("userName", {
              required: 'You have to type min 5 letter',
              pattern: '/[A-Za-z]{3}',
              minLength:{
                value:5,
                 message:'You have to type min 5 letter'
              }
            })}
            />

<div style={{height:'20px'}}>
  {
    errors?.userName && <p>{errors?.userName?.message ||"Error!"}</p>
  }
</div>
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
        <div style={{height:'20px'}}>
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
     
     <div style={{color:'green',fontSize:'20px',textAlign:'center'}}>
{succesEl}
</div>
       
<input type="submit"></input> 

</form>
  );
}

export default SignUP;


































































// import React,{useState} from "react";
// import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InputLabel from "@mui/material/InputLabel";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import InputAdornment from "@mui/material/InputAdornment";
// import Visibility from "@mui/icons-material/Visibility";
// import Button from '@mui/material/Button';
// import LoginIcon from '@mui/icons-material/Login';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';


// function SignUP(){
  
// const [showPassword,setShowPassword] = useState(false);
// //inputs
// const [userName,setUserName] = useState();
// const [email,setEmail]= useState();
// const [password,setPassword] = useState();

// //error
// const [erroUser,setErroUser] = useState(false);
// const [errorEmail,setErrorEmail]= useState(false);
// const [errorPassword,setErrorPassword] = useState(false);

// //validat
// const [notValid,setNotValid] = useState();
// const[succes,setSucces] = useState();

// const handleClickShowPassword = () => setShowPassword((show) => !show);

//    const handleMouseDownPassword = (event) => {
//      event.preventDefault();
//    };

//    const  isEmail = (email) =>{
//    return  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
//    };


//    function hundleChangeName(){

// if(!userName || userName.length < 5 || userName.length > 20){
//   setErroUser(true);
//   return;
// }
// setErroUser(false);
//    };

//   function hundleChangePassword(){

//     if(!password || password.length <5 || password.length >20){
//       setErrorPassword(true);
//       return;
//     }
//     setErrorPassword(false);
//   };

// function hundleChangeEmail(){
// if(!isEmail(email)){
//   setErrorEmail(true);
//   return;
// }
// setErrorEmail(false);

// };

// function hundleSubmit (e){
// e.preventDefault();



// setNotValid(null)
// if(erroUser || !userName){
//   setNotValid('This Username is not valid,try again.');
//   return;
// }

// if(errorEmail || !email){
//   setNotValid('This Email is not valid,try again.');
//   return;
// }
// if(errorPassword ||!password){
//   setNotValid('This password is not valid,try again.');
//   return;
// }

// setSucces("Success,data will be save.");



// };



//   return (
//     <div>
// <div style={{padding:10}}> 
// <TextField
// value={userName}
// error={erroUser}
//           id="standard-basic-1"
//           label="Username"
//           variant="standard"
//           fullWidth
//           onChange={(e) =>setUserName(e.target.value)}
//           onBlur={hundleChangeName}
//         />

// </div>
// <div style={{padding:10}}> 
// <TextField
// value={email}
// error={errorEmail}
//           id="standard-basic-2"
//           label="Email"
//           variant="standard"
//           fullWidth
//           onChange={(e) =>setEmail(e.target.value)}
//           onBlur={hundleChangeEmail}
//         />

// </div>

// <div style={{padding:10}}> 
// <FormControl
//           sx={{ m: 1, width: "25ch" }}
//           variant="standard"
//           style={{ width: "100%" }}
//         >
//           <InputLabel htmlFor="standard-adornment-password">
//             Password
//           </InputLabel>
//           <Input
//           value={password}
//           error={errorPassword}
//             id="standard-adornment-password"
//             type={showPassword ? "text" : "password"}
          
//             onChange={(e) => setPassword(e.target.value)}
//             onBlur={hundleChangePassword}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//   </div>
//   <Button variant="contained" style={{width:'100%'}} onClick={hundleSubmit}>
//     <LoginIcon />LOGIN</Button>
//     {
// notValid && (
//   <Stack sx={{ width: '100%' }} spacing={2}>
//   <Alert severity="error">{notValid}</Alert>
//   </Stack>
// )
//     }
    
// {
//   succes &&(
//     <Stack sx={{ width: '100%' }} spacing={2}>
//   <Alert severity="success">{succes}</Alert>
//   </Stack>
//   )
// }
//       </div>
//   )
// }

// export default SignUP;


























































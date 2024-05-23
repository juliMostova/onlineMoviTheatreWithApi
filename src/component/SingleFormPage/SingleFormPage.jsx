
import './SingleFormPage.css';
//import Paper from "@mui/material/Paper";
import FaceIcon from "@mui/icons-material/Face";
import Chip from "@mui/material/Chip";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import SignUP from "../SignUp/SignUp";
import LoginIn from "../LoginIn/LoginIn";
import React,{useState} from "react";



function SingleFormPage(){

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
return(
    <div className="ModalPaper">
    
      <div align='center'>
        {!checked ? (
          <Chip
            icon={<FaceIcon />}
            color="primary"
            size="small"
            label="Sign up"
            variant="outlined"
          /> 
        ) : (
          <Chip
            icon={<LockIcon />}
            color="primary"
            size="small"
            label="Login in"
            variant="outlined"
          />
        )}

        <br />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        </div>
        {!checked ? <SignUP/>:<LoginIn/>}
    
    </div>
);
}

export default SingleFormPage;























































// import './SingleFormPage.css';
// import Paper from "@mui/material/Paper";
// import FaceIcon from "@mui/icons-material/Face";
// import Chip from "@mui/material/Chip";
// import LockIcon from "@mui/icons-material/Lock";
// import Switch from "@mui/material/Switch";
// import SignUP from "../SignUp/SignUp";
// import LoginIn from "../LoginIn/LoginIn";
// import React,{useState} from "react";



// function SingleFormPage(){

//     const [checked, setChecked] = useState(true);

//     const handleChange = (event) => {
//       setChecked(event.target.checked);
//     };
  
// return(
//     <div className="ModalPaper">
//      <Paper elevation={3} style={{padding:'10px'}}>
//       <div align='center'>
//         {!checked ? (
//           <Chip
//             icon={<FaceIcon />}
//             color="primary"
//             size="small"
//             label="Sign up"
//             variant="outlined"
//           /> 
//         ) : (
//           <Chip
//             icon={<LockIcon />}
//             color="primary"
//             size="small"
//             label="Login in"
//             variant="outlined"
//           />
//         )}

//         <br />
//         <Switch
//           checked={checked}
//           onChange={handleChange}
//           inputProps={{ "aria-label": "controlled" }}
//         />
//         </div>
//         {!checked ? <SignUP/>:<LoginIn/>}
//       </Paper>
//     </div>
// );
// }

// export default SingleFormPage;
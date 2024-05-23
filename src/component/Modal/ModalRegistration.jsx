import  React from 'react';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SingleFormPage from '../SingleFormPage/SingleFormPage';
import './ModalRegistration.css';


const style = {
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height:'85%',
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  borderRadius:6,
  backgroundColor:' #39445a',
  p: 4,
};


function ModalRegistration (){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
return(
  <div>
      <Button variant="outlined" onClick={handleOpen}><LoginIcon />Login in</Button>
      <Modal 
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
         <SingleFormPage/>
        </Box>
      </Modal>
    </div>
);
}

export default ModalRegistration;



































































// import React,{useState} from "react";
// import SingleFormPage from "../SingleFormPage/SingleFormPage";
// import Button from '@mui/material/Button';
// import LoginIcon from '@mui/icons-material/Login';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Backdrop from '@mui/material/Backdrop';
// import Typography from '@mui/material/Typography';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '600',
//     borderRadius:8,
//     bgcolor: 'background.paper',
//     border: '1px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };


// function ModalRegistration (){
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
// return(
//     <div>
//  <Button  variant="outlined" style={{borderRadius:'18px'}} onClick={handleOpen}><LoginIcon />Login In</Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//           <Typography id="transition-modal-title" style={{ fonfSize:'22px'}} variant="h6" component="h2">
//           Welcome back!
//         </Typography> 
//           <SingleFormPage />
//           </Box>
//         </Fade>
//       </Modal>
//       </div>
// );
// }

// export default ModalRegistration;
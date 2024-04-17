//import Chip from '@mui/material/Chip';
import React,{useEffect} from "react";
import Chip from '@mui/material/Chip';
import {REACT_APP_KEY} from '../../config/config';



function Genre({type,setPage,selectElem,setSelectElem,genre,setGenre}){

function clickFilter(gen){

setSelectElem([...selectElem,gen]);
//console.log(selectElem)
//console.log(gen)
//console.log(genre)
setGenre(genre.filter((el) =>el.id !== gen.id))
setPage(1);
}

function deletFilter(selec){
 
  setSelectElem(selectElem.filter((el) => el.id !== selec.id));
  //console.log(selectElem)
  setGenre([...genre,selec])
setPage(1);
}

function filterApiMovi(){

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${REACT_APP_KEY}&language=en-US`, options)
  
  .then(response => response.json())
    .then(data => {
      //console.log(data.genres);
      setGenre(data.genres);
      setPage(1);
    })
     
}
useEffect(()=>{
  filterApiMovi();
},[]);


 return(
<div>

  {
    selectElem && selectElem.map((selec) => <Chip key={selec.id} label={selec.name}
    size="small" clickable color="primary" onDelete={() =>deletFilter(selec)}
    style={{margin:'2px',cursor:'pointer'}}
    />)
  }

  {
    genre && genre.map((gen) =><Chip key={gen.id} label={gen.name}
    color="success" size="small" style={{margin:'2px',cursor:'pointer'}}
    clickable
    onClick={() =>clickFilter(gen)}
    />)
  } 
</div>
 );

















































// function apiSearchGenre(){
//     const options = {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI",
//         },
//       };
    
//       fetch(
//         `https://api.themoviedb.org/3/genre/${type}/list?api_key=${REACT_APP_KEY}&language=en-US`,
//         options
//       )
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data.genres)
//          setGenre(data.genres)
      
//         })
//         .catch((err) => console.error(err));
// }

// useEffect(()=>{
//     apiSearchGenre();

//     return () =>{
//         setGenre([]);
//     }
// },[]);



//     const handleClick = (gen) => {
//       setSelectElem([...selectElem,gen])
//       console.log(selectElem)
//       setGenre(genre.filter((el) => el.id !== gen.id))
//    setPage(1);
//     };

//     function delElement(selElem){

//       setSelectElem(selectElem.filter((el) => el.id !== selElem.id));
//       setGenre([...genre,selElem])
//       setPage(1);
//     };

     //return(
//        <div style={{padding:"4px 0"}}>
// {
//   selectElem && selectElem.map((selElem) => <Chip key={selElem.id} label={selElem.name}
//   size="small" onDelete={() =>delElement(selElem)}  color='secondary'
//     style={{margin:'3px'}} clickable
//   />)
// }

// {
//     genre && genre.map((gen) => <Chip key={gen.id} 
//     label={gen.name} onClick={() =>handleClick(gen)} 
//     color='primary'  size="small" clickable
//     style={{margin:'3px'}}
//     />)
// }
//        </div> 
       
    
      
        
    //);
}

export default Genre;
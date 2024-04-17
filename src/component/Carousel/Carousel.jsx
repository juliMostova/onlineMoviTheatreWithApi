import React,{useEffect,useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {REACT_APP_KEY,img_300,noPicture} from '../../config/config';
import './Carousel.css';




function Carousel({id,media_type}){

const [cast,setCast] = useState([]);

const handleDragStart = (e) => e.preventDefault();

const items = cast.map((elem) =>(
<div className="carouselItem">
  <img src={elem.profile_path ?`${img_300}/${elem.profile_path}`:noPicture}
  onDragStart={handleDragStart}
  alt={elem?.name}
  className='carousel_img'
  ></img>
  <b className='carousel_text'>{elem?.name}</b>
</div>
)
);

const responsive ={
  0:{
    items:3,
  },
  512:{
    item:5,
  },
  1024:{
    items:7,
  },
};

function apiCarousel(){

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM5ZWFkMDYyM2I1NTlhZWZkZjU5Y2VmYjk4OTllOCIsInN1YiI6IjY1Yzc4YWE4YTMxNDQwMDE2NThkMzBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4_OsioEYuMWlPJ-Szloe_Y8QUdBYffKCvifKRMTb7UI",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${REACT_APP_KEY}&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
     //console.log(data.cast);
     setCast(data.cast);
    
    })
    .catch((err) => console.error(err));

}

useEffect(()=>{
  apiCarousel();
},[]);

    return(
        
   
      <AliceCarousel mouseTracking items={items} responsive={responsive} autoPlay/> 
     
    );
}

export default Carousel;
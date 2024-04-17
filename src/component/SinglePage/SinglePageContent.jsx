import {img_300,unavailable} from '../.././config/config';
import './SingleContent.css';
import Badge from '@mui/material/Badge';
import ContentModal from '../Modal/ContentModal';



function SinglePageContent ({media_type,release_date,title,rating,id,poster}){
    return(
    
      <ContentModal media_type={media_type} id={id}>
       
          <Badge badgeContent={rating.toFixed(1)} 
          color= {rating > 6? "success":"secondary"}>
         
          </Badge>
        <img  className= "poster" src={poster? `${img_300}${poster}`:unavailable} alt= {title}></img>  
   <b className='title'>{title}</b>
        <span className='sunTitle'>
{media_type === 'tv'? "TV Series" :"Movie"}
<span className='sunTitle'>{release_date}</span>
        </span>
    
      </ContentModal>
           
    );
}

export default SinglePageContent;


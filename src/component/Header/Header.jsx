import  './header.css';
import ModalRegistration from '../Modal/ModalRegistration';

function Header (){
return(
<span className='header'onClick={()=>window.scroll(0,0)}>🎬 Entertaiment Movi 🎥
 <ModalRegistration />
 </span>
);
}

export default Header;
import React from 'react'
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';


function Sidenav() {
    const user = useSelector(state => state.data.user.user);
    const dispach = useDispatch();
    const handleLogout = () => {
        dispach(logoutUser())
        signOut(auth);
    }
  return (
    <div className='sidenav'>
        <img className='sidenav__logo' 
        src='https://marcas-logos.net/wp-content/uploads/2020/01/Instagram-Logo-2015-2016.png' 
        alt=''/>
        <div className='sidenav__buttons'>
            <button className='sidenav__button'>
                <HomeIcon />
                <span>Página inicial</span>
            </button>

            <button className='sidenav__button'>
                <SearchIcon />
                <span>Pesquisar</span>
            </button>

            <button className='sidenav__button'>
                <ExploreIcon />
                <span>Explorar</span>
            </button>

            <button className='sidenav__button'>
                <SlideshowIcon />
                <span>Reels</span>
            </button>

            <button className='sidenav__button'>
                <MapsUgcIcon />
                <span>Mensagens</span>
            </button>
            <button className='sidenav__button'>
                <FavoriteBorderIcon />
                <span>Notificações</span>
            </button>
            <button className='sidenav__button'>
                <AddCircleOutlineIcon />
                <span>Criar</span>
            </button>
            <button className='sidenav__button'>
                <Avatar>{user.username ? user.username.charAt(0): 'A'}</Avatar>
                <span>{user.username}
                <button 
                className='logout__button'
                onClick={handleLogout}
                >Sair</button>
                </span>
            </button>
            
        </div>

        <div className='sidenav__more'>
          <button className='sidenav__button'>
            <MenuIcon />
            <span>Mais</span>
          </button>
        </div>
    </div>
  )
}

export default Sidenav
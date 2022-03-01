import React from 'react';
import './Menu.scss';
import '../../sass/general.scss';
import '../../sass/utilities.scss';
import images from '../../../assets/img/image';

const Menu = () => {
  return (
    <nav className='menu-phone container-1'>
        <div className='menu-phone-content'>
            <img className='menu-phone-img' src={images.menuHome} alt="notification" />
            <img className='menu-phone-img' src={images.menuNotification} alt="notification" />
            <img className='menu-phone-img' src={images.menuPlayBold} alt="notification" />
            <img className='menu-phone-img' src={images.menuSearch} alt="notification" />
        </div>
    </nav>
  )
}

export default Menu
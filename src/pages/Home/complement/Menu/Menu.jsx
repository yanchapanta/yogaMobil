import React from 'react';
import './Menu.scss';
import images from '../../../../assets/img/image';
import Icon  from  './complement/Icon/Icon';
import Button  from  './complement/Button/Button';

const Menu = () => {
  return (
    <nav className='menu-phone container-1'>
        <div className='menu-phone-content '>
            <Icon display='var(--hidden-desktop)' src={images.menuHome}  alt='Home'/>
            <Icon display='var(--hidden-desktop)' src={images.menuNotification}  alt='Notification'/>
            <Icon display='var(--hidden-desktop)' src={images.menuPlayBold}  alt='Play'/>
        <div className='menu-desktop'>
          <div className='menu-desktop-row'>
                <label className='yoga-menu-text d-none d-md-flex '>Yoga</label>
                <a className="btn-linkss hover d-none d-md-flex" href="#">Discovery </a>
                <a className="btn-linkss hover d-none d-md-flex" href="#">Jobs </a>
          </div>
              <div className=' menu-desktop-row btn-search'>
                <label htmlFor="search">
                  <Icon class='menu-phone-img hover' display='' src={images.menuSearch}  alt='search'/>
                </label>
                    <input id='search' className="mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              </div>
             <div className='menu-desktop-row'>
                <Button class='btn-signin2  hover d-none d-md-flex ' text='Log in'/>       
                <Button class='btn-signup  hover  d-none d-md-flex' text='Sign up'/>     
             </div>  
        </div>
        </div>
    </nav>
  )
}

export default Menu
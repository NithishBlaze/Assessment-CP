import React from 'react';
import { Outlet } from 'react-router-dom';
import Navcomp from './Navcomp';
import Footer from './Footer';
import Logo from '../Assests/Logo.jpg';
import Logo2 from '../Assests/banner3.jpg';
import './style.css';

const MainDashboard = () => {
  return (
    <div>
      <div className='Mainbox'>
        <div className='LogoBox'>
          <img src={Logo2} alt='Logo' className='Logoimg' />
        </div>
        <div className='Header'>
          <Navcomp />
        </div>
        <div className='Body'>
          <Outlet />
        </div>
        <div className='Footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;

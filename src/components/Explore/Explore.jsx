import React from "react";
import { NavLink } from "react-router-dom";
import './explore.css';

import  Button  from "../../components/button/Button";
export default function Explore() {
    return (
      <>
     <section class="banner-section-1 ">
      <div class="container-banner">
        <div class="row d-flex align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="hero-split-banner pt-5">
              <div class ="icon-text-banner">
              <i className='fas fa-home' /> 
              <span> Home</span>
              </div>
              <h1 class="heading-banner">
              Ahle Sunnat Wajamat
              </h1>
              <p class="subheading-banner header">
              United in Faith, Steadfast in Belief: 
Ahle Sunnat Wajamat , Guided by the Light of Islam.
              </p>
              <a
                class="btn btn-primary qualify-btn me-2"
                href=""
                data-toggle="modal"
              >
                EXPLORE
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-06 col-sm-12 img-container">
            <div class="date-div-banner">
            <i className='fas fa-moon' />   
            Tuesday, 21 Rabi'ul Awwal 1445 AH | October 06 2023
            </div>
            <div class='img-div-banner'>
              <img
src="images/masjid.png"
                alt=""
              />
            </div>
            <div class="social-icon">
  <div class="avatar" style={{backgrounColor:'blue'}}>
    <i class="fas fa-phone"></i>
  </div>
  <div class="avatar" style={{backgrounColor: 'blue'}}>
    <i class="fab fa-whatsapp"></i>
  </div>
  <div class="avatar" style={{backgrounColor: 'blue'}}>
    <i class="fas fa-comment"></i>
  </div>
            </div>
          </div>
        </div>
      </div>
      <div class ="footer-banner"> <div class="typewriter">
  <span class="text">Join us in commemorating the a... -Join us in commemorating the a... - Animation </span>
</div></div>
    </section>
        </>
      
    );
  }
  
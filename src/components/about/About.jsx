import React from 'react'
import  './about.css'
import img from './1.png'

import img2 from './Frame 9.png'
import Button from '@mui/material/Button';
export default function About() {
  return (
    <div>
    <section class="section-understand-of-About">
      <div class="conatiner-of-About">
        <div class="row">
          
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div>
              <div >
             <div class=" pt-5">
              <div class ="icon-text-About">
              <span> About us</span>

              <span> <img src={img2}/></span>
              </div>
              <h1 class="heading-About">
            Ahle Sunnat Wajamat:
              </h1>
              <h2 class=" heading-About-span ">Our Faith, Our Identity.</h2>
              <p class="subheading-About">
              We, the Ahle Sunnat Wajamat, proudly embrace the guiding light of Sunnah as we traverse life's intricate journey.
              </p>
              </div>
              <div class="conatiner-of-About">
  <div class="custom-card-About">
    <i class="icon  fas fa-book-open"></i>
    <div class="about-content">
      <h2 class="title-style">Education</h2>
      <p class="description-style">Teaching and learning of Quran, Sunnah and Figh.</p>
    </div>
  </div>
  <div class="custom-card-About">
   <i class="icon fas fa-hand-holding-heart"></i>

    <div class="about-content">
      <h2 class="title-style">Peaceful</h2>
      <p class="description-style">working for peace and helping people.</p>
    </div>
  </div>
  <div class='conatiner-of-About'>
  <div class="custom-card-About">
  <i class=" icon fas fa-globe"></i>

    <div class="about-content">
      <h2 class="title-style">Global Reach</h2>
      <p class="description-style">The spread of Islam's message globally.</p>
    </div>
  </div>
  <div class="custom-card-About">
  <i class=" icon fas fa-users"></i>

    <div class="about-content">
      <h2 class="title-style">Welfare</h2>
      <p class="description-style">carrying out efforts to help the poor.</p>
    </div>
  </div>
  </div>
</div>

              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 ">
            <div>
              <img class="my-image-About" src={img} alt="" />
              
            </div>
            <button type="button-About" class="btn btn-outline-dark">View More</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

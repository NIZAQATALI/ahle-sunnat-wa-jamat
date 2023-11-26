import React from 'react';
import styled from 'styled-components';
import './most.css'
// Styled components for the React component


export default function Most() {
  return (
    <>
 <div class="section-eight">
    <div class="container">
      <div class="row">
        <div class="explore-most d-flex flex-column justify-content-center align-items-center text-align-center">
          <span>Explore Most Popular Course</span>
          <img src={process.env.PUBLIC_URL + './image/Frame (6).png'}/>
          
          <p>That the Messenger of Allah (ﷺ) said: </p>
          <p>“Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.”</p>
        </div>
        <div class="row text-center course">
          <div class="col-lg-4 col-md-4 col-sm-6 courses">
            <p>Courses For Brothers</p>

          </div>
          <div class="col-lg-4  col-md-4 col-sm-6 courses1">
            <p>Courses For Sister</p>
          </div>
          <div class="col-lg-4  col-md-4 courses1">
            <p>Courses For Chlidren</p>
          </div>
          <hr style={{color: "rgb(114, 112, 112)", border: "1px solid", marginTop: "15px"}}/>
        </div>
        <div class="col-lg-6 col-md-6 d-flex figh-course gap-3">
          <img src={process.env.PUBLIC_URL + './image/Rectangle 65.png'}alt="img"/>
          <div>
            <span>Figh Course</span>
            <p>Bahar e Shariat a well-recognized religious book and this book is a source of becoming an Islamic</p>
            <button>View Detail</button>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 d-flex figh-course   gap-3">
          <img src={process.env.PUBLIC_URL +'./image/Rectangle 66.png'} alt="img"/>
          <div>
            <span>Tafseer Course</span>
            <p>A Tafseer course is an in-depth study of the interpretation and commentary on the Quran, the </p>
            <button>View Detail</button>
          </div>
        </div>
        <hr style={{color: "rgb(114, 112, 112)", border: "1px solid", marginTop: "15px"}}/>
        <div class="col-lg-6 col-md-6 d-flex figh-course gap-3">
          <img src={process.env.PUBLIC_URL +'./image/Holy-quran.png'} alt="img"/>
          <div>
            <span>Tajweed Course</span>
            <p>Tajweed is the science of proper pronunciation and articulation of the Quranic text, and it is essential
            </p>
            <button>View Detail</button>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 d-flex figh-course gap-3">
          <img src={process.env.PUBLIC_URL +'./image/Rectangle 69.png'} alt="img"/>
          <div>
            <span>Hadith Course</span>
            <p>On a journey through the rich tapestry of Hadith course and gain a profound insight into the saying</p>
            <button>View Detail</button>
          </div>
        </div>
        <div class="view-btn d-flex  justify-content-center align-items-center text-align-center">
          <button>View All Courses</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

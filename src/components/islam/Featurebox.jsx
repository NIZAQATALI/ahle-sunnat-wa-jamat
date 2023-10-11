import React from 'react'
import './featurebox.css';
export default function Featurebox(props) {
  return (
    <>
      <div className="a-box">

        <div className="a-b-img">
       
        <img src= {props.Image} alt="" />
        </div>
       
        <div className="a-b-text">
          <h2>{props.title}</h2>
     <p>{props.ch}</p>
        </div>
          
          
      </div>
    </>
  )
}

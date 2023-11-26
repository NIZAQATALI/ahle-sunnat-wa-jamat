import React from 'react';
import "./storycard.css";
import  CP from "./cardpic.png";
const Storycard = ({ imageSrc, content, date }) => {
  return (
    <div className="storycard">
      <div className="storycard-image">
        <img src={imageSrc} alt="Story Card Image" />
      </div>
      <div className="storycard-content">
        <h3 >The Story of Prophet Ibrahim (Abraham) and the Sacrifice:</h3>
        <p >Islamic stories, often referred to as Islamic narratives or parables, are an integral part of Islamic tradition and literature.</p>
      </div>
      <div className="storycard-footer">
        <div className="slide-button"><i class='fas fa-angle-right' ></i>
<div>
</div>
</div>
        <div className="date"> 23-22-2023</div>
      </div>
    </div>
  );
};

export default Storycard;

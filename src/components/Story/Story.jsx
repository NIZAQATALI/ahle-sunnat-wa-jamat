import React from 'react';
import styled from 'styled-components';
import BI from './borderImage.png'
import  "./story.css"
import Storycard from './Storycard';
import  CP from "./cardpic.png";
import  CP2 from "./yusaf.png";
import  CP3 from "./cave.png";
const StoryMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns on large screens */
; /* Adjust the gap between columns as needed */
  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
`;
const StoryColumnLeft = styled.div`
  background-color: #f0f0f0;
 
  border: 1px solid #ccc;
`;
const StoryColumnRight = styled.div`
  background-color: #black;
  padding: 20px;
  border: 1px solid #ccc;
`;
const Description = styled.div`
  width: ${(props) => props.width || 'auto'};
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '18px'};
  font-family: 'Readex Pro';
  font-weight: ${(props) => props.fontWeight || 300};
  word-wrap: break-word;
`;
const ButtonContainer = styled.div`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  position: 'relative';
  display: 'flex';
`;
const ButtonBackground = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  left: ${(props) => props.left || '0'};
  top: ${(props) => props.top || '0'};
  position: 'absolute';
  background: '#3B3B79';
  border-radius: 5px;
`;
const ButtonText = styled.div`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  left: ${(props) => props.left || '0'};
  top: ${(props) => props.top || '0'};
  position: 'absolute';
  color: 'white';
  font-size: '18px';
  font-family: 'Readex Pro';
  font-weight: 400;
  word-wrap: break-word;
`;
export default function Story() {
  return (
    <>
    <StoryMainContainer>
      <StoryColumnRight>
        {/* Content for the left column */}
        <div class="container">
        <div class="section">
  <div class="title-primary">Islamic Success Stories</div>
  <img src= {BI} class="border-image" alt="Border Image" />
</div>
<div class="section">
    <div class="title-secondary">We Have Islamic Stories<br />To Inspire You!</div>
    <div class="section">
      <div class="description">
        Islamic stories, often referred to as Islamic<br/> narratives or parables, are an integral part of<br/> Islamic tradition and literature.
      </div>
      <div class="button-container">
        <div class="button-background"></div>
        <div class="button-text">Read All Stories</div>
      </div>
    </div>
  </div>
</div>
      </StoryColumnRight>
      <StoryColumnLeft>
      
      <div class="story-container">
  <div class="inner-left">
    <Storycard imageSrc={CP} />
  </div>
  <div class="inner-right">
    <Storycard  imageSrc={CP2}  /> 
    <Storycard  imageSrc={CP3}/> 
  </div>
</div>
      </StoryColumnLeft>
    </StoryMainContainer>
    </>
  )
}

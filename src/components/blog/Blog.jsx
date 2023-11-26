import React from 'react'
import styled from 'styled-components';
import borderimg from './borderImg.png'
import BlogGrid from './BlogGrid';
const StyledContainerBfull = styled.div`
  width: 100%;
  background-color: #3B3B79;
  height: 500px; /* Set a fixed or max height for the parent div */
  overflow: visible; /* Hide overflowing content */
  position: relative;

  @media (max-width: 768px) {
    height: auto; /* Set height to auto for small screens */
  }
`;
   const itemStyle = {
   width: '60%',
   height: '300px'
     };
   const item = {
  margin : '0 -20px'
     };
     const MAINContainer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: center;
   
     @media (max-width: 768px) {
      flex-direction: column;
     }
   `;
  const headingStyle = {
    fontFamily: 'Readex Pro',
    fontSize: '20px',
    fontWeight: "bold",
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'center',
    paddingTop: '60px',
    color:"#11574A",
  };
  const StyledHeading = styled.div`
    font-family: 'Readex Pro';
    font-size: 20px;
    font-weight: bold;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    padding-top: 60px;
    color: #fff;
  `;

  const div = styled.div`
    display: grid;
    background-color: white;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 5rem;
    margin-top: 0;
   
  
  background-color:red;
    @media (max-width: 768px) {
      grid-template-columns: 1fr; /* Single column for small screens */
      margin-inline: 10px; /* Adjust margin for small screens */
    }
  `;
  const containerStyle = {
 
      width: '100%',
      backgroundColor:'#3B3B79',
       /* Set a fixed or max height for the parent div */
    height: "500px",
    overflow: "visible", /* Hide overflowing content */
    position: "relative"
     };
  
  
  
  const imgStyle = {
  width:'100px',
  height:'50%',
  color:"#11574A",
  }
 
    const firstD = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '100px',
    };
    
    const buttonStyle = {
      background: "#3B3B79",
      fontSize: '24px',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      width: "227px",
  height: "53px",
  padding: "0 20px", /* 20px padding to the left and right */
    };
export default function Blog() {
  return (
    <>
  
    <StyledContainerBfull>
    <StyledHeading><h3>Latest Bolgs</h3>
    <img src={borderimg} style={imgStyle}></img> 
         <p>YOU MAY READ THE ISLAMIC BLOGS HERE.</p></StyledHeading>
         <BlogGrid/>
         </StyledContainerBfull>
         <div style={firstD}>
     
      <button style={buttonStyle}>View All Blogs</button>
    </div>
    </>
  )
}

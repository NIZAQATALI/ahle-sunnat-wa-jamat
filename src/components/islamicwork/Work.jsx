import React from 'react';
import styled from 'styled-components';
  import BG from './BG.png'
 import Ha from './Ha.png'
 import Env from './Env.png'
 import RA from './AR.png'
  import RS from './RS.png'
  import img2 from './fr.png'
  import img1 from './babag123.png'
import './work.css'
import { RssFeedTwoTone } from '@mui/icons-material';
const containerStyle = {
height:'auto',
  width: '100%',
  backgroundColor:"red"
 };
 const SmallcontainerStyle = {
    height:'auto',
      width: '100%',
  
     };
 const itemStyle = {
    width: "100%",
    height: "auto"

   };
   const itemStyleImage = {
    width: "100%",
    height: "480px"

   };
 const item1 = {
  height: "fit-content",
flex:4,
backgroundColor:"inherit",
paddingTop:"60px",
paddingBottom:"30px"
   };
   const item2 = {
    flex:8,
    backgroundColor:"inherit",
    // backgroundColor:"green",
       };
       const MAINContainer = styled.div`
       display: flex;
       padding-inline: 200px;
       flex-direction: row;
       background-image: url(${BG});  /* Replace 'your-image-url.jpg' with the URL of your image */
       background-size: cover;
       background-repeat: no-repeat;
       background-position: center;
       
       @media (max-width: 768px) {
         flex-direction: column;
         padding-inline: 0px;
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
  color: #11574A;
`;
const SmallStyledHeading = styled.div`
  font-family: 'Readex Pro';
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 60px;
  color: #fff;
`;
const BottomStyledHeading = styled.div`
  font-family: 'Readex Pro';
  display:flex;
  align-items: center;
  justify-content: center;
margin-bottom:40px;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 40px;
  color: #11574A;
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




const imgStyle = {
width:'100px',
height:'50%',
color:"#11574A",

}
const GridContainer = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-inline:25px;
  margin-top: 0;
 background-color:inherit;
  padding: 30px 0px;
}
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for small screens */
    margin-inline: 10px; /* Adjust margin for small screens */
  }
`;
const GridItemStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%; /* Make items full width for small screens */
  }
`;
export default function Work() {
  return (
     <MAINContainer>
      <div style={item1}>
      <div class="column-of-imgContainer">
  <div class="image">
    <img src={img1} alt="Small Picture" style={itemStyleImage}/>
  </div>
  <div class="small-title-work"> 
  Social and Welfares Services
</div> 
</div>
      </div>
      <div style={item2}>
      <div  style={SmallcontainerStyle}>
    <SmallStyledHeading><h3>Islamic Books</h3>
    <img src={img2} style={imgStyle}></img> 
         <h2>Muslim Excellence in Every Profession</h2></SmallStyledHeading>
         <GridContainer>
      <GridItemStyle >
          <div class="content">
    <img src={RS} alt="Your Image"/>
    <p class="label">Religious Scholars</p>
  </div>
        </GridItemStyle>
        <GridItemStyle >
        <div class="content">
    <img src={Ha} alt="Your Image"/>
    <p class="label">Religious Scholars</p>
  </div>
        </GridItemStyle >
        <GridItemStyle>
        <div class="content">
    <img src={RS} alt="Your Image"/>
    <p class="label">Religious Scholars</p>
  </div>
        </GridItemStyle>
        <GridItemStyle >
        <div class="content">
    <img src={Ha} alt="Your Image"/>
    <p class="label">Healthcare Assistance</p>
  </div>
        </GridItemStyle>
        <GridItemStyle >
        <div class="content">
    <img src={RS} alt="Your Image"/>
    <p class="label">Education</p>
  </div>
        </GridItemStyle >
        <GridItemStyle >
        <div class="content">
    <img src={Env} alt="Your Image"/>
    <p class="label">Environment</p>
  </div>
        </GridItemStyle >
        {/* Add more grid items as needed */}
      </GridContainer>
         </div>
      </div> 
    </MAINContainer> 
  


  )
}

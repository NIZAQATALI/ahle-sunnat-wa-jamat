import React from 'react';
import styled from 'styled-components';
 import s2 from './S2 1.png'
import s3 from './S3 1.png'
 import s4 from './image 34.png'
 import img2 from './f.png'
 import img1 from './blessing.png'
import './listing.css'
const containerStyle = {
height:'auto',
  width: '100%',
 };
 const itemStyle = {
 width: '100%',
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
  color: #11574A;
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

export default function Listing() {
  return (
    <div  style={containerStyle}>
    <StyledHeading><h3>Islamic Books</h3>
    <img src={img2} style={imgStyle}></img> 
         <p>LISTED 5000+ BOOKS</p></StyledHeading>
     <MAINContainer>

    <div class="column-of-sadqa-List">
  <div class="image">
    <img src={img1} alt="Small Picture" style={itemStyle}/>
  </div>
  <h2 class="title-sadqa-List">The Blessed Schedule<br/> Of The...</h2>
 
  <div class='bottom-div-listing'>   <div class="small-title"> 
    
   <i class="fas fa-book-open"></i>
Read</div> <div class="small-title"> 
  <i class="fas fa-download"></i></div></div>
</div>
     
     
      <div class="column-of-sadqa-List">
  <div class="image">
    <img src={s2} alt="Small Picture" style={itemStyle}/>
  </div>
  <h2 class="title-sadqa-List">Mahanama Khawateen<br/>
(web Edition)</h2>
 
  <div class='bottom-div-listing'>   <div class="small-title"> 
    
   <i class="fas fa-book-open"></i>
Read</div> <div class="small-title"> 
  <i class="fas fa-download"></i></div></div>
</div>
    
    
      <div class="column-of-sadqa-List">
  <div class="image">
    <img src={s3} alt="Small Picture" style={itemStyle}/>
  </div>
  <h2 class="title-sadqa-List">Akhari Nabi Ke Waldein <br/>
Karimin</h2>
 
  <div class='bottom-div-listing'>   <div class="small-title"> 
    
   <i class="fas fa-book-open"></i>
Read</div> <div class="small-title"> 
  <i class="fas fa-download"></i></div></div>
</div>
  
  
       <div class="column-of-sadqa-List">
  <div class="image">
    <img src={s4} alt="Small Picture" style={itemStyle}/>
  </div>
  <h2 class="title-sadqa-List">The Reward Of Giving<br/> Sadaqah</h2>
 
  <div class='bottom-div-listing'>   <div class="small-title"> 
    
   <i class="fas fa-book-open"></i>
Read</div> <div class="small-title"> 
  <i class="fas fa-download"></i></div></div>
</div>
    
   
     
      {/* Add more grid items as needed */}
    </MAINContainer> 
    <BottomStyledHeading> <div class="Under-div"><p> Islamic  Book  Libaray</p></div>
   
       </BottomStyledHeading>
  </div>
  )
}

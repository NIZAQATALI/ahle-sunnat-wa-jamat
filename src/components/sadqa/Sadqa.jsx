import React from 'react'

import styled from 'styled-components';
//  import img from './1.png'
//  import img3 from './2.png'
 import img4 from './Frame (3).png'
  import img3 from './Frame (2).png'
 import img1 from './sadqa w.png'
  import img2 from './Frame (1).png'
  import galla from './gallaImg.png'
  import CBK from './card background1.png'
 import './sadqa.css'
const StyledHeading = styled.div`
  font-family: 'Readex Pro';
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 60px;
  color: #f4cd69;
`;
const ImgStyle = styled.div`
  width: 100%;
 
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr; /* Three columns, middle one is twice the width */
  gap: 10px; /* Adjust the gap between columns as needed */
`;
const GridColumn = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
`;
const HalfWidthColumn = styled(GridColumn)`
  grid-column: span 2; /* Make the middle column span two columns */
`;
export default function Sadqa() {
  return (
    <div>
 <StyledHeading><h3 class="custom-class-h3-sadqa">Contribute to Ahle Sunnat Wajammat</h3>
        <ImgStyle>  <img src={img4} ></img></ImgStyle> 
        <p class="custom-paragraph-sadqa">"Verily, Sadaqah protects the contributors of Sadaqah from the heat of grave and certainly Muslim will be<br/> under the shade of his Sadaqah on the Day of Judgment..."<br/> (Shu’ab-ul-Iman, vol. 3)</p>
        </StyledHeading>
        <h2 class="custom-class-h2-sadqa">Sadqa</h2>
        <div class="grid-container-of-sadqa"> 
        <div class="column-of-Sadqa">
  <div class="image">
    <img src={img1} alt="Small Picture"/>
  </div>
  <h2 class="small-title-Sadqa">Sadaqah Wajibah</h2>
  <p class="description-of-sadqa">This is charity which is not binding in nature but is optional. This type includes alms given for the removal of difficulties, philanthropic, the general giving of any Halal item to any one.</p>
  <div class='bottom-div'>  <div> <div class="image">
    <img src={img2} alt="Small Picture"/>
  </div>
  <h2 class="small-title-Sadqa">Sadaqah Nafilah</h2></div> <div> <div class="image">
    <img src={img3} alt="Small Picture"/>
  </div>
  <h2 class="small-title-Sadqa">Fidyah</h2></div> <div> <div class="image">
    <img src={img2} alt="Small Picture"/>
  </div>
  <h2 class="small-title-Sadqa">Udhiyyayh</h2></div></div>
</div>
<div class="half-width-column">
  <img src= {galla} alt="Your Image"class="image-big"/>
</div>
  <div class="column-of-Sadqa">
  <div class="image">
    <img src={img1} alt="Small Picture"/>
  </div>
  <h2 class="small-title-Sadqa">Sadaqah Wajibah</h2>
  <p class="description-of-sadqa">This form of Sadaqah is similar to Zakah in that it must be spent on the same categories as defined by the Qur’an, except that it is not a condition for the beneficiary to be Muslim.</p>
  <div class='bottom-div'>  <div> <div class="image">
    <img src={img2} alt="Small Picture"/>
  </div>
  <h2 class="small-title-Sadqa">Sadaqatul Fitr</h2></div> <div> <div class="image">
    <img src={img3} alt="Small Picture"/>
  </div>
  <h2 class="small-title-Sadqa">Fidyah</h2></div> <div> <div class="image">
    <img src={img2} alt="Small Picture"/>
  </div>
  <h2 class="small-title-Sadqa">Udhiyyayh</h2></div></div>
</div>
</div>

    </div>
  )
}

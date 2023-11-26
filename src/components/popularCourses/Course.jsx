
import React from 'react';
import styled from 'styled-components';
 import img from './1.png'
 import img3 from './2.png'
 import img4 from './3.png'
 import img5 from './4.png'
// import img1 from './babag.png'
 import img2 from './border.png'
 import './course.css'
const containerStyle = {
height:'auto',
  width: '100%',
  paddingBottom: '30px',
  backgroundColor:'black',
 };

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

const GridContainer = styled.div`
  display: grid;
  
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  margin-top: 0;
  margin-inline: 170px;
 border-bottom: 1px solid #f5f5f5;
  @media (max-width: 992px) {
    grid-template-columns: 1fr; /* Single column for small screens */
    margin-inline: 10px; /* Adjust margin for small screens */
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
margin-inline: 170px;
padding-bottom: 5px;
border-bottom:2px solid #fff;
`;
const LeftLink = styled.a`
font-family: 'Readex Pro', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0;
color: #F4CD69;

text-align: left;
`;
const CenterLink = styled.a`
font-family: 'Readex Pro', sans-serif;
font-size: 20px;
font-weight: 400;
color: white;
line-height: 25px;
letter-spacing: 0;
text-align: left;
`;
const RightLink = styled.a`
font-family: 'Readex Pro', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0;
color: white;
text-align: left;
`;
const CardContainer = styled.div`
  display: flex;
 
  border-radius: 8px;
  overflow: hidden;
  width: 100%; /* Adjust the width as needed */
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Image = styled.div`
 display:flex;
  align-items: center;
`;
const CardImage = styled.img`
display: flex;
justify-content: center;

  width: 200px;
  height: 128px;
 margin-inline:20px;
`;

const Content = styled.div`
  flex: 2;  
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
font-family: 'Readex Pro';
font-size: 20px;
font-weight: 400;
line-height: 33px;
letter-spacing: 0em;
text-align: left;
color:#f4cd69;
`;
const Description = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color:#fff
`;
const CardButton = styled.button`
  background-color: #D9D9D9;
  ;
  font-weight:bold;
  color: #3B3B79;
  padding: 8px 14px;
 margin-right: 200px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-inline: 30px
  &:hover {
    background-color: #0056b3;
  }
`;
const GridItemStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 225px;
  min-width: 550px;
  border-radius: 5px;
  @media (max-width: 992px) {
    width: 100%; /* Make items full width for small screens */
  }
`;
const StyledTextWithLine = styled.div`
  font-family: 'Readex Pro';
  font-size: 4px;
  font-weight: 400;
  line-height: 3px;
  margin-inline:140px;
  letter-spacing: 0em;
  text-align: center;
  margin-top:2
color: #fff
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px; /* Adjust the height of the horizontal line as needed */
    background-color: #000; /* Set the color of the line */
  }
`;


const imgStyle = 
styled.div`
  width: 272px;
  height: 11px;
  top: 4041px;
  left: 581px;
`;


const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Adjust the margin as needed for spacing */
`;
const ViewButton = styled.button`
  background-color: #f4cd69;
  font-weight: bold;
  color: #3B3B79;
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px; /* Adjust the font size as needed */

  &:hover {
    background-color: #0056b3;
  }
`;
const Course = () => {
  return (
    <div  style={containerStyle}>
      <StyledHeading><h3 class="custom-class-h3">Explore Most Popular Course</h3>
        <imgStyle>  <img src={img2} ></img></imgStyle> 
        <p class="custom-paragraph">That the Messenger of Allah (ﷺ) said:<br/> “Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.”</p>
        <Container>
      <LeftLink href="#">Courses For Brothers</LeftLink>
      <CenterLink href="#">Courses For Sisters</CenterLink>
      <RightLink href="#">Courses For Children</RightLink>
    </Container>
        </StyledHeading>
      <GridContainer>
       <GridItemStyle img={img}>
       <CardContainer>
      <Image>
        <CardImage src={img} alt="Card Image" />
      </Image>
      <Content>
        <Title>Figh Course</Title>
        <Description>
          Card Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>
        <CardButton>View Detail</CardButton>
      </Content>
    </CardContainer>
        
        </GridItemStyle>
        <GridItemStyle img={img}>
       <CardContainer>
      <Image>
        <CardImage src={img3} alt="Card Image" />
      </Image>
      <Content>
        <Title>Tafseer Course</Title>
        <Description>
          Card Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>
        <CardButton>View Detail</CardButton>
      </Content>
    </CardContainer>
        </GridItemStyle>
      </GridContainer>
      <GridContainer>
       <GridItemStyle img={img3}>
       <CardContainer>
      <Image>
        <CardImage src={img4} alt="Card Image" />
      </Image>
      <Content>
        <Title>Figh Course</Title>
        <Description>
          Card Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>
        <CardButton>View Detail</CardButton>
      </Content>
    </CardContainer>
        </GridItemStyle>
        <GridItemStyle img={img}>
       <CardContainer>
      <Image>
        <CardImage src={img5} alt="Card Image" />
      </Image>
      <Content>
        <Title>Tafseer Course</Title>
        <Description>
          Card Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>
        <CardButton>View Detail</CardButton>
      </Content>
    </CardContainer>
        </GridItemStyle>
      </GridContainer>
      <CenteredButton>
        <ViewButton>View All Courses</ViewButton>
      </CenteredButton>
    </div>
  );
};

export default Course;

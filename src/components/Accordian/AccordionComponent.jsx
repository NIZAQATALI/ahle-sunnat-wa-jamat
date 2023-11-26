import React, { useState } from 'react';
import styled from 'styled-components';
import img from './bri.png';
import logo from './white.png';
import donateus from './donatus.png';
const AccordionContainer = styled.div`
  width: 100%;
  text-align: center;
  
  margin-bottom:200px;
  padding: 10px;
`;

const AccordionItem = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const AccordionHeader = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const AccordionContent = styled.div`
  display: ${props => (props.expanded ? 'block' : 'none')};
  padding: 10px;
`;
const FooterContainer = styled.div`
  display: grid;
  background-color:#3B3B79;
  position: relative;

  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); /* 4 columns in a single row on large screens */
  }
`;

const FooterColumn = styled.div`
  background-color: #f0f0f0;
  margin-top: 100px;
  padding: 20px;
  background-color: inherit;
  text-align: left;

  &.wider {
    grid-column: span 1; /* This column will be twice as wide as the others */
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
     /* Adjust font size for smaller screens */
     margin-top:0px;
  }
`;

const LinkList = styled.ul`

  list-style: none;
  padding: 0;
  color: white;
  font-size: 16px;
  font-family: 'Readex Pro';
  font-weight: 300;
  word-wrap: break-word;
 
`;

const LinkItem = styled.li`
  margin: 5px 0;
  text-decoration: none; /* Remove link underline */
  color: white;
  font-size: 16px;
  font-family: 'Readex Pro';
  font-weight: 300;
  word-wrap: break-word;
  /* Apply inline style to the anchor tag to remove the underline */
  a {

    margin: 5px 0;
    text-decoration: none; /* Remove link underline */
    color: white;
       font-size: 12px;
    font-family: 'Readex Pro';
    font-weight: 300;
    word-wrap: break-word;
  }
  i{
    font-size: 12px;
    margin-right: 10px;
    color: #F4CD69;
  }
`;
const CustomDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: #F4CD69;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -15%;
  left: 25%;
  padding: 20px;
  border-radius:4px;
  
  z-index: 1; /* Ensure the custom div is above other elements */
`;

const CustomTitle = styled.h3`
  font-size: 20px;
  font-family: 'Readex Pro';
  font-weight: 500;
  word-wrap: break-word;
   color:#11574A;
  margin-bottom: 10px;
`;

const InnerDiv = styled.div`
  /* Styling for the inner div */
  padding: 15px 35px;
  width: fit-content;
  background-color:blue;
  border: 1px solid blue;
  border-radius: 10px;
`;
const BorderedDiv = styled.hr`
    border: 2px solid white;
    width: 100%;
    /* Add any additional styles you want here */
`;
const CopyrightContainer = styled.div`
    background-color: rgb(59, 59, 121);
    padding: 20px;
    border-top:2px solid #d9d9d9;
    text-align: center;
    color: white;
      font-family: Outfit;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: justified;
`;
const AccordionComponent = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = index => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  const accordionData = [
    { title: 'What are the major Islamic holidays, and how are they celebrated?', content: 'answer1' },
    { title: 'What is the role of women in Islam, and how does it vary in different cultures?', content: 'anwser' },
    { title: 'What is the significance of fasting during Ramadan, and how is it observed?', content: 'answer' },
    { title: 'What is the Hajj pilgrimage, and why is it important for Muslims?', content: 'Answer' },
  ];

  return (
    <>
    <AccordionContainer>
      <h2 style={{ margin: '80px 0px 0px 0px',color: "#11574A",
fontSize: "20px",
fontFamily: 'Readex Pro',
fontWeight: 400,
 }}>Frequently Asked Questions</h2>
 <img src={img}  style={{ margin: '0px 0px 50px 0px',color: "#11574A",
fontSize: "20px",
fontFamily: 'Readex Pro',
fontWeight: 400,
 }}/>
      {accordionData.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            {item.title}
            <i className={`fa ${expanded === index ? 'fa-angle-up' : 'fa-angle-down'}`} />
          </AccordionHeader>
          <AccordionContent expanded={expanded === index}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  
  <div style={{position:"relative"}}>
  <CustomDiv>
    <CustomTitle>Contribute to Ahle Sunnat Wajammat</CustomTitle>
    <img src={donateus}/>
   
  </CustomDiv>
    <FooterContainer>
   
      <FooterColumn className="wider">
       
        <LinkList>
          <img src={logo}/>
        
        </LinkList>
        <LinkList>
        <h3 style={{   color: 'white',
    fontSize: '20px',
    fontFamily: 'Readex Pro',
    fontWeight: '500',
    wordWrap: 'break-word',}}>Ahle Sunnat Wajamat</h3>
        
        </LinkList>
        <LinkList>
        <p style={{   color: 'white',
    fontSize: '11px',
   
    fontFamily: 'Readex Pro',
    fontWeight: '500',
    wordWrap: 'break-word',}}>Ahle Sunnat Wajamat is one of the great Islamic community in the world.</p>
        
        </LinkList>
      </FooterColumn>
      <FooterColumn>
        <h3 style={{   color: 'white',
    fontSize: '20px',
    fontFamily: 'Readex Pro',
    fontWeight: '500',
    wordWrap: 'break-word',}}>Important</h3>
        <LinkList>
          <LinkItem><a href="#">Social and Welfare</a></LinkItem>
          <LinkItem><a href="#">Books</a></LinkItem>
          <LinkItem><a href="#">You should know!</a></LinkItem>
          <LinkItem><a href="#">Islamic Stories</a></LinkItem>
          <LinkItem><a href="#">Figh</a></LinkItem>
          <LinkItem><a href="#">Halal and Haram</a></LinkItem>
        </LinkList>
      </FooterColumn>
      <FooterColumn>
        <h3 style={{   color: 'white',
    fontSize: '20px',
    fontFamily: 'Readex Pro',
    fontWeight: '500',
    wordWrap: 'break-word',}}>Quick Links</h3>
        <LinkList>    
          <LinkItem><a href="#">Home</a></LinkItem>
          <LinkItem><a href="#">About Us</a></LinkItem>
          <LinkItem><a href="#">You should know!</a></LinkItem>
          <LinkItem><a href="#">Islamic Stories</a></LinkItem>
          <LinkItem><a href="#">E-Learning</a></LinkItem>
          <LinkItem><a href="#">Forums</a></LinkItem>
          <LinkItem><a href="#">Quran Teachings</a></LinkItem>
        </LinkList>
      </FooterColumn>
      <FooterColumn>
        <h3 style={{   color: 'white',
    fontSize: '20px',
    fontFamily: 'Readex Pro',
    fontWeight: '500',
    wordWrap: 'break-word',}}>Contact Us</h3>
        <LinkList>
          <LinkItem><a href="#"> <i class="fas fa-phone"></i>(214)-660-5498</a></LinkItem>
          <LinkItem><a href="#"> <i class="fas fa-phone"></i>+923173033654</a></LinkItem>
          <LinkItem><a href="#"><i class="fas fa-envelope"></i> support@ahlesunnatwajamat.com</a></LinkItem>
          <LinkItem><a href="#"> <i class="fas fa-envelope"></i>donate@ahlesunnatwajamat.com</a></LinkItem>
          <LinkItem><a href="#"> <i class="fas fa-map-marker-alt"></i>Aries Tower , Satelliate Town , Rawalpindi</a></LinkItem>
        </LinkList>
      </FooterColumn>
    </FooterContainer>

    <CopyrightContainer>
            ©Copyright 2023 by I.T. Department of Ahle Sunnat Wajamat
          
        </CopyrightContainer>
            {/* Your content goes here */}
     

    </div>
    </>
  );
};

export default AccordionComponent;

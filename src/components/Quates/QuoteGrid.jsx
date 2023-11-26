import React from 'react';
import styled from 'styled-components';
import leftq from './left-q.png';
import rightq from './right-q.png';
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 margin-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color:D9D9D9;
  padding:40px 11px 40px 380px;
flex-direction: column;

@media (max-width: 768px) {
  padding: 20px; /* Adjust padding for small screens */
}
`;
const RightContainer = styled.div`
  display: flex;
  padding:40px 267px 40px 11px;

  
  width: 100%;
  height: 100%;

  background-color:#F4CD69;
flex-direction: column;

@media (max-width: 768px) {
  padding: 20px; /* Adjust padding for small screens */
}
`;
const GridItem = styled.div`
  background-color: #D9D9D9;
  color: #fff;
  text-align: center;
`;
const Image = styled.img`
 width: fit-content;
`;
const ImageLast = styled.img`
 width: fit-content;
`;
const QuoteTitle = styled.div`
  width: 100%;
  color: #11574A;
  font-family: 'Readex Pro';
  font-size: 37px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 30px;
  }
`;

const FamousQuotesTitle = styled.div`
  width: 62%;
  margin-top: 40px;
  margin-bottom: 12px;
  margin-left: 25px;
  text-align: center;
  color: #11574A;
  font-size: 22px;
  font-family: 'Readex Pro';
  font-weight: 400;
  background-color: white;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 0;
  }
`;

const UpliftingWordsTitle = styled.div`
  width: 100%;
  color: black;
  font-size: 34px;
  font-family: 'Readex Pro';
  font-weight: 500;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const QuoteDescription = styled.div`
  color: black;
  font-size: 22px;
  font-family: 'Readex Pro';
  font-weight: 300;
  line-height: 2.0;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.8;
  }
`;



const QuoteGrid = () => {
  return (
    <GridContainer>
      <GridItem>
        <LeftContainer>
        
        <FamousQuotesTitle>
  Famous Quotes
</FamousQuotesTitle>
<UpliftingWordsTitle>
  INSPIRING WORDS TO UPLIFT YOUR DAY
</UpliftingWordsTitle>
        <div style={{color: 'black',
fontSize: "18px",
fontFamily: 'Readex Pro',
fontWeight: '300',
lineHeight: 2.0,
}}>
        Here you may read the famous Islamic quotes. Take a moment to reflect, be inspired and let spiritual words guide you.
        </div>
        </LeftContainer>
      </GridItem>
      <GridItem><RightContainer>
      <Image src={leftq}/>
      <QuoteTitle>
  Sayyiduna Abdullah Bin Masood رضي الله عنه
</QuoteTitle> 
<QuoteDescription>
  Here you may read the famous Islamic quotes. Take a moment to reflect, be inspired, and let spiritual words guide you.
  <ImageLast src={rightq}/>
</QuoteDescription>


        </RightContainer></GridItem>
    
      {/* Add more grid items as needed */}
    </GridContainer>
  );
};

export default QuoteGrid; 
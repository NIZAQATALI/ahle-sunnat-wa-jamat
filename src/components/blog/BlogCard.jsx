import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 95%;
  border: 1px solid #ccc;
  border-radius:4px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const CardImage = styled.div`
  img {
    width: 100%;
  }
`;

const CardContent = styled.div`
  padding: 16px;
  align-items: 
`;

const CardTitle = styled.h3`
  width: 100%;
  height: 100%;
  color: #11574A;
  font-size: 18px;
  font-family: 'Readex Pro';
  font-weight: 400;
  word-wrap: break-word;
  display: flex;
    padding-left: 13px;
`;

const CardText = styled.p`
  width: 100%;
  height: auto;
  color: #11574A;
  font-size: 12px;
  font-family: 'Readex Pro';
  font-weight: 400;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

const SlideButton = styled.div`
  background-color: #3B3B79;
  color: #fff;
  border: 1px solid gray;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 16px;
  font-family: 'Readex Pro';
  font-weight: 400;
  word-wrap: break-word;
`;

const FontAwesomeIcon = styled.i`
  font-size: 26px;
`;

const BlogCard = ({ imageSrc, content, date }) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={imageSrc} alt="Blog Card Image" />
      </CardImage>
      <CardContent>
        <CardTitle>Aqeeda Khatme Nabuwat</CardTitle>
        <CardText>
        Khatme Nabuwwat (also spelt Khatme Nabuwat or Khatme Nubuwwat) refers to the Islamic concept of the Seal of the Prophets, declaring the finality of prophets ending with Muhammad.
        </CardText>
      </CardContent>
      <CardFooter>
        <SlideButton>
        View more
        </SlideButton>
        <CardDate>23-22-2023</CardDate>
      </CardFooter>
    </CardContainer>
  );
};

export default BlogCard;

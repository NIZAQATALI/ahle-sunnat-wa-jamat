import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';
import first from './first.png';
import sec from './sec.png';
import third from './third.png';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
margin-inline:100px;
/* Allow the grid container to overflow the parent div */
overflow: visible;
position: absolute;
left:100px;
bottom: -50px; /* Adjust the value as needed */
@media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-inline: 0px; /* Remove margin */
    overflow: visible; /* Remove overflow */
    position: static; /* Remove position */
    bottom: auto; /* Remove bottom */
  }
`;

const GridItem = styled.div`
 
  color: #fff;
 ;
  text-align: center;
`;

const BlogGrid = () => {
  return (
    <GridContainer>
      <GridItem><BlogCard  imageSrc={first}/></GridItem>
      <GridItem> <BlogCard  imageSrc={sec}/></GridItem>
      <GridItem><BlogCard  imageSrc={third}/></GridItem>
    
      {/* Add more grid items as needed */}
    </GridContainer>
  );
};

export default BlogGrid;

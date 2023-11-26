// import React from 'react';
// import img from './Baba.png'
// import img2 from './Frame 9.png'
// const containerStyle = {
//   height: '500px',
//   width: '100%',
// //   display: 'flex', // Use flexbox to center content vertically
// //   flexDirection: 'column', // Stack items vertically
// //   alignItems: 'center', // Center items horizontally
// //   justifyContent: 'center', // Center items vertically
//  };
// const headingStyle = {
//   fontFamily: 'Readex Pro',
//   fontSize: '20px',
//   fontWeight: "bold",
//   lineHeight: '25px',
//   letterSpacing: '0em',
//   textAlign: 'left',
//   textAlign: 'center',
//   paddingTop: '60px',
//   color:"#11574A",
// };
// const gridContainerStyle = {
//   display: 'grid',
//   backgroundColor: 'white',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gap: '15px',
// marginTop: '0px',
// marginInline:'200px',
//   padding:"30px"
// };
// const gridItemStyle = {
//   background: `url(${img}) center/contain no-repeat`,
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: "275px",
//   width: "369px",
 
//   borderRadius: '5px',

// };
// const gridItemStylebtn = {

//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: "195px",
//   width: "267px",
//   border: '1px solid #3B3B79',
//   borderRadius: '5px',

// };
// const videoIconStyle = {
//   position: 'absolute',
//   fontSize: '24px',
//   color: 'white',
// };
// const avatarStyle = {
//   position: 'absolute',
//   width: '60px',
//   height: '50px',
//   borderRadius: '20%', // Make the avatar circular
//   backgroundColor:" transparent",
//   border :'2px  solid  white', // Set a background color for the avatar
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   top: '50%', // Center the avatar vertically
//   left: '50%', // Center the avatar horizontally
//   transform: 'translate(-50%, -50%)', // Center the avatar properly
// };

// const imgStyle = {
// width:'100px',
// height:'50%',
// color:"#11574A",
// }
// const viewBtn = {
//   fontFamily: 'Readex Pro',
//   fontSize: '32px',
//   color:"#11574A",
//   fontWeight: 400,
//   lineHeight: '33px',
//   letterSpacing: '0em',
//   textAlign: 'left',
//   paddingInline:'70px'
//   }

// const ActivityContainer = () => {
//   return (
//     <div className="activity-container" style={containerStyle}>
//       <div style={headingStyle}><h3>Islamic Activities</h3>
//            <img src={img2} style={imgStyle}></img> 
//            <p>Guiding Hearts  on  the of  Islam</p></div>
//       <div style={gridContainerStyle}>
//       <div className="grid-item" style={gridItemStyle}>
//           <div style={avatarStyle}>
//             <i style={videoIconStyle} className="fa fa-play"></i>
//           </div>
//         </div>
//         <div className="grid-item" style={gridItemStyle}>
//           <div style={avatarStyle}>
//             <i style={videoIconStyle} className="fa fa-play"></i>
//           </div>
//         </div>
//         <div className="grid-item" style={gridItemStyle}>
//           <div style={avatarStyle}>
//             <i style={videoIconStyle} className="fa fa-play"></i>
//           </div>
//         </div>
//         <div className="grid-item" style={gridItemStyle}>
//           <div style={avatarStyle}>
//             <i style={videoIconStyle} className="fa fa-play"></i>
//           </div>
//         </div>
//         <div className="grid-item" style={gridItemStyle}>
//           <div style={avatarStyle}>
//             <i style={videoIconStyle} className="fa fa-play"></i>
//           </div>
//         </div>
//         <div className="grid-item" style={gridItemStylebtn}>
//         <div style={viewBtn}> View All Activities</div>
//         </div>
//         {/* Add more grid items as needed */}
//       </div>
     
//     </div>
//   );
// };

// export default ActivityContainer;
import React from 'react';
import styled from 'styled-components';
import img from './Baba.png'
import img1 from './babag.png'
import img2 from './Frame 9.png'
import './activitycontainer.css'
const containerStyle = {
height:'auto',
  width: '100%',
 };
const headingStyle = {
  fontFamily: 'Readex Pro',
  fontSize: '20px',
  fontWeight: "bold",
  lineHeight: '25px',
  letterSpacing: '0em',
  textAlign: 'left',
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

const GridContainer = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 0;
  margin-inline: 200px;
  padding: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr; /* Single column for small screens */
    margin-inline: 10px; /* Adjust margin for small screens */
    gap: 0px;
    justify-content: center;
    padding: 0px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for small screens */
    margin-inline: 10px; /* Adjust margin for small screens */
    gap: 0px;
    
    padding: 0px;
  }
`;

const GridItemStyle = styled.div`
  background: url(${props => props.img}) center/contain no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 275px;
  width: 369px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%; /* Make items full width for small screens */
  height: 240px;
  }
`;

const gridItemStyle = {
  background: `url(${img}) center/contain no-repeat`,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: "275px",
  width: "369px",
  borderRadius: '5px',
};  
const gridItemStylebtn = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: "195px",
  width: "267px",
  border: '1px solid #3B3B79',
  borderRadius: '5px',

};
const videoIconStyle = {
  position: 'absolute',
  fontSize: '24px',
  color: 'white',
};
const avatarStyle = {
  position: 'absolute',
  width: '60px',
  height: '50px',
  borderRadius: '20%', // Make the avatar circular
  backgroundColor:" transparent",
  border :'2px  solid  white', // Set a background color for the avatar
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%', // Center the avatar vertically
  left: '50%', // Center the avatar horizontally
  transform: 'translate(-50%, -50%)', // Center the avatar properly
};
const imgStyle = {
width:'100px',
height:'50%',
color:"#11574A",
}
const viewBtn = {
  fontFamily: 'Readex Pro',
  fontSize: '32px',
  color:"#11574A",
  fontWeight: 400,
  lineHeight: '33px',
  letterSpacing: '0em',
  textAlign: 'left',
  paddingInline:'70px'
  }
const ActivityContainer = () => {
  return (
    <div  style={containerStyle}>
      <StyledHeading><h3>Islamic Activities</h3>
           <img src={img2} style={imgStyle}></img> 
           <p>Guiding Hearts on the of Islam</p></StyledHeading>
      <GridContainer>
      <GridItemStyle img={img}>
          <div style={avatarStyle}>
            <i style={videoIconStyle} className="fa fa-play"></i>
          </div>
        </GridItemStyle>
        <GridItemStyle img={img1}>
          <div style={avatarStyle}>
            <i style={videoIconStyle} className="fa fa-play"></i>
          </div>
        </GridItemStyle >
        <GridItemStyle img={img}>
          <div style={avatarStyle}>
            <i style={videoIconStyle} className="fa fa-play"></i>
          </div>
        </GridItemStyle>
        <GridItemStyle img={img1}>
          <div style={avatarStyle}>
            <i style={videoIconStyle} className="fa fa-play"></i>
          </div>
        </GridItemStyle>
        <GridItemStyle img={img}>
          <div style={avatarStyle}>
            <i style={videoIconStyle} className="fa fa-play"></i>
          </div>
        </GridItemStyle >
        <div class="grid-item" style={gridItemStylebtn}>
        <div style={viewBtn}> View All Activities</div>
        </div>
        {/* Add more grid items as needed */}
      </GridContainer>
     
    </div>
  );
};

export default ActivityContainer;

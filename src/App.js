import React from 'react'
import Navbar1 from './components/navbar/Navbar1'
import Explore from './components/Explore/Explore'
import Feature from './components/feature/Feature'
import Slider from './components/slider/Slider'
  import About from './components/about/About'
import Cards from './components/cards/Cards'
import SingleCard from './components/singleCard/SingleCard'
import Dnav from './components/Dnav/Dnav'
import ActivityContainer from './components/thumbnail/ActivityContainer'
import Course from './components/popularCourses/Course'
 import Sadqa from './components/sadqa/Sadqa'
import Ayat from './components/ayat/Ayat'
import Listing from './components/BookList/Listing'
 import Work from './components/islamicwork/Work'
import Slider1 from './components/slider/Slider1'
import Story from './components/Story/Story' 
import Blog from './components/blog/Blog'
import AccordionComponent from './components/Accordian/AccordionComponent'
import Quote from './components/Quates/QuoteGrid'
import Most from './components/Most/Most'
import Ayatnew from './components/ayat/Ayatnew'
const App = () => {
  return (
    <div>
     
      <Navbar1/>
   <Explore/>
   <Feature/>
<Slider1/>
 <About/> 
<Cards/>
<ActivityContainer/>
 <Most/>
<Sadqa/> 
<Ayatnew/> 
<Listing/> 
<Work/>
<Story/>
<Blog/> 
<Quote/>
<AccordionComponent/>

    </div>
  )
}

export default App

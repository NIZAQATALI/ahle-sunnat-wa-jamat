import React from 'react'
import Featurebox from '../islam/Featurebox'
 import image1 from './p-I.jpeg';
 import image2 from './P S.jpeg';
 import image3 from './L.jpeg';
 import image4 from './A.jpeg';
 import image5 from './M.jpeg';
 import Frame from './Frame.png';
 import './feature.css';
export default function Feature() {
  return (
    <>
    <div class="features">  
    <div className='topdiv'><div>Discover Islam</div>
    <img src= {Frame} alt="" /></div>
    <h1 >Strengthening Faith through the Pillars of Islam</h1>
    <div className="a-container">
    <Featurebox Image={image1} title= 'Faith/Shahada' ch='Belief in the Unity of Allah & Prophet Muhammad ﷺ as Allah’s messenger.'/>  
    <Featurebox Image={image2} title= 'Prayer/Salah' ch='The act of worshipping Allah five times a day throughout your lifetime.'/>
    <Featurebox Image={image3} title= 'Alms/ Zakat'ch='Sharing a certain percentage of your wealth with less fortunate every year.'/>
    <Featurebox Image={image4} title = 'Fasting/ Roza,' ch='Fasting from dawn to dusk for 30 days in the holy month of Ramadan.A'/>
    <Featurebox Image={image5} title = 'Pilgrimage/ Hajj' ch='A spiritual duty that every Muslim must offer once in their life, if able.M'/>
    </div>
    </div>
      
    </>
  )
}

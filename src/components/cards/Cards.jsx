import React from 'react';
import SingleCard from '../singleCard/SingleCard';
import './cards.css'
import img from './QPK.png'
import img2 from './hath.png'
import img3 from './fiqa.png'
const listItems1= ["LEARN QURAN", "TAJWEEZ", "TAFSEER"]
const listItems2= ["Learn Arbaen", "Read Ahadiths", "Read Books"]
const listItems3= ["LEARN Musnad al-Firdous", "Kanz al-Ummal", "Jami Jawami"]
const images=[img, img2, img3]
const classes=["card-img-quran",'card-img-HAD','card-img-FIQA']
const title=["QURAN", "HADITH", "FIQA"]
export default function Cards() {
  return (
    <>
    <div className="black-heading">
        <h1 className="my-black-heading">YOU  SHOULD KNOW!</h1>
      </div>
<div class ='wrapper-cards'>


      <SingleCard 
      classes={classes[0]}
        titles={title[0]}
        images={images[0]}
        listItems={listItems1}
      />
        <SingleCard
        classes={classes[1]}
        titles={title[1]}
        images={images[1]}
        listItems={listItems2}
      />
        <SingleCard
        classes={classes[2]}
        titles={title[2]}
        images={images[2]}
        listItems={listItems3}
      />
      </div>
    </>
  );
}

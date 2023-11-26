import React from 'react'
import './singlecard.css'

export default function SingleCard(props) {

  return (
    <>
  <div class="quran-card " >
    <h5 class="card-title">{props.titles}</h5>
    <img src={props.images} class={props.classes} alt="..."/>
    <ul class="list_card">
    {props.listItems.map((item, index) => (

            <li key={index} className="list-group-item_card">
                              <span class="rating-icon">&#9733;</span>

              {item}
            </li>
          ))}
    </ul>
    <a href="#" class="quran-button">Learn More</a>

</div>
    </>
  )
}

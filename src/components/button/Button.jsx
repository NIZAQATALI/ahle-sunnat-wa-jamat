import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <Link to='Contact Us'>
      <button className='myButton'>Contact Us</button>
    </Link>
  );
}
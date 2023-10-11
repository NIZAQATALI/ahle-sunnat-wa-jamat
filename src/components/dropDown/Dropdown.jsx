import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);
const MI=props.MenuItems

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'mydropdown-menu clicked' : 'mydropdown-menu'}
      >
        {MI.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;

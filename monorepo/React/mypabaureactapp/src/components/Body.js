import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Body = ({ options }) => {
  return (
    <div>
      <h2>Select an Option</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={`/option/${index + 1}`}>{option.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;

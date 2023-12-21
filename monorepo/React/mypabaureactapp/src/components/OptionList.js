
import React from 'react';
import { Link } from 'react-router-dom';

const OptionList = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>
          <Link to={`/option/${index + 1}`}>{option}</Link>
        </li>
      ))}
    </ul>
  );
};

export default OptionList;

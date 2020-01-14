import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => (
  <Link to="/" label="home">
    <button type="button">
        &larr;
    </button>
  </Link>
);

export default BackButton;

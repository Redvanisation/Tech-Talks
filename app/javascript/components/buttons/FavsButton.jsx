import React from 'react';
import { Link } from 'react-router-dom';

const FavsButton = () => (
  <Link to="/fav_talks" label="home">
    <button type="button">
        &rarr;
    </button>
  </Link>
);

export default FavsButton;

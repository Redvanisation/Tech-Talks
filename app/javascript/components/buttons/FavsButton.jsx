import React from 'react';
import { Link } from 'react-router-dom';
import { MdStars } from 'react-icons/md';


const FavsButton = () => (
  <Link to="/fav_talks" label="home">
    <div className="fav-button">
      <MdStars className="fav-button__icon" />
    </div>
  </Link>
);

export default FavsButton;

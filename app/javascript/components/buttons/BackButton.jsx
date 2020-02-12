import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => (
  <Link to="/" label="home">
    <FaArrowLeft className="button mr-5 ml-3 mt-2" />
  </Link>
);

export default BackButton;

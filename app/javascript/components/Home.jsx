import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!!!!</h1>
        <Link 
          to="/talks"
          role="button"
        >
          View talks
        </Link>
      </div>
    );
  }
}

export default Home;


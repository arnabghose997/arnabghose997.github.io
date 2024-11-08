import React from 'react';
import './UnderConstruction.css';

function UnderConstruction() {
  return (
    <div className="container">
      <h1 className="title">Site Under Construction</h1>
      <div className="loader">
        <div className="loader-inner"></div>
      </div>
    </div>
  );
}

export default UnderConstruction;

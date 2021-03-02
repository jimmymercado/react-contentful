import React from 'react';
import imgLoader from '../assets/images/black_loader.gif';

const Loader = () => {
  return (
    <div className="loadergif"><img src={imgLoader} alt=""/></div>
  )
}

export default Loader;
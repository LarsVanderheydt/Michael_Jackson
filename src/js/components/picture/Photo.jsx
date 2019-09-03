import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({url}) => {

  return (
    <img src={url} alt="" className='react_picture' />
  );
};

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;

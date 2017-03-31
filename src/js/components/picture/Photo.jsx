import React, {PropTypes} from 'react';

const Photo = ({url}) => {

  return (
    <img src={url}
     className='react_picture'
    />
  );
};

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;

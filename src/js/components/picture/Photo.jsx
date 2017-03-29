import React, {PropTypes} from 'react';

const Photo = ({url}) => {

  return (
    <img src={url} />
  );
};

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;

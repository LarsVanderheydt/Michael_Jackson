import React, {PropTypes} from 'react';

const Upload = ({handleUpload: getFeedback}) => {

  return (
    <input
      type='file'
      className='add react_margin'
      onChange={getFeedback}
    />
  );

};

Upload.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default Upload;

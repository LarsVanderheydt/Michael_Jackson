import React from 'react';
import PropTypes from 'prop-types';
const Upload = ({handleUpload: getFeedback}) => {

  return (
    <div className='image-upload'>
      <label htmlFor='file-input' className='image-upload-label'>
          <img src='../assets/img/upload.jpg' alt="" />
          <p>Upload jouw outfit</p>
      </label>

      <input type='file' id='file-input' className='add react_margin' onChange={getFeedback} />
    </div>
  );

};

Upload.propTypes = {
  handleUpload: PropTypes.func.isRequired
};

export default Upload;

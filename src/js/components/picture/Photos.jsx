import React, {PropTypes} from 'react';
import Photo from './Photo';

const Photos = ({photos}) => {
  return (
    <div className='react_pictures'>
      {photos.map(photo => {
        return <Photo key={photo.id} url={photo.name} />;
      })}
    </div>
  );
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;

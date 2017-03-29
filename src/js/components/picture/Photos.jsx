import React, {PropTypes} from 'react';
import Photo from './Photo';

const Photos = ({photos}) => {
  return (
    <ul>
      {photos.map(photo => {
        return <Photo key={photo.id} url={photo.name} />;
      })}
    </ul>
  );
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;

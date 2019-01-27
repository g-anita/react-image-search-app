import './PictureList.css';
import React from 'react';
import PictureItem  from './PictureItem';

const PictureList = props => {
  const pictures = props.pictures.map(picture => (
    <PictureItem key={picture.id} image={picture} />
  ));

  return (
    <div className='imageList'>
      {pictures}
    </div>
  )
};

export default PictureList;

import React from 'react';
import gallery from '../scss/Gallery.module.scss';
const Gallery = ({ photos }) => {
  return (
    <div className={gallery['galleryContainer']}>
      <div className={gallery.gallery}>
        {photos.map((photo, index) => (
          <figure
            className={`${gallery[`gallery__photo${index + 1}`]} ${
              gallery['gallery__photo']
            }`}
          >
            <img className={gallery.img} src={photo} alt="photo gallery" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

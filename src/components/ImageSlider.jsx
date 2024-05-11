import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ImageSlider = () => {
  const images = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/CarrotRoots.jpg/640px-CarrotRoots.jpg', alt: 'First Slide' },
    { src: 'https://magnum.kz:1337/uploads/2143527_26a0cb7397.jpg', alt: 'Second Slide' },
    { src: 'https://magnum.kz:1337/uploads/2110315_3612709cf3.jpg', alt: 'Third Slide' },
  ];

  return (
    <div className='container mt-3'>
      <Carousel interval={2000}> 
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100" 
              style={{ maxHeight: '500px', objectFit: 'cover' }}
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ImageSlide = ({ src, alt }) => (
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ maxHeight: '500px', objectFit: 'cover' }}
      src={src}
      alt={alt}
    />
  </Carousel.Item>
);

export default ImageSlide;

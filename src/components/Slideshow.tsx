import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pic1 from '../pic1.jpg';
import pic2 from '../pic2.jpg';
import pic3 from '../pic3.jpg';
import pic4 from '../pic4.jpg';
import pic5 from '../pic5.jpg';

// Images data
const images = [
  { url: pic1, alt: 'Image 1' },
  { url: pic2, alt: 'Image 2' },
  { url: pic3, alt: 'Image 3' },
  { url: pic4, alt: 'Image 4' },
  { url: pic5, alt: 'Image 5' }
];

const Slideshow: React.FC = () => {
  return (
    <div >
      <Carousel showArrows autoPlay infiniteLoop>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.alt}  />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;

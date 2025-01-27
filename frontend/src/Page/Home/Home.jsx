import React, { useState } from 'react';
import { Image, Button } from 'react-bootstrap'; // Import Button for navigation
import './Home.css';
import Home1 from '../../assets/Home1.jpg';
import Home2 from '../../assets/Home2.jpg';
import Home3 from '../../assets/Home3.jpg';

const images = [Home1, Home2, Home3]; // Array of images

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // Cycle back to the last image
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); // Cycle to the first image
  };

  return (
    <div className="card">
      <div className="image-container">
        {/* Overlay Text above the image */}
        <div className="overlay-text">
          {/* Bootstrap Card */}
          <div className="card_1" >
            <div className="card-body">
              <h3 className="card-subtitle mb-2 text-muted">
                In-demand skills.<br />Available on demand.</h3>
              <p className="card-text">
              Get the top skills that others are using to advance their careers.
              </p>
              
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button variant="light" onClick={goToPrevious} className="nav-button left">{"<"}</Button>
        <Image src={images[currentIndex]} fluid />
        <Button variant="light" onClick={goToNext} className="nav-button right">{">"}</Button>
      </div>
     <div className='Card_number'>
      <div className='C1'>
        <div className='number'>43</div>
        <div className='detail-text'>total courses</div>
      </div>
      <div className='C1'>
        <div className='number'>43</div>
        <div className='detail-text'>total Student</div>
      </div>
      <div className='C1'>
        <div className='number'>43</div>
        <div className='detail-text'>total teacher</div>
      </div>
     </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import './styles.css';

const Gallery = ({ images, onClose }) => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const years = [...new Set(images.flatMap((img) => Object.keys(img.years)))];
  const [selectedImages, setSelectedImages] = useState(images[0]?.years[years[0]] || []);
  const sortedYears = years.sort((a, b) => parseInt(a) - parseInt(b));
  const [fadeInKey, setFadeInKey] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleYearChange = (index) => {
    setSelectedYearIndex(index);
    setSelectedImages(images.find((img) => img.years[sortedYears[index]])?.years[sortedYears[index]] || []);
  };

  const goToPreviousYear = () => {
    if (selectedYearIndex > 0) {
      handleYearChange(selectedYearIndex - 1);
    }
  };

  const goToNextYear = () => {
    if (selectedYearIndex < sortedYears.length - 1) {
      handleYearChange(selectedYearIndex + 1);
    }
  };

  useEffect(() => {
    setFadeInKey((prevKey) => prevKey + 1);
  }, [selectedImages, selectedYearIndex]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNextYear();
    }

    if (touchEnd - touchStart > 75) {
      goToPreviousYear();
    }
  };

  return (
    <div className="gallery-overlay">
      <div className="gallery-container">
        <button className="close-button" onClick={onClose}>
          <FaTimes size={30} />
        </button>

        <div
          className="image-navigation"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Oculta los botones de navegación en móviles */}
          <button className="nav-button left" onClick={goToPreviousYear} disabled={selectedYearIndex === 0}>
            <FaArrowLeft size={30} />
          </button>

          <div className="image-display">
            {selectedImages.map((image, index) => (
              <div
                key={`${fadeInKey}-${index}`}
                className="image-item fade-in-active"
              >
                <img src={image.src} alt={`Imagen del año ${sortedYears[selectedYearIndex]}`} className="gallery-image" />
                {image.description && <p className="image-description">{image.description}</p>}
              </div>
            ))}
          </div>

          <button className="nav-button right" onClick={goToNextYear} disabled={selectedYearIndex === sortedYears.length - 1}>
            <FaArrowRight size={30} />
          </button>
        </div>

        <div className="year-selector">
          {sortedYears.map((year, index) => (
            <button
              key={year}
              onClick={() => handleYearChange(index)}
              className={selectedYearIndex === index ? 'active' : ''}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosCheckmarkCircle } from 'react-icons/io';

const CustomSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);
  const itemsToShow = isMobileView ? (window.innerWidth <= 768 ? 2 : 3) : 4;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setSelectedItem((prevSelectedItem) => prevSelectedItem - 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    setSelectedItem((prevSelectedItem) => prevSelectedItem + 1);
  };

  const handleItemClick = (index) => {
    setSelectedItem((prevSelectedItem) => (prevSelectedItem === index ? null : index));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate the item width and height for different items per row
  const itemWidth =items.length>1? `calc(${100 / itemsToShow}% - 20px)`:"";
  const itemHeight = '200px'; // Set the desired height here

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center">
        {items.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
          <div
            key={index}
            className={`p-4 border border-gray-300 rounded-md ${
              index === Math.floor(itemsToShow / 2) ? 'active' : ''
            } ${selectedItem === index ? 'selected-item' : ''}`}
            style={{
              width: itemWidth,
              height: itemHeight,
              boxSizing: 'border-box',
              margin: '10px',
              backgroundColor: 'white',
              cursor: 'pointer',
              position: 'relative',
              border: selectedItem === index && '1px solid black',
            }}
            onClick={() => handleItemClick(index)}
          >
            {selectedItem === index && (
              <div className="absolute top-0 right-0 text-black">
                <IoIosCheckmarkCircle size={24} />
              </div>
            )}
            {/* Replace 'item.image' with your image source */}
            <img src={item.image} alt={item.name} className="w-full h-[125px] object-contain  rounded-md" />
            <div className="text-sm font-normal mb-2 flex justify-center">{item.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {currentIndex > 0 && (
          <button onClick={handlePrev} className="text-xl text-gray-600 focus:outline-none">
            <IoIosArrowBack />
          </button>
        )}
        {currentIndex + itemsToShow < items.length && (
          <button onClick={handleNext} className="text-xl text-gray-600 focus:outline-none">
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomSlider;

import React from 'react';
import Edu1 from '../assets/Edu1.jpg';  
import Edu2 from '../assets/Edu2.jpg';  
import Edu3 from '../assets/Edu3.jpg';  // Add the new image
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: Edu1, title: 'August 10, 2024', description: "Just us, wrapped in warmth and laughter. Every moment with you feels like home. ❤️ "},   
    { Image: Edu2, title: 'January 12,2025', description: "A special day, a special love. Forever grateful for you. ❤️" },
    { Image: Edu3, title: 'May 18, 2024', description: "Your arms around me, my heart at peace. Nothing else matters when we’re together. 💕" } // Added third picture
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Pictures
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description }, index) => (
            <ImageCard
              key={index}
              imageUrl={Image}  
              altText={title}  
              title={title}
              description={description} 
            />
          ))}
        </Carousel>
        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;

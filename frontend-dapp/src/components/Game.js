import React from 'react';
import '../styles/Game.css';

function Game({ title, price, image, category, subcategory, rating, description, downloads }) {
  return (
    <div className="game">
      <img src={image} alt={title} className="game-image" />
      <h3 className="game-title">{title}</h3>
      <p className="game-category">{category} &gt; {subcategory}</p> 
      
      <p className="game-description">{description}</p> 
      <div className='rating-and-downloads-wrap'>
        
        <div className='game-downloads-wrap'>
          <p className="game-downloads">
          <span>
          {downloads.toLocaleString()}</span>
          Downloads
          </p> 
        </div>
        <div className='game-rating-wrap'>
          <p className="game-rating">
            <span>
            {rating}/5
            </span>
            Rating
          </p> 
        </div>

      </div>
       
       <div className='game-price-and-buy-button-wrap'>
        <p className="game-price">${price.toFixed(2)}</p>
        <button className='buy-button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
        </svg>

        </button>
       </div>
      
      
    </div>
  );
}

export default Game;


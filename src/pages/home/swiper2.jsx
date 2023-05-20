import React from 'react';
import './home.css';

export default function Swiper1() {
    return (
        <div className="swiper-container">
            <div className='business2'>Business by Industry</div>
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ backgroundColor: '#f9d7d9' }}>Slide 1</div>
                <div className="swiper-slide" style={{ backgroundColor: '#ffe2b8' }}>Slide 2</div>
                <div className="swiper-slide" style={{ backgroundColor: '#f5f5f5' }}>Slide 3</div>
                <div className="swiper-slide" style={{ backgroundColor: '#d7f9d9' }}>Slide 4</div>
            </div>
        </div>


    );
}
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../lotties/not-found.json';

const NotFoundAnimation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginBottom: '0'}}>
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
};

export default NotFoundAnimation;

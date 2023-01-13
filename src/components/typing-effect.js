import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Welcome to My Blog.', // Types 'One'
        1500, // Waits 1s
        'Love Coffee.', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Studying Programming.', // Types 'Three' without deleting 'Two'
        2000, // Waits 1s
        'Also, interesting in UI/UX, marketing.', // Types 'Three' without deleting 'Two'
        10000, // Waits 1s
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="h2"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.5em', marginBottom: '16px' }}
    />
  );
};

export default TypingEffect
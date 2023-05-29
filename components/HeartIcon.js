import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function HeartIcon() {
  const [filled, setFilled] = useState(false);

  const handleClick = () => {
    setFilled(!filled);
  };


  return (
    <div onClick={handleClick} className="cursor-pointer">
      {filled ? (
        <AiFillHeart size={32} className="text-red-500 heart filled" />
      ) : (
        <AiOutlineHeart size={32} className="text-red-500 heart" />
      )}
    </div>
  );
}

export default HeartIcon;

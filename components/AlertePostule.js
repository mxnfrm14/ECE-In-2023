import React, { useState } from 'react';

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [buttonClass, setButtonClass] = useState('btn btn-primary static');
  const [buttonText, setButtonText] = useState('Je Postule');

  const handleClick = () => {
    setButtonClass('btn btn-outline');
    setShowAlert(true);
    setButtonText('Applied');
    setTimeout(() => {
      setShowAlert(false);
      // setButtonClass('btn btn-primary static');
      // setButtonText('Je Postule');
    }, 2000);
  };
  return (
    <div className="static">
      <button onClick={handleClick} className={buttonClass}>{buttonText}</button>
      {showAlert && (
        <div className="alert-container alert alert-success absolute bottom-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Vous avez bien postuler pour ce job !</span>
        </div>
      )}
    </div>
  );
};

export default AlertComponent;



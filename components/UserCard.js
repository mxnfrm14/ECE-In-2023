import React from 'react';

const UserCard = ({ nom, prenom, pseudo, photo, description, role }) => {
  return (
    <div className="flex items-center p-4">
      <img className="w-10 h-10 rounded-full mr-4" src={photo} alt={pseudo} />
      <div>
        <h3 className="font-bold">{nom} {prenom}</h3>
        <p>{description}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default UserCard;

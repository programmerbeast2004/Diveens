import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const TeamMemberCard = ({ name, role, image, linkedin, twitter, speech, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4 w-80 h-96 mx-auto bg-white rounded-xl shadow-md space-y-4 transform transition duration-500 hover:scale-105 ${bgColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="text-center relative  space-y-2 h-full w-full">
      <img className="h-32 w-32 rounded-full mx-auto " src={image} alt={`${name}'s profile`} />
        <div className="space-y-0.5">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-700">{role}</p>
          <p className="text-gray-600">{speech}</p>
        </div>
        <div className={` absolute bottom-5 left-0 right-0  pt-5  ${isHovered ? 'block' : 'hidden'}`}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-400">
          <FontAwesomeIcon icon={faLinkedin} className='text-2xl' />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-400 ml-5">
          <FontAwesomeIcon icon={faTwitter} classname='w-10 h-10'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

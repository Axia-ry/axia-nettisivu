import React from 'react';

const TeamInfo = ({team}) => (
  <div className='flex-container team-info'>
    <div className='flex-item'>
      <h3>{team.Name}</h3>
      <div>{team.Coach}</div>
      <div>Harjoitusaika: {team.PracticeTime}</div>
      <div>Paikka: {team.PracticePlace}</div>
    </div>
    <div>
      <img className='team-image' alt='kuva' src={team.ImageLink}></img>
    </div>
  </div>
)

export default TeamInfo
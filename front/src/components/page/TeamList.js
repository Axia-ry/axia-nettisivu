import React from 'react';

import TeamInfo from './TeamInfo'

const TeamList = ({teams}) => (
  <div>
    <h2>Joukkueet</h2>
    <div className='team-list'>
      {teams.map(team => (<TeamInfo team={team} key={team.Name}/>))}
    </div>
  </div>
)

export default TeamList
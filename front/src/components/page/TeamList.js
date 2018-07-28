import React from 'react';

import TeamInfo from './TeamInfo'

const TeamList = ({teams}) => (
  <div>
    <h2>Joukkueet</h2>
    <ul>
      {teams.map(team => (<TeamInfo team={team} key={team.Name}/>))}
    </ul>
  </div>
)

export default TeamList
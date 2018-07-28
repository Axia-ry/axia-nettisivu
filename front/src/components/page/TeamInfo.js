import React from 'react';

const TeamInfo = ({team}) => (
  <li>
    Joukkue: {team.Name}, Valmentaja: {team.Coach}, Harjoitusaika: {team.PracticeTime}
  </li>
)

export default TeamInfo
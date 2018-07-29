const initialState = []

const teamReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT-TEAMS': return action.teams
    default: return state
  }
}

export const initTeams = teams => ({
  type: 'INIT-TEAMS',
  teams
})

export default teamReducer
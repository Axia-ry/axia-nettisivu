import TeamService from "../services/TeamService";
const service = new TeamService()

const initialState = []

const teamReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INIT-TEAMS': return action.teams
    default: return state
  }
}

export const initTeams = () => {
  return async dispatch => {
    const teams = await service.getAll()

    dispatch({
      type: 'INIT-TEAMS',
      teams
    })
  }
}

export default teamReducer
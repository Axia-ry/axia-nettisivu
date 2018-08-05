import AxiosService from "./AxiosServce";

export default class TeamService extends AxiosService {
  constructor() {
    super('/api/teams/')
  }
}
import AxiosService from "./axiosServce";

export default class TextService extends AxiosService {
  constructor() {
    super('/api/texts/')
  }
}
import AxiosService from "./AxiosServce";

export default class TextService extends AxiosService {
  constructor() {
    super('/api/texts/')
  }
}
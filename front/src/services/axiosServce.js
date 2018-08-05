import axios from 'axios'

export default class AxiosService {
  baseUrl

  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getOne(identifier) {
    return this.get(identifier)
  }

  getAll() {
    return this.get('')
  }

  get = (url, config = null) => {
    axios.get(this.baseUrl + url, config)
      .then(result => result.data)
  }

  post = (url, data, config = null) => {
    axios.post(this.baseUrl + url, data, config)
      .then(result => result.data)
  }

  put = (url, data, config = null) => {
    axios.put(this.baseUrl + url, data, config)
      .then(result => result.data)
  }

  delete = (url, config = null) => {
    axios.delete(this.baseUrl + url, config)
      .then(result => result.data)
  }
}
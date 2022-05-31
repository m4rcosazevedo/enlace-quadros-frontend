import axios from 'axios'
import envs from '../config/envs'

export class Service {
  axios

  constructor (baseUrl = envs.API_URL) {
    this.baseUrl = baseUrl
    this.axios = axios
    this.axios.interceptors.response.use(this.#handleInterceptResponseSuccess, this.#handleInterceptResponseError)
  }

  async request (data) {
    const {
      url,
      headers,
      body,
      params,
      method = 'get'
    } = data

    let axiosResponse

    try {
      axiosResponse = await this.axios.request({
        url: this.baseUrl + url,
        method,
        data: body,
        params,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers
        }
      })
    } catch (error) {
      axiosResponse = error.response
    }

    return {
      code: axiosResponse.status,
      body: axiosResponse.data
    }
  }

  #handleInterceptResponseSuccess (response) {
    return response
  }

  #handleInterceptResponseError (error) {
    return Promise.reject(error)
  }
}

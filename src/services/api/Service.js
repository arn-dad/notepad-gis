import { axios } from '@config/axios';
export class Service {
  get(url, options) {
    return axios({ method: 'GET', url, ...options })
  }

  post(url, options) {
    return axios({ method: 'POST', url, ...options })
  }

  delete(url, options) {
    return axios({ method: 'DELETE', url, ...options })
  }

  put(url, options) {
    return axios({ method: 'PUT', url, ...options })
  }

  patch(url, options) {
    return axios({ method: 'PATCH', url, ...options })
  }
}
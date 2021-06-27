import { Service } from '@services/api';
import { apis, keys } from '@config/apis';

export class NotepadAPI extends Service {
  base = apis.GISTS_URL;
  routes = {
    gists: '/gists',
  }

  constructor(api) {
    super(api)
    api.setAuthorizationToken(keys.GISTS_TOKEN)
  }

  getGistsList(options) {
    return this.get(this.routes.gists, { baseURL: this.base, ...options })
  }

  create(options) {
    return this.post(this.routes.gists, { baseURL: this.base, ...options })
  }

  update(id, options) {
    return this.patch(`${this.routes.gists}/${id}`, { baseURL: this.base, ...options })
  }

  getNotepadById(id) {
    return this.get(`${this.routes.gists}/${id}`, { baseURL: this.base })
  }

  deleteById(id) {
    return this.delete(`${this.routes.gists}/${id}`, { baseURL: this.base })
  }
  
}
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

  getGists(options) {
    return this.get(this.routes.gists, { baseURL: this.base, ...options })
  }

  deleteGists(id) {
    return this.delete(`${this.routes.gists}/${id}`, { baseURL: this.base })
  }
  
}
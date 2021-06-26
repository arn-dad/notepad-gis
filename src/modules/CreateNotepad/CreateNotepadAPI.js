import { Service } from '@services/api';
import { apis, keys } from '@config/apis';

export class CreateNotepadAPI extends Service {
  base = apis.GISTS_URL;
  routes = {
    gists: '/gists',
  }

  constructor(api) {
    super(api)
    api.setAuthorizationToken(keys.GISTS_TOKEN)
  }

  create(options) {
    return this.post(this.routes.gists, { baseURL: this.base, ...options })
  }

}
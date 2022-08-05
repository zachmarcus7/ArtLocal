import { default as auth } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain: auth.domain,
    clientId: auth.clientId,
    redirectUri: "http://localhost:4200/admin/dashboard"
  }
};



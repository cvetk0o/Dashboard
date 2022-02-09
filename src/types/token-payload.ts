import { Roles } from './roles';

export type TokenPayload = {
  exp: number;
  iat: number;
  email: string;
  id: string | number;
  role: Roles;
};

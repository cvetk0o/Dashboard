import React from 'react';

interface IAuthContext {
  logout: () => void;
}

const IAuthContextState: IAuthContext = {
  logout: () => null,
};

export const AuthContext = React.createContext<IAuthContext>(IAuthContextState);

export default AuthContext;

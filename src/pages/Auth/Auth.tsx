/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/forms/loginForm/loginForm';
import LoginImage from '../../assets/images/loginImage.jpg';
import { typesAuthForm } from './constants';
import SignupForm from '../../components/forms/signupForm/signupForm';
import ForgotPasswordForm from '../../components/forms/forgotPasswordForm/forgotPasswordForm';

import withNoAuth from '../../hoc/withNoAuth';
import { AuthContext } from '../../context/AuthContext';

const ChildPart = styled.div`
  width: 40%;
  height: 100%;
  float: left;
`;

const ImageWrapper = styled.img`
  height: 100vh;
`;

const FormWrapper = styled.div`
  background: #f6f7fc;
  height: 100vh;
  width: 60%;
  float: left;
`;

const Login: React.FunctionComponent = () => {
  const [showForm, setShowForm] = React.useState(typesAuthForm.LOGIN);

  const { logout } = React.useContext(AuthContext);

  /** `logout` user when access to the auth pages */
  React.useEffect(() => {
    logout();
  }, []);

  const returnForm = () => {
    if (showForm === typesAuthForm.LOGIN) return <LoginForm setShowForm={setShowForm} />;
    /* TODO: Include `Regsitration form` */
    if (showForm === typesAuthForm.REGISTRATION) return <SignupForm setShowForm={setShowForm} />;
    /* TODO: Include `Forgot password form` */
    if (showForm === typesAuthForm.FORGOT) return <ForgotPasswordForm setShowForm={setShowForm} />;
    return <LoginForm setShowForm={setShowForm} />;
  };

  return (
    <div>
      <ChildPart>
        <ImageWrapper src={LoginImage} alt="Login Image" width="100%" />
      </ChildPart>
      <FormWrapper>{returnForm()}</FormWrapper>
    </div>
  );
};

export default withNoAuth(Login);

/* eslint-disable no-console */
import { Form, Input, Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import { typesAuthForm } from '../../../pages/Auth/constants';
import { FormWrapper } from '../../../styles/forms/StyledFormWrapper';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import ILoginForm from './types/loginFormTypes';
import IOnfinish from './types/onFinishType';
import { getLoginPendingSelector } from '../../../store/auth/selectors';
import { loginUserRequest } from '../../../store/auth/actions';
import Colors from '../../../utils/colors/colors';

const InputPassword = Input.Password;

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  color: ${Colors.titleColor};
  margin-bottom: 80px;
`;

const TextWrapper = styled.p`
  text-align: center;
`;

const SignUpText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${Colors.linkTextColor};
  cursor: pointer;
  display: inline;
`;

const ForgotText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${Colors.linkTextColor};
  cursor: pointer;
  margin-top: 15px;
`;

const StyledInput = styled(Input)`
  height: 45px;
  font-size: 15px;
`;

const StyledInputPassword = styled(InputPassword)`
  height: 45px;
  font-size: 15px;
`;

const SubmitButtonWrapper = styled.div`
  padding-top: 20px;
`;

const LoginForm: React.FunctionComponent<ILoginForm> = ({ setShowForm }: ILoginForm) => {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const onFinish = (values: IOnfinish) => {
    const { email, password } = values;
    dispatch(loginUserRequest(email, password));
  };

  const isLoading = useSelector(getLoginPendingSelector);

  return (
    <FormWrapper>
      <TitleWrapper>
        <IntlMessages id="login.page.title" />
      </TitleWrapper>
      <Form
        name="basic"
        wrapperCol={{ span: 26 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label={<IntlMessages id="login.page.label.email" />}
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: formatMessage({ id: 'login.page.label.email.error' }),
            },
          ]}
        >
          <StyledInput />
        </Form.Item>
        <Form.Item
          label={<IntlMessages id="login.page.label.password" />}
          name="password"
          rules={[
            { required: true, message: formatMessage({ id: 'login.page.label.password.error' }) },
          ]}
        >
          <StyledInputPassword />
        </Form.Item>

        <Form.Item>
          <SubmitButtonWrapper>
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              style={{ width: '100%', height: '45px' }}
            >
              <IntlMessages id="login.form.button.login" />
            </Button>
          </SubmitButtonWrapper>
        </Form.Item>
        <TextWrapper>
          <IntlMessages id="login.page.registration" />
          <SignUpText onClick={() => setShowForm(typesAuthForm.REGISTRATION)}>
            <IntlMessages id="login.page.signUp" />
          </SignUpText>
          <ForgotText onClick={() => setShowForm(typesAuthForm.FORGOT)}>
            <IntlMessages id="login.page.forgotPassword" />
          </ForgotText>
        </TextWrapper>
      </Form>
    </FormWrapper>
  );
};

export default LoginForm;

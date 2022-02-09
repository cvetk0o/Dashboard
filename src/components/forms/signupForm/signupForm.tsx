/* eslint-disable no-console */
import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { RuleObject } from 'antd/lib/form';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import { FormWrapper } from '../../../styles/forms/StyledFormWrapper';
import ISignupForm from './types/signupFormTypes';
import IOnfinish from './types/onFinishType';
import { typesAuthForm } from '../../../pages/Auth/constants';
import { signupUserRequest } from '../../../store/auth/actions';
import { getLoginPendingSelector } from '../../../store/auth/selectors';

const InputPassword = Input.Password;

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  color: rgb(48, 57, 66);
  margin-bottom: 80px;
`;

const TextWrapper = styled.p`
  text-align: center;
`;

const SignUpText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: rgb(24, 144, 255);
  cursor: pointer;
  display: inline;
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

const SignupForm: React.FunctionComponent<ISignupForm> = ({ setShowForm }: ISignupForm) => {
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const onFinish = (values: IOnfinish) => {
    dispatch(signupUserRequest(values));
  };

  const isLoading = useSelector(getLoginPendingSelector);

  const validatePassword = (rule: RuleObject, value: string) => {
    if (!value || form.getFieldValue('password') === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(formatMessage({ id: 'error.passwordsDontMatch' })));
  };

  return (
    <FormWrapper>
      <TitleWrapper>
        <IntlMessages id="signup.page.title" />
      </TitleWrapper>
      <Form form={form} name="signUpForm" layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label={<IntlMessages id="signup.page.label.name" />}
          rules={[{ required: true, message: <IntlMessages id="signup.page.empty.name" /> }]}
        >
          <StyledInput />
        </Form.Item>
        <Form.Item
          name="email"
          label={<IntlMessages id="signup.page.label.email" />}
          rules={[
            { required: true, message: <IntlMessages id="signup.page.empty.email" /> },
            { type: 'email', message: <IntlMessages id="signup.page.error.email" /> },
          ]}
        >
          <StyledInput />
        </Form.Item>
        <Form.Item
          name="password"
          label={<IntlMessages id="signup.page.label.password" />}
          rules={[{ required: true, message: <IntlMessages id="signup.page.empty.password" /> }]}
        >
          <StyledInputPassword />
        </Form.Item>
        <Form.Item
          name="passwordConfirm"
          label={<IntlMessages id="signup.page.label.repeatPassword" />}
          rules={[
            { required: true, message: <IntlMessages id="signup.page.empty.repeatPassword" /> },
            { validator: validatePassword },
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
              <IntlMessages id="signup.page.button" />
            </Button>
          </SubmitButtonWrapper>
        </Form.Item>
        <TextWrapper>
          <IntlMessages id="signup.page.login.message" />
          <SignUpText onClick={() => setShowForm(typesAuthForm.LOGIN)}>
            <IntlMessages id="signup.page.login" />
          </SignUpText>
        </TextWrapper>
      </Form>
    </FormWrapper>
  );
};
export default SignupForm;

/* eslint-disable no-console */
import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import { FormWrapper } from '../../../styles/forms/StyledFormWrapper';
import { typesAuthForm } from '../../../pages/Auth/constants';
import IForgotPasswordForm from './types/forgotPasswordFormTypes';
import IOnFinish from './types/onFinishType';
import Colors from '../../../utils/colors/colors';
import { forgotPasswordRequest } from '../../../store/auth/actions';

const TittleWrapper = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  color: ${Colors.titleColor};
  margin-bottom: 20px;
`;
const TextWrapper = styled.p`
  text-align: center;
  margin-top: 40px;
`;

const InstructionWrapper = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  color: ${Colors.instructionColor};
`;

const StyledInput = styled(Input)`
  height: 45px;
  font-size: 15px;
`;

const SubmitButtonWrapper = styled.div`
  padding-top: 20px;
`;

const LoginText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${Colors.linkTextColor};
  cursor: pointer;
  display: inline;
`;

const ForgotPasswordForm: React.FunctionComponent<IForgotPasswordForm> = ({
  setShowForm,
}: IForgotPasswordForm) => {
  const dispatch = useDispatch();
  const onFinish = (values: IOnFinish) => {
    dispatch(forgotPasswordRequest(values.email));
  };

  return (
    <FormWrapper>
      <TittleWrapper>
        <IntlMessages id="forgotPassword.page.title" />
      </TittleWrapper>
      <InstructionWrapper>
        <IntlMessages id="forgotPassword.page.instruction" />
      </InstructionWrapper>
      <Form
        name="forgotPasswordForm"
        wrapperCol={{ span: 26 }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label={<IntlMessages id="forgotPassword.page.email" />}
          rules={[
            { required: true, message: <IntlMessages id="forgotPassword.page.empty.email" /> },
            {
              type: 'email',
              message: <IntlMessages id="forgotPassword.page.error.email" />,
            },
          ]}
        >
          <StyledInput />
        </Form.Item>
        <Form.Item>
          <SubmitButtonWrapper>
            <Button type="primary" htmlType="submit" style={{ width: '100%', height: '45px' }}>
              <IntlMessages id="forgotPassword.page.send" />
            </Button>
          </SubmitButtonWrapper>
        </Form.Item>
        <TextWrapper>
          <IntlMessages id="forgotPassword.page.goBack" />
          <LoginText onClick={() => setShowForm(typesAuthForm.LOGIN)}>
            <IntlMessages id="signup.page.login" />
          </LoginText>
        </TextWrapper>
      </Form>
    </FormWrapper>
  );
};

export default ForgotPasswordForm;

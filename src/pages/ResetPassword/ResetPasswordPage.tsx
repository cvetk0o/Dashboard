/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { RuleObject } from 'antd/lib/form';
import { useIntl } from 'react-intl';
import IntlMessages from '../../utils/intlMessages/intlMessages';
import IOnfinish from './types/onFinishType';
import Colors from '../../utils/colors/colors';

import withNoCredentials from '../../hoc/withNoCredentials';

const InputPassword = Input.Password;

export const FormWrapper = styled.div`
  padding: 1em;
  position: absolute;
  width: 36%;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 60px 60px 20px 60px;

  background: white;
  min-height: 400px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  color: ${Colors.titleColor};
  margin-bottom: 20px;
`;

const InstructionWrapper = styled.div`
  margin-bottom: 40px;
  font-size: 16px;
  color: ${Colors.instructionColor};
`;

const StyledInputPassword = styled(InputPassword)`
  height: 45px;
  font-size: 15px;
`;

const SubmitButtonWrapper = styled.div`
  padding-top: 20px;
`;

const ResetPasswordPage: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();
  const validatePassword = (rule: RuleObject, value: string) => {
    if (!value || form.getFieldValue('password') === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(formatMessage({ id: 'error.passwordsDontMatch' })));
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onFinish = (value: IOnfinish) => {};

  return (
    <FormWrapper>
      <TitleWrapper>
        <IntlMessages id="resetPassword.page.title" />
      </TitleWrapper>
      <InstructionWrapper>
        <IntlMessages id="resetPassword.page.instruction" />
      </InstructionWrapper>
      <Form
        form={form}
        name="resetPasswordForm"
        wrapperCol={{ span: 26 }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="password"
          label={<IntlMessages id="signup.page.label.password" />}
          rules={[
            { required: true, message: <IntlMessages id="resetPassword.page.empty.password" /> },
          ]}
        >
          <StyledInputPassword />
        </Form.Item>
        <Form.Item
          name="passwordConfirm"
          label={<IntlMessages id="signup.page.label.repeatPassword" />}
          rules={[
            {
              required: true,
              message: <IntlMessages id="resetPassword.page.empty.repeatPassword" />,
            },
            { validator: validatePassword },
          ]}
        >
          <StyledInputPassword />
        </Form.Item>
        <Form.Item>
          <SubmitButtonWrapper>
            <Button type="primary" htmlType="submit" style={{ width: '100%', height: '45px' }}>
              <IntlMessages id="forgotPassword.page.send" />
            </Button>
          </SubmitButtonWrapper>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default withNoCredentials(ResetPasswordPage);

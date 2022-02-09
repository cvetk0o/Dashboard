import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: relative;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 60px 60px 20px 60px;

  background: white;
  min-height: 400px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export default FormWrapper;

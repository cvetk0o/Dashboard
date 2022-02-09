import React from 'react';
import styled from 'styled-components';
import IntlMessages from '../utils/intlMessages/intlMessages';

const PageWrapper = styled.div`
  font-family: 'Ropa Sans', sans-serif;
  height: 100vh;
  background-color: #f0ca00;
  background-color: #f3661c;
  text-align: center;
  color: #fff;
  overflow: hidden;
`;

const TitleWrapper = styled.h1`
  display: block;
  font-size: 122px;
  margin-top: 150px;
  color: #f3661c;
  text-shadow: 0px 0px 5px #fff;
`;

const HeadingWrapper = styled.div`
  margin: 100px auto 100px;
  width: 250px;
  border: 5px solid #fff;
  font-size: 126px;
  line-height: 126px;
  border-radius: 30px;
  text-shadow: 6px 6px 5px #000;
`;

const TextWrapper = styled.p`
  font-size: 36px;
`;

const ErrorPage: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <TitleWrapper>Oops!</TitleWrapper>
      <HeadingWrapper>403</HeadingWrapper>
      <TextWrapper>
        <IntlMessages id="forbidden.page.text" />
      </TextWrapper>
    </PageWrapper>
  );
};

export default ErrorPage;

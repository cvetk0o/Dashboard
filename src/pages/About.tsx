import React from 'react';
import { Link } from 'react-router-dom';

import withAuth from '../hoc/withAuth';

const AboutPage: React.FunctionComponent = () => {
  return (
    <div>
      <p>About Page!</p>
      <Link to="/">Go to the home page!</Link>
    </div>
  );
};

export default withAuth(AboutPage);

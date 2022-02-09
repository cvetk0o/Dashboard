import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InjectMessage = (props: any) => <FormattedMessage {...props} />;

export default injectIntl(InjectMessage);

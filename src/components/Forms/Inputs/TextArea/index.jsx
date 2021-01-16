import React from 'react';
import classNames from 'classnames';
import { TextArea } from './style';

export default (props) => (
  <TextArea
    className={classNames(
      'text-black-400',
      'body-medium',
      'weight-regular'
    )}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

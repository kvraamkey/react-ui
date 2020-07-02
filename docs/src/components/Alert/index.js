import React from 'react';
import README from './README.md';
import Component from '..';
import { Alert } from '@kvraamkey/react-ui';
const types = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
export default () => {
  return (
    <Component readme={README}>
      <br />
      <Alert text={<strong>Default</strong>} />
      {types.map((type) => (
        <Alert type={type}>
          <strong>
            {type.charAt(0).toLocaleUpperCase()}
            {type.slice(1)}
          </strong>
        </Alert>
      ))}

      <Alert type={'warning'} isDismissible>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </Alert>
    </Component>
  );
};

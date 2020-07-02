import React from 'react';
import README from './README.md';
import Component from '../';
import { Button } from '@kvraamkey/react-ui';

export default () => {
  return (
    <Component readme={README}>
      <h4>Button Variations</h4>
      <Button.List>
        <Button name='Default' className='custom' />
        <Button name='Primary' variant={'primary'} />
        <Button name='Secondary' variant={'secondary'} />
        <Button name='Success' variant={'success'} />
        <Button name='Info' variant={'info'} />
        <Button name='Warning' variant={'warning'} />
        <Button name='Danger' variant={'danger'} disabled />
        <Button name='Dark' variant={'dark'} />
        <Button name='link button' link />
      </Button.List>
      <h4>Outline Buttons</h4>
    </Component>
  );
};

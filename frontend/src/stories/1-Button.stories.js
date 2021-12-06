import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';
import Widget1 from '../Components/API/Widget1';
import Widget2 from '../Components/API/Widget2';
import Widget3 from '../Components/API/Widget3';
import Widget5 from '../Components/API/Widget5';
import Widget6 from '../Components/API/Widget6';
import WidgetMap from '../Components/Map/WidgetMap';
export default {
  title: 'Button',
};
storiesOf('Widget1', module)
  .add('with primary', () => <Widget1

  />)

storiesOf('Widget2', module)
  .add('with primary', () => <Widget2
  />)

storiesOf('Widget3', module)
  .add('with primary', () => <Widget3
  />)
storiesOf('Widget5', module)
  .add('with primary', () => <Widget5
  />)
storiesOf('WidgetMap', module)
  .add('with primary', () => <WidgetMap
  />)
storiesOf('Widget6', module)
  .add('with primary', () => <Widget6
  />)


export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
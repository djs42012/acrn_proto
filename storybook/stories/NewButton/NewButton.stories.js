import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from '../CenterView';
import NewButton from '../../../components/NewButton'

storiesOf('NewButton', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('New Button', () => (
   <NewButton onPress={action('clicked-text')}/>
  ));
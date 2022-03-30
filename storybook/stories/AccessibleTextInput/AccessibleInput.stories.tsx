import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import CenterView from '../CenterView';
import AccessibleTextInput from '../../../components/AccessibleTextInput'; 
import NewButton from '../../../components/NewButton'; 
import LoginContainer from '../../../containers/LoginContainer';

storiesOf('AccessibleTextInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Accessible Text input', () => (
    <LoginContainer/>
  ));
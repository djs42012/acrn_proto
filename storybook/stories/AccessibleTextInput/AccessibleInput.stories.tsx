import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import CenterView from '../CenterView';
import AccessibleTextInput from '../../../components/AccessibleTextInput'; 
import NewButton from '../../../components/NewButton';

storiesOf('AccessibleTextInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Accessible Text input', () => (
      <>
        <AccessibleTextInput/>
 
        <NewButton accessibilityElementsHidden = {true} importantForAccessibility = 'no-hide-descendants'/>
      </>
        
  ));
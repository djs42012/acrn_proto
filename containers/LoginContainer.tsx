import React, {useContext} from 'react';
import { View } from 'react-native';
import AccessibleTextInput from '../components/AccessibleTextInput';
import NewButton from '../components/NewButton';

const LoginContainer = () => (
     <View>
        <AccessibleTextInput/>
        <NewButton accessibilityElementsHidden = {true} importantForAccessibility = 'no-hide-descendants'/>
    </View>
);

export default LoginContainer;
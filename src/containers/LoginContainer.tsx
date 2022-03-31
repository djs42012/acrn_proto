import React, {useState} from 'react';
import { View } from 'react-native';
import AccessibleTextInput from '../components/AccessibleTextInput';
import NewButton from '../components/NewButton';

const LoginContainer = () => {
    const[credentialsAreSubmittable, setCredentialsAreSubmittable] = useState(false);
    return (
              <View>
        <AccessibleTextInput     
            setCredentialsAreSubmittable = {(bool: boolean):void => {setCredentialsAreSubmittable(bool)}}
        />
        <NewButton 
            accessibilityElementsHidden = {credentialsAreSubmittable} 
            importantForAccessibility = {credentialsAreSubmittable ? 'yes' : 'no-hide-descendants'}
        />
    </View>
    )
};

export default LoginContainer;
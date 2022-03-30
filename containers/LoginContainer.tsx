import React, {useState} from 'react';
import { View } from 'react-native';
import AccessibleTextInput from '../components/AccessibleTextInput';
import NewButton from '../components/NewButton';
// ! Need to split state value across components
//   const [value, setValue] = useState('')
//   const [passwordValue, setPasswordValue] = useState('')

//   const [editable, setEditable] = useState(true)
//   const [isFocused, setFocus] = useState(false)
//   const [passwordFocus, setPasswordFocus] = useState(false)

const LoginContainer = () => (
     <View>
        <AccessibleTextInput/>
        {/* unhide accessibility elements after text inputs field a valid user/pass combo */}
        <NewButton accessibilityElementsHidden = {true} importantForAccessibility = 'no-hide-descendants'/>
    </View>
);

export default LoginContainer;
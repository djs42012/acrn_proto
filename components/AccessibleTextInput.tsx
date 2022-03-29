import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import NewButton from './NewButton';

const editableTextInputColor = '#494949';
const disabledTextInputColor = '#BBB';
const focusedInputColor = 'green'
const minimumTouchableSize = 48;
const AccessibleTextInput = () => {
  const [value, setValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const [editable, setEditable] = useState(true)
  const [isFocused, setFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const textInputColor = editable ? editableTextInputColor : disabledTextInputColor;
  const styles = StyleSheet.create({
    label: { color: (isFocused || passwordFocus) ? focusedInputColor : textInputColor },
    input: {
      backgroundColor: '#FFF',
      padding: 8,
      height: minimumTouchableSize,
      width: '100%',
      borderColor: isFocused ? focusedInputColor : textInputColor,
      borderWidth: isFocused ? 2 : 1,
      borderRadius: 4,
      marginTop: 8 
    }
});
const styles2 = StyleSheet.create({
    input: {
        borderColor: (passwordFocus ? focusedInputColor : textInputColor),
        borderWidth: passwordFocus ? 2 : 1,

    }
});
  const accessibilityState = { disabled: !editable }
  return (
    <View   
      accessible
      accessibilityLabel="Enter username and password"
      accessibilityState={accessibilityState}>
      <Text style={styles.label}>Login</Text>
      <TextInput
         style = {styles.input}
         placeholder="Username"
         placeholderTextColor={textInputColor}
         value={value}
         onChangeText={(text) => setValue(text)}
         editable={editable}
         onFocus={() => setFocus(true)}
         onBlur={() => setFocus(false)}
      />
        <TextInput
         style = {[styles.input, styles2.input]}
         placeholder="Password"
         placeholderTextColor={textInputColor}
         value={passwordValue}
         onChangeText={(text) => setPasswordValue(text)}
         editable={editable}
         onFocus={() => setPasswordFocus(true)
        }
         onBlur={() => setPasswordFocus(false)}

      />
    </View>
  )
};
export default AccessibleTextInput;
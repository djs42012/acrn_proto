import { PressableProps, Button, NativeSyntheticEvent, NativeTouchEvent, Pressable, View, StatusBar,TextInput ,TextInputComponent, Text, AccessibilityRole, GestureResponderEvent} from "react-native";
import React from "react";

const NewButton = (props: PressableProps) => {
  return(
   <Pressable {...props}>
    <Text > NewButton (Pressable Text in View) </Text>
  </Pressable>
  )
};
 
export default NewButton;

import { PressableProps, Button, NativeSyntheticEvent, NativeTouchEvent, Pressable, View, StatusBar,TextInput ,TextInputComponent, Text, AccessibilityRole, GestureResponderEvent} from "react-native";
import React from "react";
{/* <View style={styles.container}>
<Pressable
  onPress={() => {
    setTimesPressed((current) => current + 1);
  }}
  style={({ pressed }) => [
    {
      backgroundColor: pressed
        ? 'rgb(210, 230, 255)'
        : 'white'
    },
    styles.wrapperCustom
  ]}>
  {({ pressed }) => (
    <Text style={styles.text}>
      {pressed ? 'Pressed!' : 'Press Me'}
    </Text>
  )}
</Pressable>
<View style={styles.logBox}> */}
// Number[]
// Array<Number>
// type AProps = React.ForwardRefExoticComponent<PressableProps & React.RefAttributes<View>> | {
  interface Props extends PressableProps {
  onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  banana?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  /**iOS*/
  accessibilityIgnoresInvertColors?: boolean; //iOS Only. Light sensitiviity.
  /**Android*/
  accessibilityLiveRegion?: "none" | "polite" | "assertive";
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: {
    //Describes the current state of a component to the user of an assistive technology.
    disabled?: boolean; //Indicates whether the element is disabled or not.
    selected?: boolean; //Indicates whether a selectable element is currently selected or not.
    checked?: boolean | "mixed"; //Indicates the state of a checkable element. This field can either take a boolean or the "mixed" string to represent mixed checkboxes.
    busy?: boolean; //Indicates whether an element is currently busy or not.
    expanded?: boolean; //Indicates whether an expandable element is currently expanded or collapsed.
  };
  /**iOS and Android*/
  accessibilityValue?: {
    //Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).
    min?: number; //required if now is set. The minimum value of this component's range.
    max?: number; //required if now is set. The maximum value of this component's range.
    now?: number; //The current value of this component's range.
    text?: string; //A textual description of this component's value. Will override min, now, and max if set.
  };
  /**iOS*/
  accessibilityViewIsModal?: boolean;
  /**iOS*/
  accessibilityElementsHidden?: boolean;
  /**Android*/
  importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants";
  /**iOS*/
  onAccessibilityEscape?: () => void;
  /**iOS*/
  onAccessibilityTap?: () => void;
  /**iOS*/
  onMagicTap?: () => void;
}

export default function NewButton(props: Props) {
  
  //return <Pressable column={'test'} ></Pressable>;
  return <Pressable {...props}>
    <Text > Custom Component </Text>
  </Pressable>;
}


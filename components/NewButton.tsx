import { PressableProps, Button, NativeSyntheticEvent, NativeTouchEvent, Pressable, View, StatusBar,TextInput ,TextInputComponent} from "react-native";
import React from "react";



type AProps = React.ForwardRefExoticComponent<PressableProps & React.RefAttributes<View>> | {
  // onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  banana?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  /**iOS*/
  accessibilityIgnoresInvertColors?: boolean; //iOS Only. Light sensitiviity.
  /**Android*/
  accessibilityLiveRegion?: "none" | "polite" | "assertive";
  accessibilityRole?: string;
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
  accessibilityViewIsModal?: Boolean;
  /**iOS*/
  accessibilityElementsHidden?: Boolean;
  /**Android*/
  importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants";
  /**iOS*/
  onAccessibilityEscape?: () => void;
  /**iOS*/
  onAccessibilityTap?: () => void;
  /**iOS*/
  onMagicTap?: () => void;
}

export default function NewButton(props: AProps) {
  
  return <Pressable />;
  
}


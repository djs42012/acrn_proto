import React, { useState } from 'react';
import { View, ViewProps } from 'react-native';
import ExternalUrl from '../components/ExternalUrl';
// TODO: Create InternalLink Component

type url = [a: string, b: string];

// * example for url type
// const urls: url[] = [['a','b'], ['d', 'd']];
// const url2: Array<url> = [['a','b'], ['c', 'd']];

interface Props extends ViewProps {
  externalUrls: url[];
}

function NavigationContainer(props: Props) {
  // * Maybe use hooks
  const externalUrls: JSX.Element[] = [];
  for (let i = 0; i < props.externalUrls.length; i++) {
    externalUrls.push(
      <ExternalUrl
        title={props.externalUrls[i][0]}
        url={props.externalUrls[i][1]}
        accessibilityRole="menuitem"
      />
    );
  }
  return (
    // ? Consider using ScrollView
    <View accessibilityRole="menu">{externalUrls}</View>
  );
}

export default NavigationContainer;

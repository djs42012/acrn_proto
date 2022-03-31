import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
  title: string;
  url: string;
}

function ExternalUrl(props: Props) {
  const { url, title } = props;
  return (
    <Pressable accessibilityRole="link">
      <Text> {title} </Text>
      // TODO: Redirect to {url} somehow
    </Pressable>
  );
}

export default ExternalUrl;

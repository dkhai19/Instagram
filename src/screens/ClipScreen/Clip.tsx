import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@constants/NavigationType.ts';

type ClipScreenProps = BottomTabScreenProps<BottomTabParamList, 'Clip'>;

const Clip: React.FC<ClipScreenProps> = () => {
  return (
    <View>
      <Text>Clip</Text>
    </View>
  );
};

export default Clip;

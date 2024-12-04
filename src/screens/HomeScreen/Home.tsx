import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabParamList } from '@constants/NavigationType.ts';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type HomeScreenProps = BottomTabScreenProps<BottomTabParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default Home;

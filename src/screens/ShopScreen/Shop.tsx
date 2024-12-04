import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@constants/NavigationType.ts';

type ShopScreenProps = BottomTabScreenProps<BottomTabParamList, 'Shop'>;

const Shop: React.FC<ShopScreenProps> = () => {
  return (
    <View>
      <Text>Shop</Text>
    </View>
  );
};
export default Shop;

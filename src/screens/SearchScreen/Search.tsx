import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@constants/NavigationType.ts';

type SearchScreenProps = BottomTabScreenProps<BottomTabParamList, 'Search'>;

const Search: React.FC<SearchScreenProps> = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;

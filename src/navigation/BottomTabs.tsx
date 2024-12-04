import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@constants/NavigationType.ts';
import Home from '@screens/HomeScreen/Home.tsx';
import Search from '@screens/SearchScreen/Search.tsx';
import Clip from '@screens/ClipScreen/Clip.tsx';
import Shop from '@screens/ShopScreen/Shop.tsx';
import { Image, StyleSheet } from 'react-native';
import { IMAGES } from '../utility/Image.ts';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: any;
          switch (route.name) {
            case 'Home':
              iconName = focused
                ? IMAGES.bottomTabs.home
                : IMAGES.bottomTabs.home;
              break;
            case 'Search':
              iconName = focused
                ? IMAGES.bottomTabs.search
                : IMAGES.bottomTabs.search;
              break;
            case 'Clip':
              iconName = focused
                ? IMAGES.bottomTabs.clip
                : IMAGES.bottomTabs.clip;
              break;
            case 'Shop':
              iconName = focused
                ? IMAGES.bottomTabs.shop
                : IMAGES.bottomTabs.shop;
              break;
            default:
              iconName = 'circle';
          }
          return <Image source={iconName} style={styles.icon} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false
      })}
    >
      <BottomTab.Screen name={'Home'} component={Home} />
      <BottomTab.Screen name={'Search'} component={Search} />
      <BottomTab.Screen name={'Clip'} component={Clip} />
      <BottomTab.Screen name={'Shop'} component={Shop} />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

export default BottomNavigation;

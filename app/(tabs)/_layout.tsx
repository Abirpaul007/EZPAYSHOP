import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Log-In',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
      name="chatbot"
      options={{
        title: 'Product-Chat',
        tabBarIcon: ({ color }) => <Entypo name="chat" size={24} color={color} />,
      }}
    />
    <Tabs.Screen
      name="Add_product"
      options={{
        title: 'Product-Chat',
        tabBarIcon: ({ color }) => <AntDesign name="shoppingcart"  size={26} color={color} />,
      }}
    />
    <Tabs.Screen
      name="welcome"
      options={{
        title: 'welcome',
        tabBarIcon: ({ color }) => <FontAwesome name="handshake-o" size={24} color={color} />,
      }}
    />
    <Tabs.Screen
      name="RecipeScreen"
      options={{
        title: 'RecipeScreen',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food-turkey" size={30} color={color} />,
      }}
    />
    <Tabs.Screen
      name="Suggetions"
      options={{
        title: 'Suggetion',
        tabBarIcon: ({ color }) => <AntDesign name="gift" size={24}  color={color} />,
      }}
    />
    </Tabs>
  );
}
//<MaterialCommunityIcons name="food-turkey" size={24} color="black" />
{/*<Tabs.Screen
      name="Suggetion"
      options={{
        title: 'Suggetion',
        tabBarIcon: ({ color }) => <AntDesign name="gift" size={24}  color={color} />,
      }}
    />
    </Tabs>*/}
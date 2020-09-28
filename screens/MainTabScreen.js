import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './HomeScreens';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor : "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={30}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor : "red",
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={30}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor : "#d02860",
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={30}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor : "#694fad",
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={30}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
)

export default MainTabScreen

export const HomeStackScreen= ({ navigation })=>(
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor : "#009387"
    },
    headerTintColor : "#fff",
    headerTitleStyle: {
      fontWeight : "bold"
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
     title:"Overview" ,
     headerLeft : ()=>(
      <Icon.Button name="menu-outline" size={30} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}></Icon.Button>
     )
    }} />
  </HomeStack.Navigator>
)
export const DetailStackScreen = ({navigation}) =>(
  <DetailStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor : "red"
    },
    headerTintColor : "#fff",
    headerTitleStyle: {
      fontWeight : "bold"
    }
  }}>

    <DetailStack.Screen name="Details" component={DetailsScreen} options={{
      title : "Details",
      headerLeft : ()=>(
        <Icon.Button name="menu-outline" size={30} backgroundColor="red" onPress={()=>navigation.openDrawer()}></Icon.Button>
       )
    }} />
  </DetailStack.Navigator>
)
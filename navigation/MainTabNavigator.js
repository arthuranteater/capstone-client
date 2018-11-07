import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen'
import { Icon } from 'react-native-elements';



const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <Icon
            name='dog'
            type='material-community'
            color='red'
        />
    ),
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'red',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#000080',
            color: 'red'
        }
    },

};

const MapStack = createStackNavigator({
    Map: MapScreen,
});

MapStack.navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ focused }) => (
        <Icon
            name='paw'
            type='material-community'
            color='red'
        />
    ),
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'red',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#000080',
            color: 'red'
        }
    },
};


export default createBottomTabNavigator({
    HomeStack,
    MapStack,
});
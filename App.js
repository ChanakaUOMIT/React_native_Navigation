/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Login from './src/components/screens/Login';
import Home from './src/components/screens/Home';
import Settings from './src/components/screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation';

 

export default class App extends Component{
  render() {
    return (
        <MaterialTab />
      
    );
  }
}

// const AppStackNavigator = createStackNavigator({
//   Login:{
//     screen :Login
//   },
//   Home:{
//     screen: Home
//   },
// });

const MaterialTab=createMaterialTopTabNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      tabBarLabel:'Home',
        tabBarIcon:({ tintColor }) =>(
          <Icon name="ios-home"  size={24} color={tintColor} />
        )      
    }
  },
  Settings:{
    screen:Settings,
    navigationOptions:{
      tabBarLabel:'Settings',
      tabBarIcon:({ tintColor })=>(
        <Icon name='md-settings' size={24} color={tintColor} />
      )
    }
  },

  // Profile:{
  //   screen:Settings,
  //   navigationOptions:{
  //     tabBarLabel:'Profile',
  //     tabBarIcon:({ tintColor })=>(
  //       <Icon name='md-settings' size={24} color={tintColor} />
  //     )
  //   }
  // },

  // Feed:{
  //   screen:Settings,
  //   navigationOptions:{
  //     tabBarLabel:'Feed',
  //     tabBarIcon:({ tintColor })=>(
  //       <Icon name='md-settings' size={24} color={tintColor} />
  //     )
  //   }
  // }
},{
  initialRouteName:'Home',
  // order:['Settings', 'Home'],
  // activeTintColor:'orange',
  tabBarPosition:'bottom',
  swipeEnabled:true,
  animationEnabled:true,
  shifting:true,
  tabBarOptions:{
    showIcon:true,
    activeTintColor:'orange',
    inactiveTintColor:'grey',
    style:{
      backgroundColor:'#f2f2f2',
      borderTopWidth:0.5,
      borderTopColor:'grey'
    },
    indicatorStyle:{
      height:0
    }
  }
})

/*
const TabNav = createBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({ tintColor }) => (
        <Icon name="ios-home" size={24} color={tintColor}/>
      )
    }
  },
  Settings:{
    screen:Settings,
    navigationOptions:{
      tabBarLabel:'Settings',
      tabBarIcon:({ tintColor }) =>(
        <Icon name="md-settings"  size={24} color={tintColor} />
      )
    }
  }
},{
  initialRouteName:'Settings',
  order:['Settings','Home'],  
  activeTintColor:'orange',
  tabBarOptions:{
    // showIcon:true,
    tabBarVisible: true,
  },
  tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColor:'grey',    
  },
  
}) */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

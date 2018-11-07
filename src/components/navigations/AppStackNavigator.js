import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AppStackNavigator extends Component {
  render() {
    return (
      <View>

      </View>
    )
  }
}

export default AppStackNavigator;

const AppStackNavigator = createStackNavigator({
    Login:{
      screen :Login
    },
    Home:{
      screen: Home
    },
  })

  import React from 'react'
  
  export default function AppStackNavigator() {
    return (
      <div>
        
      </div>
    )
  }
  

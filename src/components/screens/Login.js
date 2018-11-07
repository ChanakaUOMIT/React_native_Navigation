import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

class Login extends Component {
    static navigationOptions={
        header:null
    }

    PressHomeHandler=()=>{
        // alert('clicked')
        this.props.navigation.navigate('Home');
    }
  render() {
    return (
      <View style={styles.container}>
          <Text>Login Screen</Text>
          <Button 
            title="Go to Home"
            onPress={this.PressHomeHandler}
          />
      </View>
    )
  }
}

export default  Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
})

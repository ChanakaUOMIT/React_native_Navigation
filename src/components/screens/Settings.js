import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

class Settings extends Component {
    // static navigationOptions={
    //     title:"Se"
    // }

    PressLoginHandler=()=>{
        this.props.navigation.goBack()
    }

  render() {
    return (
      <View style={styles.container}>
          <Text>Settings Screen</Text>
          {/* <Button 
            title="Go to Login"
            onPress={this.PressLoginHandler}
          /> */}
      </View>
    )
  }
}

export default  Settings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
})

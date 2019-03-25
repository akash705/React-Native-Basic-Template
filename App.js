/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor loaded');
  }
  componentDidMount(){
    console.log('props here',this.props.counter);
  }
  clicked=(ev)=>{
    // alert('hello ');
    console.log('my chances are high');
    this.props.dispatcher(2)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={this.clicked}>
            <Text>
             Counter { this.props.counter }
            </Text>
        </TouchableOpacity>  
      </View>
      
    );
  }
}

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

var matchToProps=(state)=>{
  return {
    counter:state.counter
  }
}
var dispatch = (dispatch)=>{
  return {
    dispatcher:(data)=>dispatch({type:'INC',value:data})
  }
}

// export default App
export default connect( matchToProps,dispatch )(App);

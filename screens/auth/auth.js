import React, {Component} from 'react';
import {Text,View , Button} from 'react-native'
import { Navigation } from 'react-native-navigation';
import {connect} from 'react-redux';


class Auth extends Component{
    login=()=>{
        this.props.dispatcher(100);
        Navigation.setRoot({
            root:{
                component:{
                    name:'app.log'
                }
            }
        }).then(data=>{
            console.log('root set');
        })
        // Navigation.push(this.props.componentId,{
        //     component: {
        //         name: 'app.log',
        //         passProps: {
        //           text: 'Pushed screen'
        //         },
        //         options: {
        //           topBar: {
        //             title: {
        //               text: 'Pushed screen title'
        //             }
        //           }
        //         }
        //       }
        // }).then(data=>{
        //     console.log('navigation compleed');
        // }).catch(data=>{
        //     console.log('catch handled');
        // })
    }
    render(){
        return (
            <View style={{
                display:'flex',
                alignItem:"center",
                justifyContent:'center',
                flexDirection:'column'
            }}>
                <Text>
                    Hello
                </Text>
                <Button title={
                    "click me to login"+this.props.counter
                } onPress={this.login}></Button>
            </View>
        )
    }
}

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

export default connect(matchToProps,dispatch)(Auth);
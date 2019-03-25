import React, {Component} from 'react';
import {Text,View} from 'react-native'
import { Navigation } from 'react-native-navigation';



export default class Auth extends Component{
    login=()=>{
        Navigation.push('app.log',{
            component:{
                name:'app.log'
            }
        })
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
                <Button title="click me to login" onPress={this.login}></Button>
            </View>
        )
    }
}
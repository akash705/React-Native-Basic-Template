import React, {Component} from 'react';
import {Text,View} from 'react-native'


export default class Auth extends Component{
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
            </View>
        )
    }
}
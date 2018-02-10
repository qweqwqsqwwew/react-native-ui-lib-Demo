import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native-ui-lib';

export default class UILib extends Component {

    render() {
        return (
            <View flex paddingH-15 paddingT-120>
                <Text blue50 text20>Welcome</Text>
                <TextInput text50 placeholder="username" dark10/>
                <TextInput text50 placeholder="password" secureTextEntry dark10/>
                <View marginT-100 center>
                    <Button text70 white background-orange30 label="Login"/>
                    <Button link text70 orange30 label="Sign Up" marginT-20/>
                </View>
                <Text red background-orange40>hwgwhgfhw</Text>

            </View>
        );
    }
}
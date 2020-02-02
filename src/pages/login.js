import React, { Component } from 'react';
import { Text, View, Image, ListView} from 'react-native';
import common from '../style/common.js';

export default class Login extends Component {

	state = {};

	render() {
		return <View style={common.flex}>
			<Text>welcome to Login</Text>
      </View>
	}
}
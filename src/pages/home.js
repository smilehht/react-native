import React, { Component } from 'react';
import { ScrollView, View, Image, ListView} from 'react-native';
import api from '../utils/api.js';
import Item from '../components/item';
import {size} from '../utils/utils'

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
    }

	componentDidMount() {
		
		this.getList();
	}

	async getList() {
		let list = await this.getData();
		this.setState({ list });
	}

	async getData() {

		let {data = []} = await api.get({
			url: 'https://www.toutiao.com/api/pc/realtime_news/'
		})
		return data;

	}

	render() {
		let {list} = this.state;
		console.log(list.length);
		return <ScrollView>
			<View style={{
				paddingLeft: size(20),
				paddingRight: size(20),
				backgroundColor: '#F2F2F2'
			}}>
				{!!list.length && list.map((item, index) => {
					return <Item
						key={index}
						item={item}
					/>
				})}
			</View>
      	</ScrollView>
	}
}
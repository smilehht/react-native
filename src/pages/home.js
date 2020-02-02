import React, { Component } from 'react';
import { ScrollView, View, Image, ListView} from 'react-native';
import common from '../style/common.js';
import api from '../utils/api.js';
import Item from '../components/item';

export default class Home extends Component {

	state = {
		list: []
	};

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
			<View style={{}}>
				{!!list.length && list.map((item, index) => {
					return <View
						key={index}
						style={{
							paddingBottom: 10
						}}
					>
						<Item item={item} />
					</View>
				})}
			</View>
      	</ScrollView>
	}
}
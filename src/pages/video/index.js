import React, { Component } from 'react';
import { ScrollView, View, Image, ListView} from 'react-native';
import Item from '../../components/item';
import api from '../../utils/api.js';
import {size} from '../../utils/utils'

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
			url: 'http://www.365yg.com/api/pc/feed/?min_behot_time=0&category=video_new&utm_source=toutiao&widen=1&tadrequire=true&as=A1A50EB3F7A929C&cp=5E3759B239AC5E1&_signature=WR4GExAVByoq6Ax8ocR0qVkeBg'
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
                        is_video={true}
					/>
				})}
			</View>
      	</ScrollView>
	}
}
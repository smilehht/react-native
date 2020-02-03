import {Dimensions} from 'react-native';

const { width } = Dimensions.get("window");

export function size(num) {
    let designWidth = 750;
    return num * width / designWidth ;
}


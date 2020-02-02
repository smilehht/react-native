import {Dimensions} from 'react-native';

export default {
    size(num) {
        const { width } = Dimensions.get("window");
        let designWidth = 750;
        return num * width / designWidth ;
    }
}
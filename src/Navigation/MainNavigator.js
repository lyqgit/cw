/**
 * Created by lyq on 2018/2/21.
 */
import { TabNavigator } from 'react-navigation';
import MapScreen from '../Screen/MapScreen';
import TaskScreen from '../Screen/TaskScreen'


export const Main = TabNavigator({
    Map:{
        screen:MapScreen
    },
    Task:{
        screen:TaskScreen
    }
});

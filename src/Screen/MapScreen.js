/**
 * Created by lyq on 2018/2/21.
 */

import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Button,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types'
import Drawer from 'react-native-drawer';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class MapScreen extends Component{

    constructor(props){
        super(props);
        this.props.navigation.setParams({controlDrawer:this.controlDrawer});
        this.state={
            drawer:true
        }
    }

    static navigationOptions =({navigation})=>({
        headerLeft:<TouchableOpacity onPress={()=>navigation.state.params.controlDrawer()}><Image source={require('../../assets/icons/Category.png')}/></TouchableOpacity>,
        title:'地图'
    });

    static contextTypes = {
        store:PropTypes.object
    };

    controlDrawer=()=>{
        this.setState({drawer:!this.state.drawer});
        console.log(this.state.drawer);
        if(this.state.drawer){
            this._drawer.open();
        }else{
            this._drawer.close();
        }

    };

    goback = ()=>{
        console.log(this.context.store.getState());
        // console.log(this.props.navigation);
        // this.props.navigation.dispatch(doLogin());
    };

    render(){
        return (
            <Drawer
                type="overlay"
                ref={(ref)=>this._drawer = ref}
                content={<View style={{backgroundColor:'orange',width:SCREEN_WIDTH*0.6,height:SCREEN_HEIGHT+100}}><Text>侧边栏</Text></View>}
                openDrawerOffset={SCREEN_WIDTH*0.6}
                closedDrawerOffset={-SCREEN_WIDTH*0.6}
                panOpenMask={0.2}
                panCloseMask={0.2}
                acceptPan={true}
                initializeOpen={false}
                panThreshold={0.6}
            >
                <View>
                    <Text>333</Text>
                    <Button
                        title="显示路由信息"
                        onPress={this.goback}
                    />
                </View>
            </Drawer>

        );
    }

}

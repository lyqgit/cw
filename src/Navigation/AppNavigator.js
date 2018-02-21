/**
 * Created by lyq on 2018/2/19.
 */
import React,{ Component } from 'react';
import { StackNavigator,addNavigationHelpers } from 'react-navigation';
import IntroScreen from '../Screen/IntroScreen';
import LoginScreen from '../Screen/LoginScreen';
import { Main } from './MainNavigator';
import { connect } from 'react-redux';
import { addListener } from '../Utils/redux';

export const AppNavigator = StackNavigator({
    Intro:{
        screen:IntroScreen,
    },
    Login:{
        screen:LoginScreen
    },
    Main:{
        screen:Main
    }
});

class AppWithNavigationState extends Component{
    render(){
        const { dispatch,doSkip } = this.props;
        return(
            <AppNavigator
                navigation = {
                    addNavigationHelpers({
                        dispatch,
                        state:doSkip,
                        addListener
                    })
                }
            />
        );
    }
}

const mapStateToProps = state => ({
    doSkip:state.doSkip,
});

export default connect(mapStateToProps)(AppWithNavigationState);

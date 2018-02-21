/**
 * Created by lyq on 2018/2/19.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import AppIntro from 'react-native-app-intro';
import { doSkip,doDone } from '../Action/IntroAction';

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default class IntroScreen extends Component {

    // componentWillMount(){
    //     this.props.navigation.dispatch(doDone());
    // }

    skipBtn = ()=>{
        console.log('skip');
        this.props.navigation.dispatch(doSkip());
    };

    doneBtn = ()=>{
        console.log('Done');
        this.props.navigation.dispatch(doDone());
    };

    static navigationOptions = {
        header:null
    };

    render() {
        return (
            <AppIntro
                onSkipBtnClick={this.skipBtn}
                onDoneBtnClick={this.doneBtn}
            >
                <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
                    <View level={10}><Text style={styles.text}>Page 1</Text></View>
                    <View level={15}><Text style={styles.text}>Page 1</Text></View>
                    <View level={8}><Text style={styles.text}>Page 1</Text></View>
                </View>
                <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
                    <View level={-10}><Text style={styles.text}>Page 2</Text></View>
                    <View level={5}><Text style={styles.text}>Page 2</Text></View>
                    <View level={20}><Text style={styles.text}>Page 2</Text></View>
                </View>
                <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
                    <View level={8}><Text style={styles.text}>Page 3</Text></View>
                    <View level={0}><Text style={styles.text}>Page 3</Text></View>
                    <View level={-10}><Text style={styles.text}>Page 3</Text></View>
                </View>
                <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
                    <View level={5}><Text style={styles.text}>Page 4</Text></View>
                    <View level={10}><Text style={styles.text}>Page 4</Text></View>
                    <View level={15}><Text style={styles.text}>Page 4</Text></View>
                </View>
            </AppIntro>
        );
    }
}
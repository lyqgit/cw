/**
 * Created by lyq on 2018/2/19.
 */
import React,{ Component } from 'react';
import {
    View,
    TextInput,
    Button,
    Dimensions,
    ImageBackground,
    StyleSheet,
    ActivityIndicator,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import PropTypes from 'prop-types';
import { doLogin } from '../Action/IntroAction';
const BG_IMAGE = require('../../assets/images/bg_screen1png.png');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class LoginScreen extends Component{

    state = {
        isLoaded:false,
        username:'',
        password:'',
        yzcode:'',
        curtime:0,
    };

    static navigationOptions = {
        header:null
    };


    static contextTypes = {
        store:PropTypes.object
    };

    getCode=()=>{
        this.setState({curtime:60});
        let that = this;
        for(let i=1;i<=60;i++){
            (function(a){
                setTimeout(function(){
                    that.setState({curtime:that.state.curtime-1})
                },a*1000)
            })(i)
        }


    };

    goback = ()=>{
        // console.log(this.context.store.getState());
        // console.log(this.props.navigation);
        this.props.navigation.dispatch(doLogin());
    };

    onSubmit=()=>{
        this.setState({isLoaded:false});
    };

    render(){
        return(

            <View style={styles.container}>
                <ImageBackground
                    source={BG_IMAGE}
                    style={styles.bgImage}
                    onLoad={()=>this.setState({isLoaded:true})}
                >
                {this.state.isLoaded?

                    <KeyboardAvoidingView behavior='position'>
                        <View style={styles.inputView}>
                            <View style={styles.inputText}>
                                <Image
                                    source={require('../../assets/icons/Mobile-phone.png')}
                                    resizeMode="stretch"
                                    style={styles.icon}
                                />
                                <TextInput
                                    placeholder='手机号'
                                    placeholderTextColor='blue'
                                    style={styles.input}
                                    maxLength={13}
                                />
                            </View>
                            <View style={styles.inputText}>
                                <Image
                                    source={require('../../assets/icons/password.png')}
                                    resizeMode="stretch"
                                    style={styles.icon}
                                />
                                <TextInput
                                    placeholder='密码'
                                    placeholderTextColor='blue'
                                    style={styles.input}
                                    maxLength={13}
                                />
                            </View>
                            <View style={styles.inputText}>
                                <TextInput
                                    placeholder='填写验证码'
                                    placeholderTextColor='blue'
                                    maxLength={6}
                                    style={{width:'50%'}}
                                />
                                <View style={{width:'40%',marginLeft:'15%',backgroundColor:'blue'}}>
                                    <Button
                                        title={this.state.curtime === 0?'获取':String(this.state.curtime)+'s'}
                                        onPress={this.getCode}
                                        color='orange'
                                        disabled={this.state.curtime !== 0}
                                        style={{fontSize:13}}
                                    />
                                </View>
                            </View>
                            <View style={styles.button}>
                                <Button
                                    title="登录"
                                    color="white"
                                    onPress={this.goback}
                                />
                            </View>
                        </View>

                    </KeyboardAvoidingView>
                    :
                    <ActivityIndicator
                        animating={true}
                        color="#DD91FA"
                        size="large"
                    />
                }
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputView:{
        borderRadius:30,
        alignItems:'center',
        width:SCREEN_WIDTH*2/3,
        height:SCREEN_HEIGHT/2,
        backgroundColor:'white',
    },
    inputText:{
        width:'80%',
        marginTop:'8%',
        flexDirection:'row',
        padding:10,
        borderBottomWidth:1
    },
    input:{
        marginLeft:'5%',
        width:'80%'
    },
    icon:{
        width:SCREEN_WIDTH/12,
        height:SCREEN_HEIGHT/25
    },
    button:{
        marginTop:'15%',
        borderRadius:30,
        width:'60%',
        height:'20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'orange'
    }
});
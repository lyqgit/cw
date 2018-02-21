/**
 * Created by lyq on 2018/2/19.
 */

export const SKIP = 'SKIP';
export const DONE = 'DONE';
export const LOGIN_IN = 'LOGIN_IN';

export const UserStatus = {
    IntroStatus:false,
    LoginStatus:false,
    UserInfo:{}
};

export function doSkip(){
    return {
        type:'SKIP',
        info:'跳过引导页'
    }
}

export function doDone(){
    return {
        type:'DONE',
        info:'完成引导页'
    }
}

export function doLogin(){
    return {
        type:'LOGIN_IN',
        info:'完成引导页'
    }
}

import styled from 'styled-components';
import logoPic from '../../static/logo.png';

// 创建一个HeaderWrapper的组件
export const HeaderWrapper = styled.div `
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
}) `
    position: absolute;
    display: block;
    width: 100px;
    height: 56px;
    top: 0; 
    left: 0;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div `
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div `
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    // input的动画
    .slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    .slide-enter-active {
        width: 240px;
    }
    .slide-exit {
        width: 160px;
        transition: all .2s ease-out;
    }
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        &.focused {
            background-color: #777;
            color: #fff;
        }
    }
`


export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    color: #666;
    // 修改placeholder的字体颜色
    &::placeholder {
        color: #999;
    }
    &.focused {
        box-sizing: content-box;
        width: 240px;
    }
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`

export const Button = styled.button `
    float: right;
    margin-right: 20px;
    margin-top: 9px;
    padding: 0 20px;
    font-size: 14px;
    line-height: 38px;
    border-radius: 9px;
    border: solid 1px #ec6149;
    background: transparent;
    cursor: pointer;
    outline: none;
    &.register {
        color: #ec6149;
    }
    &.writting {
        background-color: #ec6149;
        color: #fff;
    }
`
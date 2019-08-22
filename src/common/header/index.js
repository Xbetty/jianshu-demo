import React, {Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    {/* <Logo href="/"/> */}
                    <Logo />
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        <SearchWrapper>
                            <NavSearch/>
                            <span className="iconfont">&#xe62b;</span>
                        </SearchWrapper>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                    </Nav>
                    <Addition>
                        <Button className="writting"><span className="iconfont">&#xe602;</span>写文章</Button>
                        <Button className="register">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        )
    }
}
export default Header;
import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
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
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }
    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
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
                            <CSSTransition
                                in={this.state.focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={this.state.focused ? 'focused' : ''}
                                    onFocus={this.handleInputFocus}
                                    onBlur={this.handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>                            
                            <span  className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</span>
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
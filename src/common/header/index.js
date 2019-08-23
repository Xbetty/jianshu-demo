import React from 'react';
import { connect } from 'react-redux';
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

// 修改为无状态组件
const Header = (props) => {
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
                            in={props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={props.focused ? 'focused' : ''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>                            
                        <span  className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62b;</span>
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

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus',
                focused: true
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type: 'serach_blur',
                focused: false
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
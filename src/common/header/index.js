import { connect } from 'react-redux';
import {
    Addition,
    Button,
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	// SearchWrapper,
	// NavSearch,
	// SearchInfo,
	// SearchInfoTitle,
	// SearchInfoSwitch,
	// SearchInfoList,
	// SearchInfoItem
} from './style';
// import { Link } from 'react-router-dom'
const { Component } = require("react");



class Header extends Component {
    render() {
        const { login, logout } = this.props
        return (
            <HeaderWrapper>
                <Logo/>
                
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
                    {
						login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> : 
                            <div></div>
					}
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
                </Nav>

                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }


Header = connect(mapStateToProps)(Header)

export default Header
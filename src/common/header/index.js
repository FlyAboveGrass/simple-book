import {
    WriteContainer,
    Button,
    HeaderWrapper,
    Logo,
    Nav,
    NavBar,
    NavItem
} from './style';
const { Component } = require("react");


class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <WriteContainer>
                    <Button>写文章</Button>
                </WriteContainer>
                
                <Nav>
                    <NavBar>
                        <NavItem></NavItem>
                    </NavBar>
                </Nav>
            </HeaderWrapper>
        )
    }
}

export default Header
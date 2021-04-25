import styled from 'styled-components'
import logo from '../../statics/logo.png'


export const HeaderWrapper = styled.div `
    height: 56px;
    position: relative;
`

export const Logo = styled.a.attrs('href', '/')  `
    float: left;
    width: 100px;
    height: 100%;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
`

export const Nav = styled.div `
    padding: 0 100px;
    height: 56px;
`

export const NavBar = styled.div `
    float: left;
    height: 56px;
    display: flex;
    justify-content: space-between;
`

export const NavItem = styled.div `
    
`

export const Icon = styled.div `
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 56px;
    height: 56px;
`





export const WriteContainer = styled.div `
    width: 100px;
    height: 56px;
    float: right;
    position: relative;
`

export const Button = styled.div `
    width: 80px;
    height: 40px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background-color: #dc7661;
    border-radius: 20px;
    line-height: 40px;
    text-align: center;
    color: white;
`
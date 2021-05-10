import React, { Component } from 'react'
import { connect } from 'react-redux';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { getHomeInfo, toggleScrollTop } from './store/actionCreator';

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
    BackTop as ScrollTop
} from './style';

class Home extends Component {
    scrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <ScrollTop onClick={() => this.scrollTop()}>返回顶部</ScrollTop> : null }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.getHomeInfo()
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}



const mapState = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatch = (dispatch)  => {
    return {
        getHomeInfo(state) {
            dispatch(getHomeInfo())
        },
        changeScrollTopShow(state) {
            if(document.documentElement.scrollTop > 100) {
                dispatch(toggleScrollTop(true))
            } else {
                dispatch(toggleScrollTop(false))
            }
        }
    }
}

export default connect(mapState, mapDispatch)(Home)
 
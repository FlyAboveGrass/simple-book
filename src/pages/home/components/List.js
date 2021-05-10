import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListInfo, ListItem, LoadMore } from '../style'
import { getMoreList } from '../store/actionCreator'


class List extends Component {
    render() {
        const { articles, page, getMoreList } = this.props
        return (
            <div>
                { console.log('articles', articles) }
                {
                    articles && articles.map((article) => {
                        return (
                            <Link key={ article.id  } to={ `/article/${article.id}` }>
                                <ListItem>
                                    <img className="pic" src={article.imgUrl} alt="" />
                                    <ListInfo>
                                        <h3 className='title'>{ article.title }</h3>
                                        <p className='desc'>{ article.desc }</p>
                                    </ListInfo>
                                </ListItem>
                                
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        articles: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getMoreList(page) {
            console.log('page', page);
            dispatch(getMoreList(page))
        }
    }
}


export default connect(mapState, mapDispatch)(List)

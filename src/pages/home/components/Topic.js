import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicItem, TopicWrapper } from '../style'

class Topic extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <TopicWrapper>
                {
                    list.map((topic) => (
                        <TopicItem key={ topic.id }>
                            <img src={ topic.imgUrl } className="topic-pic" alt=""></img>
                            { topic.title }
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'topicList'])
    }
}

export default connect(mapState)(Topic)
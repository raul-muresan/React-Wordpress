import React, { Component } from 'react';
import { connect } from 'react-redux';
import postsActions from 'redux-components/actions/posts';

class Posts extends Component {
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        const { posts } = this.props;

        return (
            <div>
                {
                    posts && posts.map(
                        post => <div
                                    key={post.id}
                                    dangerouslySetInnerHTML={{__html: post.content.rendered}}
                                ></div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(postsActions.getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
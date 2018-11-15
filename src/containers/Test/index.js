import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {
    componentDidMount() {

    }

    render() {
        const { posts, pages, clickSmth, clickGetPages } = this.props;
        posts && console.log(posts);
        pages && console.log(pages);

        return (
            <div>
                <button onClick = {clickSmth}>
                    Get Posts
                </button>
                {
                    posts.length > 0 &&
                    <div>
                        Posts with id {posts.map(post => <span key={post.id}>{post.id}, </span>)} are ready
                    </div>
                }
                <button onClick = {clickGetPages}>
                    Get Pages
                </button>
                {
                    pages.length > 0 &&
                    <div>
                        Pages with id {pages.map(page => <span key={page.id}>{page.id},</span>)} are ready
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    pages: state.pages,
});

const mapDispatchToProps = dispatch => ({
    clickSmth: () => dispatch({type: 'FETCH_POSTS'}),
    clickGetPages: () => dispatch({type: 'FETCH_PAGES'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
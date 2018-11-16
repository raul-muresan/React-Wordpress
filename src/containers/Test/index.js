import React, { Component } from 'react';
import { connect } from 'react-redux';
import postsActions from 'redux-components/actions/posts';
import pagesActions from 'redux-components/actions/pages';

class Test extends Component {
    componentDidMount() {
        this.props.getPosts();
        this.props.getPages();
    }

    render() {
        const { posts, pages } = this.props;
        posts && console.log(posts);
        pages && console.log(pages);

        return (
            <div>
                <button>
                    Get Posts
                </button>
                {
                    posts.length > 0 &&
                    <div>
                        Posts with id {posts.map(post => <span key={post.id}>{post.id}, </span>)} are ready
                    </div>
                }
                <button>
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
    getPosts: () => dispatch(postsActions.getPosts()),
    getPages: () => dispatch(pagesActions.getPages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
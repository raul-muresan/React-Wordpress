import React, { Component } from 'react';
import { connect } from 'react-redux';
import pagesActions from 'redux-components/actions/pages';

class Pages extends Component {
    componentDidMount() {
        this.props.getPages();
    }
    render() {
        const { pages } = this.props;
        return (
            <div>
                {
                    pages && pages.map(
                        page => <div
                                    key={page.id}
                                    dangerouslySetInnerHTML={{__html: page.content.rendered}}
                                >
                                </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pages: state.pages
});

const mapDispatchToProps = dispatch => ({
    getPages: () => dispatch(pagesActions.getPages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
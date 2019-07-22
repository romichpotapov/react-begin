// Core
import React, { Component } from 'react';
import moment from 'moment';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

// Instrumentds
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'instruments';

export default class Feed extends Component {
    constructor () {
        super();

        this._createPost = this._createPost.bind(this);
        this._setPostFachingState = this._setPostFachingState.bind(this);
    }

    state = {
        posts: [
            {id: '132', comment: 'Hello', created: 1563812405},
            {id: '568', comment: 'Hmmm', created: 1563811809},
        ],
        spinning: false,

    };

    _setPostFachingState (state) {
        this.setState({
            spinning: state,
        });
    }

    async _createPost (comment) {
        this._setPostFachingState(true);
        const post = {
            id:      getUniqueID(),
            created: moment().utc(),
            comment,
        };

        await delay();

        this.setState(({ posts }) => ({
            posts: [ post, ...posts ],
            spinning: false,
        }));
    }

    render () {
        const { posts, spinning } = this.state;
        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                />
            )
        });

        return (
            <section className = { Styles.feed } >
                <Spinner isSpinning = { spinning } />
                <StatusBar />
                <Composer _createPost = { this._createPost } />
                {postsJSX}
            </section>
        );
    }
}

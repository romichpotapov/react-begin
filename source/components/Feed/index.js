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
        this._likePost = this._likePost.bind(this);
    }

    state = {
        posts: [
            {id: '132', comment: 'Hello', created: 1563812405, likes: []},
            {id: '568', comment: 'Hmmm', created: 1563811809, likes: []},
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
            likes: [],
        };

        await delay();

        this.setState(({ posts }) => ({
            posts: [ post, ...posts ],
            spinning: false,
        }));
    }

    async _likePost (id) {
        const { currentUserFirstName, currentUserLastName } = this.props;
        this._setPostFachingState(true);

        await delay(1500);

        const newPosts = this.state.posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    likes: [
                        {
                            id:        getUniqueID(),
                            firstName: currentUserFirstName,
                            lastName:  currentUserLastName,
                        }
                    ],
                };
            }

            return post;
        });

        this.setState({
            posts:    newPosts,
            spinning: false,
        })
    }

    render () {
        const { posts, spinning } = this.state;
        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                    _likePost = { this._likePost }
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

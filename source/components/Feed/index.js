// Core
import React, { Component } from 'react';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

// Instrumentds
import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            {id: '132', comment: 'Hello', created: 1563812405},
            {id: '568', comment: 'Hmmm', created: 1563811809},
        ],
        spinning: true,

    };

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
                <Spinner isSpinnig = { spinning } />
                <StatusBar />
                <Composer />
                {postsJSX}
            </section>
        );
    }
}

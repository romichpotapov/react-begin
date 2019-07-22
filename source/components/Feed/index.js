// Core
import React, { Component } from 'react';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

// Instrumentds
import Style from './style.m.css';

export default class Feed extends Component {
    render () {
        return (
            <section className = { Style.feed } >
                <StatusBar />
                <Composer />
                <Post />
            </section>
        );
    }
}

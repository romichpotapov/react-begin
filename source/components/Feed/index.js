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
                <StatusBar { ...this.props }/>
                <Composer { ...this.props } />
                <Post { ...this.props } />
            </section>
        );
    }
}

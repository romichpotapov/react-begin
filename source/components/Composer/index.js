// Core
import React, { Component } from 'react';

// Instruments
import Style from './style.m.css';

export default class Composer extends Component {
    render () {
        const {
            avatar,
            currentUserFirstName,
        } = this.props;

        return (
            <section className = { Style.composer }>
                <img src = { avatar } />
                <form>
                    <textarea placeholder = { `What's on your mind, ${currentUserFirstName}?` } />
                    <input type = 'submit' value = 'Post' />
                </form>
            </section>
        );
    }
}

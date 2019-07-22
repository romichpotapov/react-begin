// Core
import React, { Component } from 'react';

// Instruments
import Style from './style.m.css';

// Components
import { Consumer } from 'components/HOC/withProfile';

export default class Composer extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Style.composer }>
                        <img src = { context.avatar } />
                        <form>
                            <textarea placeholder = { `What's on your mind, ${context.currentUserFirstName}?` } />
                            <input
                                type = 'submit'
                                value = 'Post'
                            />
                        </form>
                    </section>
                )}
            </Consumer>
        );
    }
}

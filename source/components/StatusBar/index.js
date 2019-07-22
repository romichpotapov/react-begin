// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class StarusBar extends Component {
    render () {
        const {
            avatar,
            currentUserFirstName,
            currentUserLastName,
        } = this.props;

        return (
            <section className = { Styles.statusBar }>
                <button>
                    <img src = { avatar } />
                    <span>{ currentUserFirstName }</span>
                    &nbsp;
                    <span>{ currentUserLastName }</span>
                </button>
            </section>
        );
    }
}

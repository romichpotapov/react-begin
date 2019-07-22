// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import Feed from 'components/Feed';

// Instruments
import avatar from 'theme/assets/lisa';

const options = {
    currentUserFirstName: 'Lisa',
    currentUserLastName:  'Simpson',
    avatar,
};

@hot(module)
export default class App extends Component {
    render() {
        return (
            <>
                <Feed { ...options } />
            </>
        );
    }
}

import React from 'react';
import logoImage from '../../image/logo.png'

export default class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'toutiao'
        };
    }

    render() {
        return (
            <div id='mobileheader'>
                <header>
                    <a href="/" className="logo">
                        <img src={logoImage} alt="logo"/>
                        <span>ReactNews</span>
                    </a>
                </header>
            </div>
        )
    }
}
import React from 'react';
import './App.css';
import PCIndex from './js/components/pc_index';
import MobileIndex from './js/components/mobile_index';
import MediaQuery from 'react-responsive';

class App extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

export default App;

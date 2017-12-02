import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal} from 'antd';

const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <Tabs>
                    <TabPane tab={"头条"} key={"1"}>

                    </TabPane>
                    <TabPane tab={"社会"} key={"2"}>

                    </TabPane>
                    <TabPane tab={"国内"} key={"3"}>

                    </TabPane>
                    <TabPane tab={"国际"} key={"4"}>

                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        )
    }

}
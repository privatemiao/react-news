import React, {Component} from 'react';
import {Col, Icon, Menu, Row} from 'antd';
import logoImage from '../../image/logo.png'

export default class PCHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'toutiao'
        };
    }

    render() {
        return (
            <div id='pcheader'>
                <header>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={4}>
                            <a href="/" className="logo">
                                <img src={logoImage} alt="logo"/>
                                <span>ReactNews</span>
                            </a>
                        </Col>
                        <Col span={16}>
                            <Menu selectedKeys={[this.state.current]}
                                  mode="horizontal">
                                <Menu.Item key="toutiao">
                                    <Icon type="appstore"/>头条
                                </Menu.Item>
                                <Menu.Item key="shehui">
                                    <Icon type="appstore"/>社会
                                </Menu.Item>
                                <Menu.Item key="guonei">
                                    <Icon type="appstore"/>国内
                                </Menu.Item>
                                <Menu.Item key="guoji">
                                    <Icon type="appstore"/>国际
                                </Menu.Item>
                                <Menu.Item key="yule">
                                    <Icon type="appstore"/>娱乐
                                </Menu.Item>
                                <Menu.Item key="tiyu">
                                    <Icon type="appstore"/>体育
                                </Menu.Item>
                                <Menu.Item key="keji">
                                    <Icon type="appstore"/>科技
                                </Menu.Item>
                                <Menu.Item key="shishang">
                                    <Icon type="appstore"/>时尚
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </header>
            </div>
        )
    }
}


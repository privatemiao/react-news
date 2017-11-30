import React, {Component} from 'react';
import {
    Col, Icon, Menu, Row,
    Tabs, Form, Input, message,
    Button, Checkbox
} from 'antd';
import {Link} from 'react-router-dom';
import logoImage from '../../image/logo.png'

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'toutiao',
            modalVisible: false,
            action: 'login',
            hashLogined: false,
            userNickName: '',
            userId: 0
        };
    }

    render() {
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hashLogined
            ?
            <Menu.Item key="logout" className="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button">退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register">
                <Icon type="appstore" />注册/登录
            </Menu.Item>
        ;
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
                                {userShow}
                            </Menu>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </header>
            </div>
        )
    }
}

export default PCHeader = Form.create({})(PCHeader);
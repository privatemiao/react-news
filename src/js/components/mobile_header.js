import React, {Component} from 'react';
import {
    Col, Icon, Menu, Row,
    Tabs, Form, Input, message,
    Button, Checkbox, Modal
} from 'antd';
import {Link} from 'react-router-dom';
import logoImage from '../../image/logo.png'

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {
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

    setModalVisible = (value) => {
        this.setState({modalVisible: value});
    };

    handleClick = (event) => {
        if (event.key === 'register') {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: event.key});
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        this.setState({userNickName: formData.userName})

        message.success("注册成功");
        this.setModalVisible(false);
    };

    login = (event) => {
        event.preventDefault();
        this.setModalVisible(true);
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type="inbox"/>
            </Link>
            :
            <Icon type="setting" onClick={this.login}/>
        ;
        return (
            <div id='mobileheader'>
                <header>
                    <a href="/" className="logo">
                        <img src={logoImage} alt="logo"/>
                        <span>ReactNews</span>
                        {userShow}
                    </a>

                    <Modal title="用户中心" wraoClassName="vertical-center-modal" visible={this.state.modalVisible}
                           onCancel={() => this.setModalVisible(false)}
                           onOk={() => this.setModalVisible(false)}
                           okText="关闭">
                        <Tabs type="card">
                            <TabPane tab="注册" key="2">
                                <Form layout="horizontal" onSubmit={this.handleSubmit}>
                                    <FormItem label="账户">
                                        {getFieldDecorator('userName')(<Input placeholder="输入账户"/>)}
                                    </FormItem>
                                    <FormItem label="密码">
                                        {getFieldDecorator('password')(<Input placeholder="输入密码"/>)}
                                    </FormItem>
                                    <FormItem label="确认密码">
                                        {getFieldDecorator('confirmPassword')(<Input placeholder="输入密码"/>)}
                                    </FormItem>
                                    <Button type="primary" htmlType="submit">注册</Button>
                                </Form>
                            </TabPane>
                        </Tabs>
                    </Modal>
                </header>
            </div>
        )
    }
}

export default MobileHeader = Form.create({})(MobileHeader);
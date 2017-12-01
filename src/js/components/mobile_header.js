import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router-dom';
import logoImage from '../../image/logo.png';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

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

    handleSubmit = (e) => {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username=" + formData.r_userName + "&password=" + formData.r_password
            + "&confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: json.NickUserName, userid: json.UserId});
                localStorage.userid = json.UserId;
                localStorage.userNickName = json.NickUserName;
            });
        if (this.state.action == "login") {
            this.setState({hasLogined: true});
        }
        message.success("请求成功！");
        this.setModalVisible(false);
    }
    ;

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
                    <a href="/">
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
                                        {getFieldDecorator('r_userName')(<Input placeholder="输入账户"/>)}
                                    </FormItem>
                                    <FormItem label="密码">
                                        {getFieldDecorator('r_password')(<Input placeholder="输入密码"/>)}
                                    </FormItem>
                                    <FormItem label="确认密码">
                                        {getFieldDecorator('r_confirmPassword')(<Input placeholder="输入密码"/>)}
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
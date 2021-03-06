import React, {Component} from 'react';
import {Col, Icon, Menu, Row, Tabs, Form, Input, message, Button, Checkbox, Modal} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logoImage from '../../image/logo.png';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class PCHeader extends Component {

    constructor() {
        super();
        this.state = {
            current: 'toutiao',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0
        };
    }

    componentWillMount() {
        if (localStorage.userid != '') {
            this.setState({
                hasLogined: true,
                userNickName: localStorage.userNickName,
                userId: localStorage.userid
            });
            console.log(this.state);
        }
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

    handleSubmit = (e) => {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        let url = "http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username=" + formData.userName + "&password=" + formData.password
            + "&r_username=" + formData.r_userName + "&r_password=" + formData.r_password
            + "&confirmPassword=" + formData.r_confirmPassword;
        console.log(url);
        fetch(url, myFetchOptions)
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
    };

    callback = (key) => {
        if (key === '1') {
            this.setState({action: 'login'});
        } else {
            this.setState({action: 'register'});
        }
    };

    logout = () => {
        localStorage.userid = '';
        localStorage.userNickName = '';
        this.setState({hasLogined: false});
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Router>
                    <Link target="_blank" to={`/usercenter`}>
                        <Button type="dashed" htmlType="button">个人中心</Button>
                    </Link>
                </Router>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button" onClick={this.logout}>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登录
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
                            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}
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
                                {/*<Menu.Item key="yule">
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
                                </Menu.Item>*/}
                                {userShow}
                            </Menu>


                            <Modal title="用户中心" wraoClassName="vertical-center-modal" visible={this.state.modalVisible}
                                   onCancel={() => this.setModalVisible(false)}
                                   onOk={() => this.setModalVisible(false)}
                                   okText="关闭">
                                <Tabs type="card" onChange={this.callback}>
                                    <TabPane tab="登录" key="1">
                                        <Form layout="horizontal" onSubmit={this.handleSubmit}>
                                            <FormItem label="账户">
                                                {getFieldDecorator('userName')(<Input placeholder="输入账户"/>)}
                                            </FormItem>
                                            <FormItem label="密码">
                                                {getFieldDecorator('password')(<Input placeholder="输入密码"/>)}
                                            </FormItem>
                                            <Button type="primary" htmlType="submit">登录</Button>
                                        </Form>
                                    </TabPane>
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


                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </header>
            </div>
        )
    }
}

export default PCHeader = Form.create({})(PCHeader);
import React from 'react';
import {Col, Icon, Menu, Carousel, Row, Tabs, Form, Input, message, Button, Checkbox, Modal} from 'antd';

import carousel_1 from "../../image/carousel_1.jpg";
import carousel_2 from "../../image/carousel_2.jpg";
import carousel_3 from "../../image/carousel_3.jpg";
import carousel_4 from "../../image/carousel_4.jpg";

import PCNewsBlock from './pc_news_block';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoPlay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings} >
                                    <div><img src={carousel_1}/></div>
                                    <div><img src={carousel_2}/></div>
                                    <div><img src={carousel_3}/></div>
                                    <div><img src={carousel_4}/></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab={"新闻"} key={"1"}>
                                <PCNewsBlock count={15} type={"top"} width={"100%"} bordered={"false"}/>
                            </TabPane>
                            <TabPane tab={"国际"} key={"2"}>
                                <PCNewsBlock count={15} type={"guoji"} width={"100%"} bordered={"false"}/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}
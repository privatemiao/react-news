import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {CheckBox, Tabs, Carousel} from 'antd';
import MobileList from "./mobile_list";

import carousel_1 from "../../image/carousel_1.jpg";
import carousel_2 from "../../image/carousel_2.jpg";
import carousel_3 from "../../image/carousel_3.jpg";
import carousel_4 from "../../image/carousel_4.jpg";

const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
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
                <MobileHeader/>
                <Tabs>
                    <TabPane tab={"头条"} key={"1"}>
                        <Carousel {...settings} >
                            <div><img src={carousel_1}/></div>
                            <div><img src={carousel_2}/></div>
                            <div><img src={carousel_3}/></div>
                            <div><img src={carousel_4}/></div>
                        </Carousel>
                        <MobileList count={20} type={"top"}/>
                    </TabPane>
                    <TabPane tab={"社会"} key={"2"}>
                        <MobileList count={20} type={"shehui"}/>
                    </TabPane>
                    <TabPane tab={"国内"} key={"3"}>
                        <MobileList count={20} type={"guonei"}/>
                    </TabPane>
                    <TabPane tab={"国际"} key={"4"}>
                        <MobileList count={20} type={"guoji"}/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        )
    }

}
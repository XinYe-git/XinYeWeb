import React, { Component } from 'react'
import './main.css'
import '../main.css'
export default class busProcess extends Component {
    render() {
        return (
            <div className='centlay mt50 pb50'>
                <p className="BusFirst"><span className="BusSpan">业务流程</span></p>
                <div className="BusProBox ">
                    <h1>01</h1>
                    <p className="BusProtitle"><span>建站申请</span></p>
                    <p className="BusProtitwo">建立合作意向，明确项目要求</p>
                    <div className="BusProDeta foliageLeft centlay">
                        <p>1、客户提供相关文本及图片资源 公司（个人）介绍、项目描述、网站基本功能要求、基本设计要求，网站定位；</p>
                        <p>2、需要这个网站实现一个怎么样的一个功能或者价值，比如：宣传企业形象、推广企业产品、运营平台、服务客户型网站；</p>
                        <p>3、这也演化出企业网站建设、品牌网站建设、营销网站建设、学校网站建设、医院网站建设等一系列的不同类型的网站。客户需要明确自己需要的是哪种类型的网站</p>
                    </div>
                </div>
                <div className="BusProBox ">
                    <h1>02</h1>
                    <p className="BusProtitle"><span>指定建站方案</span></p>
                    <p className="BusProtitwo">确定项目设计制作周期及费用</p>
                    <div className="BusProDeta foliageRight centlay">
                        <p>1、双方协商网站建设内容，修改补充，达成共识</p>
                        <p>2、我方制定《网站建设方案》（内容包括客户情况分析；网站需要实现的目的和目标；网站形象说明；网站的栏目版块和结构；网站内容的安排，相互链接关系；开发时间进度表；宣传推广方案；维护方案；制作费用；工作室简介：成功作品，技术，人才说明等）</p>
                        <p>3、等待客户确定方案。</p>
                    </div>
                </div>
                <div className="BusProBox ">
                    <h1>03</h1>
                    <p className="BusProtitle"><span>签署协议</span></p>
                    <p className="BusProtitwo">签署项目合作协议，支付预付款</p>
                    <div className="BusProDeta foliageLeft centlay pb10">
                        <p>客户确定方案可行，签署相关协议，客户支付预付款</p>
                    </div>
                </div>
                <div className="BusProBox ">
                    <h1>04</h1>
                    <p className="BusProtitle"><span>网页制作</span></p>
                    <p className="BusProtitwo">3-5个工作日完成初稿，客户确定风格</p>
                    <div className="BusProDeta foliageRight centlay pb10">
                        <p>1、网站设计 <br />
                            设计师会根据前期沟通对网站整体布局结构进行设计，包括风格、配色、字体、图标等。整个设计要包含网站的所有功能，所有页面。这个阶段需要用户深入参与，以避免后期的修改和返工。设计师在这一阶段还需要把设计的页面进行切图等工作，以给前端进行前端开发用。
                        </p>
                        <p>
                            2、前端页面制作 <br />
                            前端工程师根据网站的整体设计利用HTML、js等前端技术把网站实现出来。同时需要进行兼容性测试，在ie、谷歌、火狐、360等不同品牌不同版本间进行测试，以保证网站在不同的浏览器之间都能正常访问，并能达到设计的效果。
                        </p>
                        <p>
                            3、架构及环境搭建 <br />
                            涉及到后台开发的网站需要搭建服务器、数据库、ide、类库等开发环境，有时候前端也需要。复杂的系统还需要考虑分布式部署、负载均衡、数据库分层等。
                        </p>
                        <p>
                            4、后端开发 <br />
                            后端开发主要实现网站的交互、数据存取等。包括用户的登录注册、业务数据的增加修改删除、用户体系的建立维护、后台管理等。后端是整个系统业务逻辑的实现，需要和前端工程师定义交互协议、接口等。也需要和前端工程师进行联调测试。
                        </p>
                        <p>
                            5、测试 <br />
                            测试分为单元测试和整体测试。复杂的系统需要写测试用例，并伴随整个开发周期。另外除了进行功能测试外，还需要进行性能测试。比如测试网页的响应速度、并发量等。测试过程的bug需要记录提交，修改完后也需要复测确认。
                        </p>
                    </div>
                    <div className="BusProBox ">
                        <h1>05</h1>
                        <p className="BusProtitle"><span>客户验收</span></p>
                        <p className="BusProtitwo">项目验收合格，支付尾款，上线</p>
                        <div className="BusProDeta foliageLeft centlay">
                            <p>1、客户根据协议内容对网站进行验收工作；</p>
                            <p>2、验收合格，由客户签发“网站建设验收合格确认书”；</p>
                            <p>3、客户支付余款、网站开通；</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

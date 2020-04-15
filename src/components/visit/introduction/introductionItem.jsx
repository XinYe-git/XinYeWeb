import React, { Component } from 'react'

export default class introductionItem extends Component {
    render() {
        return (
            <div className="introductionItem-outer">
                <div className="introductionItem">
                    <div className="introduction-item-title">我们是一群怎样的新叶人</div>
                    <p className="introduction-item-words">转眼新叶工作室就成立十周年啦，首先祝新叶工作室十周岁快乐啦！^_^</p>
                    <p className="introduction-item-words">十年的时间足以改变很多事情了，可是新叶工作室如今依然“顽强”的“生长”着，单凭这点，就特别让人感动。10年来她一直是一群在校大学生、互联网爱好者交流和学习互联网技术的圣地，工作室也是由这样一群热情朝气的大学生从无到有、一点一滴、经年累月、前赴后继地经营起来的。想知道我们新叶是如何成长的么？且听我下面慢慢讲述。</p>
                </div>
                <div className="introductionItem">
                    <div className="introduction-item-title">还是婴儿的新叶</div>
                    <p className="introduction-item-words">新叶网络工作室成立于2008年，由三位大三的学生创立，分为三个学习小组:程序组、前端组、美工组。我们一直坚持自主学习、讨论交流、项目实战的原则,在Web开发领域披荆斩棘，独树一帜。</p>
                </div>
                <div className="introductionItem">
                    <div className="introduction-item-title">慢慢成长</div>
                    <p className="introduction-item-words">新叶成员在确定好自己的研究方向后，将会深入到自己所选的领域中学习。</p>
                    <div className="introduction-style">
                        <div className="introduction-style-item">
                            <div className="introduction-style-item-img1"></div>
                            <div className="introduction-style-item-words">前端组的小伙伴们将着重学习Web规范及技术，掌握XHTML、DIV+CSS、JQUERY，ES6,对新兴技术如HTML5、CSS3.0，Node.js也会进行深入地研究，同时也会选择几款主流前端框架进行学习如样式框架Bootstraps，MVVM框架React.js、AngularJS等。</div>
                        </div>
                        <div className="introduction-style-item">
                            <div className="introduction-style-item-img2"></div>
                            <div className="introduction-style-item-words">美工组则着力于界面设计、交互设计、用户体验研究，最初我们与美术学院荟意堂工作室形成接轨，双方在美 术理论、美感提高、网页原型上充分交换经验。美工组的小伙伴通常会首先学习使用Potoshsop设计页面，而后会学习制作AI、UI。</div>
                        </div>
                        <div className="introduction-style-item">
                            <div className="introduction-style-item-img3"></div>
                            <div className="introduction-style-item-words">程序组主要在开源领域进行创新性学习研究，如 PHP开发、数据库操作、Linux操作及服务器架设、软件工程等。通常也会掌握几款主流后端MVC开发框架如ThinkPHP、Laravel等，然后也会学习借鉴一些开源的CMS开发自己的后台管理系统，同时也会去学习Linux服务器管理与开发。</div>
                        </div>
                    </div>
                </div>
                <div className="introductionItem">
                    <div className="introduction-item-title">前赴后继</div>
                    <p className="introduction-item-words">自新叶网络工作室创立以来，我们每年都会向湖南文理学院的大二学生招新， 引导他们学习网站制作方面的知识，给他们制定详细的学习计划。而每一届负责管理新叶网络工作室的大三学长、学姐们则会自主接单以维持工作室运营，当他们从大三升到大四时，就会把工作室转交到学弟学妹手里，自己则继续完成学业。</p>
                    <p className="introduction-item-words">至今，新叶已历经10年风雨，但是新叶不会停止，还会继续发展， 并且将会越来越壮大。</p>
                </div>
            </div>
            
        )
    }
}

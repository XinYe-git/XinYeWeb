import React, { Component } from 'react'


import "./main.css"

export default class service extends Component {
    render() {
        return (
            <div className="contactBox serCentlay">
                <div className="contactMap serCentlay">
                    <div className="contactDeta" >
                        <h1 className='contactTitle'>
                            CONTACT
                        <p className="superFont">联系</p>
                        </h1>
                        <p className='address'>地址：湖南省常德市武陵区</p>
                        <h2>咨询热线：13347318339</h2>
                        <p className='address'>联系方式：400-873-2974</p>
                        <p className='address'>邮箱：741260154@qq.com</p>
                    </div>
                    <img className='map' src={require("./map.png")} alt="地图" />
                </div>
                <div className="Feedback">
                    <h1 className='contactTitle'>
                        FEEDBACK
                        <p className="superFont">问题反馈</p>
                    </h1>
                    <div className='phoneCity'>
                        <form action="" method="POST" className="submitBox clearfix">
                            <div className='conPhone'>
                                <input type="text" className='conMod ' />
                                <span className="conPhoneSpan">电话：</span>
                            </div>
                            <div className='conCity'>
                                <input type="text" className='conMod ' />
                                <span className="conPhoneSpan">城市：</span>
                            </div>
                            <div className='feedTextF'>
                                <span className="feedPrompt">反馈：</span>
                                <textarea type="text" className='feedBackText'></textarea>
                            </div>
                            <input type='submit' value='提交' className='subBoxBtn'/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

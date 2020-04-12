import React, { Component } from 'react'
import '../main.css'
export default class business extends Component {
    render() {
        return (
            <div className='centlay'>
                <p className="BusFirst"><span className="BusSpan">主要业务</span></p> 
                <div className='BusImgBox centlay'>
                    <div className='BusImgItme'>
                        <img  src={require("./company.png")} alt="公司企业官网开发"/>
                        <p className='ItmeScript'>公司/企业官网开发</p>
                    </div>
                    <div className='BusImgItme'>
                        <img  src={require("./modify.png")} alt="网店装修"/>
                        <p className='ItmeScript'>网店微店开发装修</p>
                    </div>
                    <div className='BusImgItme'>
                        <img className='blogImg' src={require("./blog.png")} alt="论坛博客开发"/>
                        <p className='ItmeScript'>论坛博客开发</p>
                    </div>
                    <div className='BusImgItme'>
                        <img className='blogImg' src={require("./applets.png")} alt="微信小程序"/>
                        <p className='ItmeScript'>微信小程序开发</p>
                    </div>
                    <div className='BusImgItme'>
                        <img className='blogImg' src={require("./wechat.png")} alt="微信公众号开发"/>
                        <p className='ItmeScript'>微信公众号开发</p>
                    </div>
                </div>
            </div>
        )
    }
}

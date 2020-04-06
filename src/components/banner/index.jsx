import React, { Component } from 'react'
import './index.css'
export default class banner extends Component {
    constructor(){
        super()
        this.bannerIndex=1
        this.marginLeftNow=0
    }
    bannerLeft(){
        if(this.bannerIndex===1){
            this.banner.style.transitionDuration= 0+"ms";
            this.bannerIndex=4
            this.marginLeftNow=-25.2*(this.banner.children.length-1)
            this.banner.style.marginLeft=this.marginLeftNow+"rem"
        }
        setTimeout(()=>{
            this.banner.style.transitionDuration= 300+"ms";
            this.bannerIndex--
            this.marginLeftNow=-25.5*(this.bannerIndex-1)
            this.banner.style.marginLeft=this.marginLeftNow+"rem"
        },10)
    }
    bannerRight(){
        this.banner.style.transitionDuration= 300+"ms";
        this.marginLeftNow=-25.3*this.bannerIndex
        this.bannerIndex++
        this.banner.style.marginLeft=this.marginLeftNow+"rem"
        if(this.bannerIndex===this.banner.children.length){
            setTimeout(()=>{
                this.banner.style.transitionDuration= 0+"ms";
                this.bannerIndex=1
                this.banner.style.marginLeft=this.marginLeftNow=0
            },300)
        }
    }
    componentDidMount(){
        this.banner.style.width=1263.33*this.banner.children.length/50+"rem"
        this.setMarginLeftNum=this.banner.offsetWidth/this.banner.children.length
        window.addEventListener("resize",()=>{
            this.banner.style.transitionDuration= 0+"ms";
        })
    }
    render() {
        return (
            <div className='banner'>
                <div className="banner-inner clearfix" ref={dom=>this.banner=dom} >
                    <a href="/"><div className="banner1"></div></a>
                    <a href="/"><div className="banner2"></div></a>
                    <a href="/"><div className="banner3"></div></a>
                    <a href="/"><div className="banner1"></div></a>
                </div>
                <div className='banner-left' onClick={this.bannerLeft.bind(this)}></div>
                <div className="banner-right" onClick={this.bannerRight.bind(this)}></div>
            </div>
        )
    }
}

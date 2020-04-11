import React, { Component } from 'react'
import './index.css'
export default class banner extends Component {
    constructor(){
        super()
        this.bannerIndex=1
        this.marginLeftNow=0
        this.flag=true
        this.Interval=""
    }
    bannerLeft(){
        if(this.flag){
            this.flag=false
            clearInterval(this.Interval)
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
                this.flag=true
                this.Interval=setInterval(this.bannerRight.bind(this),5000)
            },10)
        }
    }
    bannerRight(){
        if(this.flag){
            this.flag=false
            clearInterval(this.Interval)
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
            this.flag=true
            this.Interval=setInterval(this.bannerRight.bind(this),5000)
        }
    }
    componentDidMount(){
        this.banner.style.width=1263.33*this.banner.children.length/50+"rem"
        this.setMarginLeftNum=this.banner.offsetWidth/this.banner.children.length
        window.addEventListener("resize",()=>{
            this.banner.style.transitionDuration= 0+"ms";
        })
        clearInterval(this.Interval)
        this.Interval=setInterval(this.bannerRight.bind(this),5000)
        this.banner.addEventListener("mouseover",()=>{
            clearInterval(this.Interval)
            this.bannerL.classList.toggle("banner-opacity")
            this.bannerR.classList.toggle("banner-opacity")
        })
        this.banner.addEventListener("mouseout",()=>{
            this.Interval=setInterval(this.bannerRight.bind(this),5000)
            this.bannerL.classList.toggle("banner-opacity")
            this.bannerR.classList.toggle("banner-opacity")
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
                <div className='banner-left banner-opacity' onClick={this.bannerLeft.bind(this)} ref={dom=>this.bannerL=dom}></div>
                <div className="banner-right banner-opacity" onClick={this.bannerRight.bind(this)} ref={dom=>this.bannerR=dom}></div>
            </div>
        )
    }
}

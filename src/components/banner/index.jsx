import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
export default class banner extends Component {
    constructor(){
        super()
        this.bannerIndex=1
        this.auto=true
        this.state={
            bannerArr:[]
        }
        this.marginLeftNow=0
        this.flag=true
        this.Interval=""
        this.removeTransition=this.removeTransition.bind(this)
    }
    getBanner(callback){
        axios.get("/qk/Advertise_Con/show_adve").then(suc=>{
            if(!Array.isArray(suc.data)){return}
            this.setState({bannerArr:suc.data},callback)
        }).catch(err=>{
            console.log(err)
        })
    }
    bannerLeft(){
        if(this.flag){
            this.flag=false
            if(this.bannerIndex===1){
                this.banner.style.transitionDuration= 0+"ms";
                this.bannerIndex=this.banner.children.length
                this.marginLeftNow=-25.2*(this.banner.children.length-1)
                this.banner.style.marginLeft=this.marginLeftNow+"rem"
            }
            setTimeout(()=>{
                this.banner.style.transitionDuration= 300+"ms";
                this.bannerIndex--
                this.marginLeftNow=-25.5*(this.bannerIndex-1)
                this.banner.style.marginLeft=this.marginLeftNow+"rem"
                this.flag=true
            },10)
        }
    }
    bannerRight(){
        if(this.flag){
            this.flag=false
            this.banner.style.transitionDuration= 300+"ms";
            this.marginLeftNow=-25.266*this.bannerIndex
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
        }
    }
    removeTransition(){
        this.banner.style.transitionDuration= 0+"ms";
    }
    componentDidMount(){
        this.getBanner(()=>{
            this.banner.style.width=1263.33*this.banner.children.length/50+"rem"
            this.setMarginLeftNum=this.banner.offsetWidth/this.banner.children.length
            window.addEventListener("resize",this.removeTransition)
            clearInterval(this.Interval)
            this.Interval=setInterval(this.bannerRight.bind(this),5000)
            this.bannerOut.addEventListener("mouseover",()=>{
                clearInterval(this.Interval)
                this.bannerL.classList.toggle("banner-opacity")
                this.bannerR.classList.toggle("banner-opacity")
            })
            this.bannerOut.addEventListener("mouseout",()=>{
                this.Interval=setInterval(this.bannerRight.bind(this),5000)
                this.bannerL.classList.toggle("banner-opacity")
                this.bannerR.classList.toggle("banner-opacity")
            })
        })
    }
    componentWillUnmount(){
        console.log(1)
        clearInterval(this.Interval)
        window.removeEventListener("resize",this.removeTransition)
    }
    render() {
        return (
            <div className='banner' ref={dom=>this.bannerOut=dom}>
                <div className="banner-inner clearfix" ref={dom=>this.banner=dom} >
                    {
                        this.state.bannerArr.map((item,index)=>{
                            return(
                                <a href="/" key={index+"item"}><img src={item} alt="" className="bannerImg"/></a>
                            )
                        })
                    }
                    <a href="/"><img src={this.state.bannerArr[0]} alt="" className="bannerImg"/></a>
                </div>
                <div className='banner-left banner-opacity' onClick={this.bannerLeft.bind(this)} ref={dom=>this.bannerL=dom}></div>
                <div className="banner-right banner-opacity" onClick={this.bannerRight.bind(this)} ref={dom=>this.bannerR=dom}></div>
            </div>
        )
    }
}

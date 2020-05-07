import React, { Component } from 'react'
import "./iconfont.css"
import Axios from 'axios'
export default class worksItem extends Component {
    constructor(){
        super()
        this.state={
            collectedArr:[]
        }
        //判断用户收藏的东西来点红星星
        Axios.get('/wk/Collect_Con/UserCollect').then((suc)=>{
            if(suc.data.retuen==="还没有进行登录哦"){
                return
            }
            let arr=suc.data.contect.map(item=>{
                return item[0].id
            })
            this.setState({collectedArr:arr})
        }).catch((err)=>{
            console.log(err)
        })
    }
    setStar(e){
        //是否无作品
        if(!e.target.dataset.id){
            alert("无作品")
            return
        }
        //判断是否登录
        if(document.cookie.indexOf('id')!==-1){
            e.persist()
            Axios.get('/wk/Collect_Con/CollectAdd',{
                params:{
                    wid:e.target.dataset['id']
                }
            }).then((suc)=>{
                if(suc.data.return==="收藏成功"){
                    e.target.classList.add("collected")
                }else if (suc.data.return==="取消收藏成功"){
                    e.target.classList.remove("collected")
                }
            }).catch((err)=>{
                console.log(err)
            })
        }else{
            alert('请先登录')
        }
    }
    render() {
        return (
            <div className="worksItem-outer">
                {/* <div className="work-item">
                    <p className="work-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <img src="" alt="" className="works-img"/>
                    <div className="word-name">案例欣赏一<i onClick={this.setStar.bind(this)}  className="word-icon">&#xe60a;</i></div>
                </div> */}
                {
                    this.props.contest.map((item,index)=>{
                        return(
                            item.content?
                            <div className="work-item" key={index}>
                                <p className="work-words">{item.content} </p>
                                <img src={item.picture} alt="" className="works-img"/>
                                <div className="word-name">
                                    {item.name}
                                    {
                                        this.state.collectedArr.indexOf(item.id)===-1?
                                        <i onClick={this.setStar.bind(this)} className="word-icon" data-id={item.id} >&#xe60a;</i>
                                        :
                                        <i onClick={this.setStar.bind(this)} className="word-icon collected" data-id={item.id} >&#xe60a;</i>
                                    }
                                </div>
                            </div>
                            :
                            <div className="work-item" style={{visibility:"hidden"}} key={index}>
                                <p className="work-words">{item.content} </p>
                                <img src={item.picture} alt="" className="works-img"/>
                                <div className="word-name">
                                    {item.name}
                                    {
                                        this.state.collectedArr.indexOf(item.id)===-1?
                                        <i onClick={this.setStar.bind(this)} className="word-icon" data-id={item.id} >&#xe60a;</i>
                                        :
                                        <i onClick={this.setStar.bind(this)} className="word-icon collected" data-id={item.id} >&#xe60a;</i>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

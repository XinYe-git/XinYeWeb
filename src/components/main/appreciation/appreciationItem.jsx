import React, { Component } from 'react'
import axios from 'axios'
export default class appreciationItem extends Component {
    constructor(){
        super()
        this.state={
            appreciationItem:[]
        }
        axios.get('/wk/Works_con/WorksSeek',{
            params:{
                num:6
            }
        }).then((suc)=>{
            this.setState({appreciationItem:suc.data.contest})
        },(err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className='appreciation-show'>
                {/* appreciation-item是每个案例，里面有类appreciation-item-img表示图片（img），类appreciation-item-words表示标题（p） */}
                {/* <div className="appreciation-item">
                    <img className="appreciation-item-img" src="" alt=""/>
                    <p className="appreciation-item-words">案例样式1</p>
                </div> */}
                {
                    this.state.appreciationItem.map((item,index)=>{
                        return(
                            <div className="appreciation-item" key={index}>
                                <img className="appreciation-item-img" src={item.picture} alt={item.content}/>
                                <p className="appreciation-item-words">{item.designation}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class newsItem extends Component {
    render() {
        return (
            <div>
                {/* <div className="newsItem">
                    <div className="newItemTitle">Redis数据结构与对象(一)</div>
                    <p className="newItemWords">
                    Redis没有直接使用C语言传统的字符串表示，而是自己构建了一种名为简单动态字符串(SDS)的抽象类型，并将SDS作为Redis的默认字符串表示。在Redis的里面，包含字符串的键值对(键和值都是)在底层都是由SDS实现的。
                    </p>
                    <div className="newItemDate">2019年8月7日</div>
                    <div className="newItemImg"></div>
                </div> */}
                {
                    this.props.contest.map((item,index)=>{
                        return(
                            <div className="newsItem" key={index}>
                                <div className="newItemTitle">{item.title}</div>
                                <p className="newItemWords">
                                {item.content}
                                </p>
                                <div className="newItemDate">{item.time}</div>
                                <img className="newItemImg" src={item.image} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

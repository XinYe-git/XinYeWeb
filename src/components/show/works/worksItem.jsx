import React, { Component } from 'react'
import "./iconfont.css"
export default class worksItem extends Component {
    setStar(e){
        e.target.classList.toggle("collected")
    }
    render() {
        return (
            <div className="worksItem-outer">
                <div className="work-item">
                    <p className="work-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <img src="" alt="" className="works-img"/>
                    <div className="word-name">案例欣赏一<i onClick={this.setStar.bind(this)}  className="word-icon">&#xe60a;</i></div>
                </div>
                <div className="work-item">
                    <p className="work-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <img src="" alt="" className="works-img"/>
                    <div className="word-name">案例欣赏一<i onClick={this.setStar.bind(this)} className="word-icon">&#xe60a;</i></div>
                </div>
            </div>
        )
    }
}

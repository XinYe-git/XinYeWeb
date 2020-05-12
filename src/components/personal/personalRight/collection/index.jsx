import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
export default class collection extends Component {
    constructor(){
        super()
        this.state={
            collectionArr:[]
        }
    }
    componentDidMount(){
        axios.get('/wk/Collect_Con/UserCollect').then((suc)=>{
            let arr=suc.data.contect.filter(item=>{
                return item!=="改作品不存在"
            })
            this.setState({collectionArr:arr})
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="collection">
                {/* <div className="collection-item">
                    <img src={require('../AttendanceSheet/checkIn.png')} alt=""/>
                    <p className="collection-item-name">官网</p>
                </div> */}
                {
                    this.state.collectionArr.map((item,index)=>{
                        return(
                            <div className="collection-item" key={index}>
                                <img src={this.defaultsImg+item[0].picture} alt=""/>
                                <p className="collection-item-name">{item[0].name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

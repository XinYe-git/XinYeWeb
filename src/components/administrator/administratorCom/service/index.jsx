import React, { Component } from 'react'
import Axios from 'axios'
export default class service extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            maxPage:1,
            serviceArr:[],
            deleteArr:[]
        }
        this.getUser()
    }
    getUser(){
        Axios.get("/ygq/user_ques/index").then(suc=>{
            if(!Array.isArray(suc.data.message)){return}
            this.setState({
                maxPage:suc.data.pages,
                serviceArr:suc.data.message
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    nextPage(){
        if(this.state.page>=this.state.maxPage){
            alert("已到达最大页")
            return
        }
        this.setState({page:this.state.page+1},()=>{
            this.getUser(this.state.page)
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            window.pageYOffset = 0
        })
    }
    setDeleteArr(e){
        if(e.target.checked){
            let arr=this.state.deleteArr
            arr.push(e.target.value)
            arr.sort()
            this.setState({
                deleteArr:arr
            })
        }else{
            const index=this.state.deleteArr.indexOf(e.target.value)
            let arr=this.state.deleteArr
            arr.splice(index,index+1)
            this.setState({
                deleteArr:arr
            })
        }
    }
    delete(){
        let requests=this.state.deleteArr.map((item)=>{
            return(
                Axios.get("/ygq/user_ques/del",{
                    params:{
                        id:item
                    }
                })
            )
        })
        Axios.all(requests).then(Axios.spread(function (...args) {
            window.scrollTo(0,0);
            window.location.reload()
        }));
    }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    问题反馈
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">问题</div>
                            <div className="administrator-cell">联系电话</div>
                            <div className="administrator-cell">反馈人</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {
                            this.state.serviceArr.map((item,index)=>{
                                return(
                                    <div className="administrator-tr" key={index}>
                                        <div className="administrator-cell">
                                            <p>{item.content}</p>
                                            <input type="checkbox" name="work" value={item.id} className="deletCheck" onChange={this.setDeleteArr.bind(this)}/>
                                        </div>
                                        <div className="administrator-cell"><p>{item.tel}</p></div>
                                        <div className="administrator-cell">{item.client}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="administrator-Button">
                    <div className="administrator-nextButton" onClick={this.delete.bind(this)}>删除</div>
                    <div className="administrator-nextButton" onClick={this.nextPage.bind(this)}>下一页</div>
                </div>
            </div>
        )
    }
}

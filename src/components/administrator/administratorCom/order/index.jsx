import React, { Component } from 'react'
import Axios from 'axios'
import qs from 'qs'
export default class order extends Component {
    constructor(){
        super()
        this.change=true
        this.state={
            page:1,
            maxPage:1,
            orderArr:[],
            deleteArr:[],
            changeOrder:{
                id:"",
                name:"",
                client:"",
                telt:"",
                content:"",
                money:"",
                status:"",
                bid:""
            }
        }
        this.getUser(this.state.page)
    }
    getUser(page){
        Axios.get("/ygq/user_task/index").then(suc=>{
            if(suc.data.return==="当前页面无数据！"){
                return
            }
            if(!Array.isArray(suc.data.message)){return}
            this.setState({
                maxPage:suc.data.pages,
                orderArr:suc.data.message.map(item=>{
                    item.isChange=false
                    return item
                })
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
    getStatue(statue){
        switch (statue) {
            case "0":
                return "未处理"
            case "1":
                return "已处理"
            case "2":
                return "已完成"
            case "3":
                return "未完成"
            default:
                return "未知"
        }
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
                Axios.post("/ygq/user_task/del",qs.stringify({
                    id:item
                }))
            )
        })
        Axios.all(requests).then(Axios.spread(function (...args) {
            window.scrollTo(0,0);
            window.location.reload()
        }));
    }
    setChangeOrder(e){
        let key=e.target.dataset.type
        let val=Object.assign(this.state.changeOrder,{[key]:e.target.value})
        this.setState({changeOrder:val})
    }
    changeBefore(index){
        if(this.change){
            let arr=this.state.orderArr
            arr[index].isChange=!arr[index].isChange
            let initKey=Object.assign(
                this.state.changeOrder,
                {id:arr[index].id},
                {name:arr[index].name},
                {client:arr[index].client},
                {telt:arr[index].telt},
                {content:arr[index].content},
                {money:arr[index].money},
                {status:arr[index].status},
                {bid:arr[index].bid}
            )
            this.setState({orderArr:arr,changeOrder:initKey})
        }else{
            alert("请一个一个修改")
        }
    }
    changeData(){
        let status=()=>{
            return(
                Axios.post("/ygq/user_task/StaUpdate",qs.stringify({
                    id:this.state.changeOrder.id,
                    name:this.state.changeOrder.name,
                    client:this.state.changeOrder.client,
                    telt:this.state.changeOrder.telt,
                    content:this.state.changeOrder.content,
                    money:this.state.changeOrder.money,
                    status:this.state.changeOrder.status,
                    bid:this.state.changeOrder.bid
                }))
            )
        }
        let other=()=>{
            return(
                Axios.post("/ygq/user_task/update",qs.stringify({
                    id:this.state.changeOrder.id,
                    name:this.state.changeOrder.name,
                    client:this.state.changeOrder.client,
                    telt:this.state.changeOrder.telt,
                    content:this.state.changeOrder.content,
                    money:this.state.changeOrder.money,
                    status:this.state.changeOrder.status,
                    bid:this.state.changeOrder.bid
                }))
            )
        }
        Axios.all([status(),other()]).then(Axios.spread(function (...args) {
            window.scrollTo(0,0)
            window.location.reload()
        })).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    订单信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">订单id</div>
                            <div className="administrator-cell">订单名</div>
                            <div className="administrator-cell">委托人</div>
                            <div className="administrator-cell">电话</div>
                            <div className="administrator-cell">订单内容</div>
                            <div className="administrator-cell">价格</div>
                            <div className="administrator-cell">状态</div>
                            <div className="administrator-cell">业务种类</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {
                            this.state.orderArr.map((item,index)=>{
                                return(
                                    item.isChange?
                                    <div className="administrator-tr" key={index}>
                                        <div className="administrator-cell">
                                            {item.id}
                                        </div>
                                        <div className="administrator-cell"><p><textarea name="" id="" data-type="name" onChange={this.setChangeOrder.bind(this)} value={this.state.changeOrder.name||""}></textarea></p></div>
                                        <div className="administrator-cell"><input type="text" data-type="client" onChange={this.setChangeOrder.bind(this)} value={this.state.changeOrder.client||""}/></div>
                                        <div className="administrator-cell"><input type="number" data-type="telt" onChange={this.setChangeOrder.bind(this)} value={this.state.changeOrder.telt||""}/></div>
                                        <div className="administrator-cell"><p><textarea name="" id=""  data-type="content" onChange={this.setChangeOrder.bind(this)} value={this.state.changeOrder.content||""}></textarea></p></div>
                                        <div className="administrator-cell"><input type="number" data-type="money" onChange={this.setChangeOrder.bind(this)} value={this.state.changeOrder.money||""}/></div>
                                        <div className="administrator-cell">
                                            <input type="number" min="0" max="3" data-type="status" onChange={this.setChangeOrder.bind(this)} value={this.state.changeOrder.status||""} className="statusInput"/>
                                            <div className="statusTip">0—未处理，1—已处理，2—已完成，3—未完成 </div>
                                        </div>
                                        <div className="administrator-cell">
                                            <input type="text" className="order-type" data-type="bid" onChange={this.setChangeOrder.bind(this)} value={String(this.state.changeOrder.bid)||""}/>
                                            <div className="changeData" onClick={this.changeData.bind(this)}>完成</div>
                                        </div>
                                    </div>
                                    :
                                    <div className="administrator-tr" key={index}>
                                        <div className="administrator-cell">
                                            {item.id}
                                            <input type="checkbox" name="work" value={item.id} className="deletCheck" onChange={this.setDeleteArr.bind(this)}/>
                                        </div>
                                        <div className="administrator-cell"><p>{item.name}</p></div>
                                        <div className="administrator-cell">{item.client}</div>
                                        <div className="administrator-cell">{item.telt}</div>
                                        <div className="administrator-cell"><p>{item.content}</p></div>
                                        <div className="administrator-cell">{item.money}</div>
                                        <div className="administrator-cell">{this.getStatue(item.status)}</div>
                                        <div className="administrator-cell">
                                            {item.bid}
                                            <div className="changeData" onClick={this.changeBefore.bind(this,index)}>修改</div>
                                        </div>
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

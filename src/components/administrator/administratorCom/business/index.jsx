import React, { Component } from 'react'
import Axios from 'axios'
import qs from "qs"
export default class business extends Component {
    constructor(){
        super()
        this.change=true
        this.state={
            businessArr:[],
            changeFile:"",
            showChangeImg:"",
            title:"",
            explains:""
        }
        this.getUser()
    }
    getUser(){
        Axios.get("/ygq/user_busi/index").then(suc=>{
            if(!Array.isArray(suc.data)){return}
            this.setState({
                businessArr:suc.data.map(item=>{
                    item.isChange=false
                    return item
                })
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    getAddData(e){
        this.setState({
            [e.target.dataset.type]:e.target.value
        })
    }
    showImg(e){
        if(e.target===this.changeImg){
            let file=e.target.files[0]
            if(file.size>2000000){
                alert("图片大小超过2M，请重新上传")
                return
            }
            this.setState({changeFile:file})
            let read=new FileReader()
            read.readAsDataURL(file);
            read.onloadend=()=>{
                this.setState({showChangeImg:read.result})
            }
        }else if(e.target===this.addImg){
            let file=e.target.files[0]
            if(file.size>2000000){
                alert("图片大小超过2M，请重新上传")
                return
            }
            this.setState({addFile:file})
            let read=new FileReader()
            read.readAsDataURL(file);
            read.onloadend=()=>{
                this.setState({showAddImg:read.result})
            }
        }
    }
    loadImageToBlob (url, callback) {
        if (!url || !callback) return false;
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            // 注意这里的this.response 是一个blob对象 就是文件对象
            callback(this.status === 200 ? this.response : false);
        }
        xhr.send();
        return true;
    }
    changeBefore(index){
        if(this.change){
            this.change=false
            let arr=this.state.businessArr
            arr[index].isChange=!arr[index].isChange
            this.loadImageToBlob.call(this,arr[index].image,res=>{
                this.setState({businessArr:arr,showChangeImg:arr[index].image,changeFile:res,title:arr[index].title,explains:arr[index].explains})
            })
        }else{
            alert("请一个一个修改")
        }
    }
    changeData(index,id){
        var formData = new FormData()
        formData.append("id",id)
        formData.append("title",this.state.title)
        formData.append('explains',this.state.explains)
        if(this.state.changeFile){
            formData.append("image",this.state.changeFile)
        }
        console.log(this.state.title,this.state.explains,this.state.changeFile)
        Axios({
            url:'/ygq/user_busi/update',
            method : 'post',
            headers: { "token": window.localStorage.getItem( "token" ) },
            data:formData
        }).then(suc=>{
            console.log(suc.data)
            let arr=this.state.businessArr
            arr[index].isChange=!arr[index].isChange
            this.setState({adArr:arr,showChangeImg:"",changeFile:"",title:"",explains:""})
            window.scrollTo(0,0)
            window.location.reload()
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    业务信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">业务</div>
                            <div className="administrator-cell">内容</div>
                            <div className="administrator-cell">图片</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {
                            this.state.businessArr.map((item,index)=>{
                                return(
                                    item.isChange?
                                    <div className="administrator-tr administrator-work-tr" key={index}>
                                        <div className="administrator-cell"><input type="text" onChange={this.getAddData.bind(this)} data-type="title" value={this.state.title||""}/></div>
                                        <div className="administrator-cell"><p><textarea type="text" onChange={this.getAddData.bind(this)} data-type="explains" value={this.state.explains||""}/></p></div>
                                        <input type="file" style={{display:"none"}} ref={dom=>this.changeImg=dom} accept="image/x-png,image/gif,image/jpeg" onChange={this.showImg.bind(this)} />
                                        <div className="administrator-cell administrator-work-cell">
                                            <img src={this.state.showChangeImg} alt="点击上传图片" className="addImg" onClick={()=>{this.changeImg.click()}}/>
                                            <div className="changeData" onClick={this.changeData.bind(this,index,item.id)} >完成</div>
                                        </div>
                                    </div>
                                    :
                                    <div className="administrator-tr administrator-work-tr" key={index}>
                                        <div className="administrator-cell">{item.title}</div>
                                        <div className="administrator-cell"><p>{item.explains}</p></div>
                                        <div className="administrator-cell administrator-work-cell">
                                            <img src={item.image} alt=""/>
                                            <div className="changeData" onClick={this.changeBefore.bind(this,index)}>修改</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="administrator-Button">
                </div>
            </div>
        )
    }
}

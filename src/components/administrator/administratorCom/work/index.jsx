import React, { Component } from 'react'
import Axios from 'axios'
import qs from "qs"
export default class work extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            maxPage:1,
            workArr:[],
            deleteArr:[],
            isAdd:false,
            picture:'',
            showImg:'',
            name:"",
            content:"",
            designation:""
        }
        this.getUser(this.state.page)
    }
    getUser(page){
        Axios.get("/wk/Works_con/WorksSeek",{
            params:{
                page
            }
        }).then(suc=>{
            if(suc.data.return==="没有作品了哦") return
            if(!Array.isArray(suc.data.contest)){return}
            this.setState({
                maxPage:suc.data.pages,
                workArr:suc.data.contest
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
        Axios.post("/wk/Works_con/WorksDeletes",qs.stringify({
            id:this.state.deleteArr
        })).then(suc=>{
            if(suc.data.return==="未知错误，请稍后删除"){
                alert("未知错误，请稍后删除")
                return
            }
            window.scrollTo(0,0);
            window.location.reload()
        }).catch(err=>{
            console.log(err)
        })
    }
    changeAdd(){
        this.setState({
            isAdd:!this.state.isAdd
        })
    }
    getAddData(e){
        this.setState({
            [e.target.dataset.type]:e.target.value
        })
    }
    showImg(e){
        var file=e.target.files[0]
        if(file.size>2000000){
            alert("图片大小超过2M，请重新上传")
            return
        }
        this.setState({picture:file})
        var read=new FileReader()
        read.readAsDataURL(file);
        read.onloadend=()=>{
            this.setState({showImg:read.result})
        }
    }
    sentData(){
        var formData = new FormData()
        formData.append("name",this.state.name)
        formData.append("content",this.state.content)
        formData.append("picture",this.state.picture)
        formData.append('designation',this.state.designation)
        Axios({
            url:'/wk/Works_con/WorksAdd',
            method : 'post',
            headers: { "token": window.localStorage.getItem( "token" ) },
            data:formData
        }).then(suc=>{
            if(suc.data.return==='作品添加成功'){
                window.scrollTo(0,0);
                window.location.reload()
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    作品信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">作品名</div>
                            <div className="administrator-cell">作品内容</div>
                            <div className="administrator-cell">图片</div>
                            <div className="administrator-cell">时间</div>
                            <div className="administrator-cell">作品标识</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {/* <div className="administrator-user-tr">
                            <div className="administrator-user-cell"><img src="" alt=""/></div>
                            <div className="administrator-user-cell">密码</div>
                            <div className="administrator-user-cell administrator-user-emil">41260154@qq.com</div>
                            <div className="administrator-user-cell">性别</div>
                            <div className="administrator-user-cell">职业</div>
                            <div className="administrator-user-cell">手机号</div>
                            <div className="administrator-user-cell">地址</div>
                            <div className="administrator-user-cell">签到时长</div>
                        </div> */}
                        {
                            this.state.workArr.map((item,index)=>{
                                return(
                                    <div className="administrator-tr administrator-work-tr" key={index}>
                                        <div className="administrator-cell">  
                                            {item.name}
                                            <input type="checkbox" name="work" value={item.id} className="deletCheck" onChange={this.setDeleteArr.bind(this)}/>
                                        </div>
                                        <div className="administrator-cell"><p>{item.content}</p></div>
                                        <div className="administrator-cell administrator-work-cell"><img src={item.picture} alt=""/></div>
                                        <div className="administrator-cell">{item.time}</div>
                                        <div className="administrator-cell">{item.designation}</div>
                                    </div>
                                )
                            })
                        }
                        {
                            this.state.isAdd&&
                            <div className="administrator-tr administrator-work-tr" >
                                <div className="administrator-cell">  
                                    <input type="text" data-type="name" onChange={this.getAddData.bind(this)}/>
                                </div>
                                <div className="administrator-cell"><p><textarea name="" id="" cols="30" rows="10" data-type="content" onChange={this.getAddData.bind(this)} ></textarea></p></div>
                                <input type="file" style={{display:"none"}} ref={dom=>this.img=dom} accept="image/x-png,image/gif,image/jpeg" onChange={this.showImg.bind(this)} />
                                <div className="administrator-cell administrator-work-cell"><img src={this.state.showImg} alt="点击上传图片" onClick={()=>this.img.click()} className="addImg"/></div>
                                <div className="administrator-cell"></div>
                                <div className="administrator-cell"><input type="text" data-type="designation" onChange={this.getAddData.bind(this)}  /></div>
                            </div>
                        }
                    </div>
                </div>
                {
                    this.state.isAdd?
                    <div className="administrator-add">
                        <div className="administrator-add-before" onClick={this.sentData.bind(this)}>完成</div>
                        <div className="administrator-add-before" onClick={this.changeAdd.bind(this)}>取消</div>
                    </div>
                    :
                    <div className="administrator-add">
                        <div className="administrator-add-before" onClick={this.changeAdd.bind(this)}>+</div>
                    </div> 
                }
                <div className="administrator-Button">
                    <div className="administrator-nextButton" onClick={this.delete.bind(this)}>删除</div>
                    <div className="administrator-nextButton" onClick={this.nextPage.bind(this)}>下一页</div>
                </div>
            </div>
        )
    }
}

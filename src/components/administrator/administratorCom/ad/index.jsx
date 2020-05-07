import React, { Component } from 'react'
import Axios from 'axios'
export default class ad extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            maxPage:1,
            adArr:[],
            deleteArr:[],
            isAdd:false,
            showAddImg:"",
            addFile:"",
            picture:"",
            showChangeImg:"",
            changeFile:"",
            changePicture:""
        }
        this.getUser(this.state.page)
    }
    getUser(page){
        Axios.get("/qk/Advertise_Con/index",{
            params:{
                page
            }
        }).then(suc=>{
            if(!Array.isArray(suc.data.advertise)){return}
            this.setState({
                maxPage:suc.data.pages,
                adArr:suc.data.advertise.map(item=>{
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
                Axios.get("/qk/Advertise_Con/delete",{
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
    sentData(){
        var formData = new FormData()
        formData.append('file',this.state.addFile)
        formData.append("picture",this.state.picture)
        Axios({
            url:'/qk/Advertise_Con/add',
            method : 'post',
            headers: { "token": window.localStorage.getItem( "token" ) },
            data:formData
        }).then(suc=>{
            if(suc.data==='广告新增成功!'){
                window.scrollTo(0,0);
                window.location.reload()
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    // changeBefore(index){
    //     let arr=this.state.adArr
    //     arr[index].isChange=!arr[index].isChange
    //     this.setState({adArr:arr,showChangeImg:arr[index].link,changeFile:"",changePicture:arr[index].picture})
    // }
    // changeData(index,id){
    //     var formData = new FormData()
    //     formData.append("id",id)
    //     if(this.state.changeFile){
    //         formData.append('file',this.state.changeFile)
    //         console.log(1)
    //     }
    //     formData.append("picture",this.state.changePicture)
    //     Axios({
    //         url:'/qk/Advertise_Con/update',
    //         method : 'post',
    //         headers: { "token": window.localStorage.getItem( "token" ) },
    //         data:formData
    //     }).then(suc=>{
    //         console.log(suc.data)
    //         let arr=this.state.adArr
    //         arr[index].isChange=!arr[index].isChange
    //         this.setState({adArr:arr,showChangeImg:"",changeFile:"",changePicture:""})

    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }
    render() {
        return (
            <div className="administrator-data">
                <div className="administrator-title">
                    广告信息
                </div>
                <div className="administrator-content">
                    <div className="administrator-head">
                        <div className="administrator-tr">
                            <div className="administrator-cell">广告名</div>
                            <div className="administrator-cell">图片</div>
                        </div>
                    </div>
                    <div className="administrator-body">
                        {
                            this.state.adArr.map((item,index)=>{
                                return(
                                    item.isChange?
                                    <div className="administrator-tr administrator-work-tr" key={index}>
                                        {/* <div className="administrator-cell">
                                            <input type="text" data-type="changePicture" onChange={this.getAddData.bind(this)} value={this.state.changePicture}/>
                                        </div>
                                        <div className="administrator-cell administrator-ad-cell">
                                            <input type="file" style={{display:"none"}} ref={dom=>this.changeImg=dom} accept="image/x-png,image/gif,image/jpeg" onChange={this.showImg.bind(this)} />
                                            <img src={this.state.showChangeImg} alt="点击修改图片" className="addImg" onClick={()=>{this.changeImg.click()}}/>
                                            <div className="changeData" onClick={this.changeData.bind(this,index,item.id)} >完成</div>
                                        </div> */}
                                    </div>
                                    :
                                    <div className="administrator-tr administrator-work-tr" key={index}>
                                        <div className="administrator-cell">
                                            {item.picture}
                                            <input type="checkbox" name="work" value={item.id} className="deletCheck" onChange={this.setDeleteArr.bind(this)}/>
                                        </div>
                                        <div className="administrator-cell administrator-ad-cell">
                                            <img src={item.link} alt=""/>
                                            {/* <div className="changeData" onClick={this.changeBefore.bind(this,index)}>修改</div> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            this.state.isAdd&&
                            <div className="administrator-tr administrator-work-tr" >
                                <div className="administrator-cell">  
                                    <input type="text" data-type="picture" onChange={this.getAddData.bind(this)}/>
                                </div>
                                <input type="file" style={{display:"none"}} ref={dom=>this.addImg=dom} accept="image/x-png,image/gif,image/jpeg" onChange={this.showImg.bind(this)} />
                                <div className="administrator-cell administrator-ad-cell">
                                    <img src={this.state.showAddImg} alt="点击上传图片" onClick={()=>this.addImg.click()} className="addImg"/>
                                </div>
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

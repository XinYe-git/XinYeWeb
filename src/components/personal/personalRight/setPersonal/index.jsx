import React, { Component } from 'react'
import './index.css'
import {connect} from 'react-redux'
import axios from 'axios'
class setPersonal extends Component {
    constructor(){
        super()
        this.userChange=this.userChange.bind(this)
        this.getImg=this.getImg.bind(this)
        this.state={
            imgFile:'',
            showImg:'',
            userName:'',
            userNameChange:false,
            phone:"",
            phoneChange:false,
            email:'',
            emailChange:false,
            profession:'设计师',
            professionChange:false,
            passWords:'#####',
            passWordsChange:false,
            sex:0,
            shengArr:[],
            shiArr:[]
        }
    }
    componentDidMount(){
        //将store内的信息赋值给props
        this.setState({
            showImg:this.props.personalData.head,
            userName:this.props.personalData.name,
            phone:this.props.personalData.tele,
            email:this.props.personalData.mail,
            profession:this.props.personalData.professions,
            sex:this.props.personalData.sex
        },()=>{
            //判断sex为0还是1来选择性别的选项
            if(this.state.sex===1){
                this.man.removeAttribute('checked')
                this.woman.setAttribute('checked',"")
            }else{
                this.woman.removeAttribute('checked')
                this.man.setAttribute('checked',"")
            }
        })
        //获取所有的省信息保存到state中
        axios.get('/wk/User_Con/GetCity').then((suc)=>{
            this.setState({shengArr:suc.data})
        }).catch((err)=>{
            console.log(err)
            alert('获取省信息失败')
        })
    }
    //这个是根据父元素的class来判断要修改的state，所以class一定要与state元素相同，条件渲染的判断元素是当前class名字+Change
    userChange(e){
        const name=e.target.parentElement.className+'Change'
        if(this.state[name]){
            const val=e.target.parentElement.querySelector('input').value
            const key=e.target.parentElement.className    
            this.setState({[name]:false,[key]:val})
        }else{
            this.setState({[name]:true})
        }
    }
    //判断图片大小并展示，并且包装图片成可以发送的数据
    getImg(){
        var read=new FileReader()
        var file=this.imgFile.files[0]
        if(file.size>2000000){
            alert("图片大小超过2M，请重新上传")
            return
        }
        var formData = new FormData();
        formData.append('picture',file);
        this.setState({imgFile:formData})
        read.readAsDataURL(file)
        read.onloadend=()=>{
            this.setState({showImg:read.result})
        }
    }
    //判断省获取市
    getCity(e){
        var selectIndex=e.target.selectedIndex
        var selectId=e.target.options[selectIndex].value
        if(selectId){
            axios.get('/wk/User_Con/GetCity',{
                params:{
                    city:selectId
                }
            }).then((suc)=>{
                this.setState({shiArr:suc.data})
            }).catch((err)=>{
                console.log(err)
                alert('获取市失败')
            })
        }else{
            this.setState({shiArr:[]})
        }
    }
    render() {
        return (
            <div className='setPersonal'>
                <div className="userNameAndImg">
                    <input type="file" onChange={this.getImg} className="imgFile" ref={(dom)=>{this.imgFile=dom}} accept="image/x-png,image/gif,image/jpeg"/>
                    <div className="userImg-outter">
                    <img className='userImg' onClick={()=>{this.imgFile.click()}} ref={(dom)=>{this.imgShow=dom}} src={this.state.showImg} alt=""/>
                    </div>
                    {
                        this.state.userNameChange?
                        <div className='userName'>
                            <input type="text" className='changeInput' defaultValue={this.state.userName}/>
                            <div className="userChange" onClick={this.userChange}>完成</div>
                        </div>
                        :
                        <div className='userName'>
                            {this.state.userName}
                            <div className="userChange" onClick={this.userChange}>修改</div>
                        </div>
                    }
                </div>
                <div className="DataOuteer">
                    {
                        this.state.phoneChange?
                        <div className="phone">
                            <span className="setName">手机号</span>
                            <span className='phoneData'><input type="text" className='changeInput' defaultValue={this.state.phone}/></span>
                            <div className="userChange" onClick={this.userChange}>完成</div>
                        </div>
                        :
                        <div className="phone">
                            <span className="setName">手机号</span>
                            <span className='phoneData'>{this.state.phone}</span>
                            <div className="userChange" onClick={this.userChange}>修改</div>
                        </div>
                    }
                </div>
                <div className="DataOuteer">
                    {
                        this.state.emailChange?
                        <div className="email">
                            <span className="setName">邮箱</span>
                            <span className='emailData'><input type="text" className='changeInput' defaultValue={this.state.email}/></span>
                            <div className="userChange" onClick={this.userChange}>完成</div>
                        </div>
                        :
                        <div className="email">
                            <span className="setName">邮箱</span>
                            <span className='emialData'>{this.state.email}</span>
                            <div className="userChange" onClick={this.userChange}>修改</div>
                        </div>
                    }
                </div>
                <div className="DataOuteer">
                    <div className="sex">
                        <span className="setName">性别</span>
                        <input type="radio" name='sex' id='man' value='man' ref={(dom)=>this.man=dom}/>
                        <label htmlFor="man">男</label>
                        <input type="radio" name='sex' id='woman' value='woman' ref={(dom)=>this.woman=dom}/>
                        <label htmlFor="woman">女</label>
                    </div>
                </div>
                <div className="DataOuteer">
                    <div className="place">
                        <span className="setName">现居</span>
                        <select name="province" id="province" onChange={this.getCity.bind(this)}>
                            <option value="">省份</option>
                            {
                                this.state.shengArr.map((item,index)=>{
                                    return(
                                    <option value={item.id} key={index}>{item.cn_name}</option>
                                    )
                                })
                            }
                        </select>
                        <select name="city" id="city">
                            <option value="" >城市</option>
                            {
                                this.state.shiArr.map((item,index)=>{
                                    return(
                                    <option value={item.id} key={index}>{item.cn_name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="DataOuteer">
                    {
                        this.state.professionChange?
                        <div className="profession">
                            <span className="setName">职业</span>
                            <span className='professionData'><input type="text" className='changeInput' defaultValue={this.state.profession}/></span>
                            <div className="userChange" onClick={this.userChange}>完成</div>
                        </div>
                        :
                        <div className="profession">
                            <span className="setName">职业</span>
                            <span className='professionData'>{this.state.profession}</span>
                            <div className="userChange" onClick={this.userChange}>修改</div>
                        </div>
                    }
                </div>
                <div className="DataOuteer">
                    {
                        this.state.passWordsChange?
                        <div className="passWords">
                            <span className="setName">登录密码</span>
                            <span className='passWordsData'><input type="text" className='changeInput' defaultValue=''/></span>
                            <div className="userChange" onClick={this.userChange}>完成</div>
                        </div>
                        :
                        <div className="passWords">
                            <span className="setName">登录密码</span>
                            <span className='passWordsData'>{this.state.passWords}</span>
                            <div className="userChange" onClick={this.userChange}>修改</div>
                        </div>
                    }
                </div>
                <div className="completeChange">确认修改</div>
            </div>
        )
    }
}
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(setPersonal)
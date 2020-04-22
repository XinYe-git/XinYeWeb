import React, { Component } from 'react'
import './index.css'
export default class setPersonal extends Component {
    constructor(){
        super()
        this.userChange=this.userChange.bind(this)
        this.getImg=this.getImg.bind(this)
        this.state={
            imgFile:'',
            showImg:'',
            userName:'用户123',
            userNameChange:false,
            phone:12345678901,
            phoneChange:false,
            email:'785277659@168.com',
            emailChange:false,
            profession:'设计师',
            professionChange:false,
            passWords:'#####',
            passWordsChange:false
        }
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
                        <input type="radio" name='sex' id='man' value='man' defaultChecked/>
                        <label htmlFor="man">男</label>
                        <input type="radio" name='sex' id='woman' value='woman'/>
                        <label htmlFor="woman">女</label>
                    </div>
                </div>
                <div className="DataOuteer">
                    <div className="place">
                        <span className="setName">现居</span>
                        <select name="province" id="province">
                            <option value=""  >省份</option>
                        </select>
                        <select name="city" id="city">
                            <option value=""  >城市</option>
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
            </div>
        )
    }
}

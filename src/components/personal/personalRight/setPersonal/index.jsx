import React, { PureComponent } from 'react'
import './index.css'
import {connect} from 'react-redux'
import axios from 'axios'
import qs from 'qs'
class setPersonal extends PureComponent {
    constructor(){
        super()
        this.userChange=this.userChange.bind(this)
        this.getImg=this.getImg.bind(this)
        this.state={
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
            shiArr:[],
            sheng:"北京市",
            shi:""
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
            sex:this.props.personalData.sex,
            sheng:this.props.personalData.address_sheng,
            shi:this.props.personalData.address_shi
        },()=>{
            //判断sex为0还是1来选择性别的选项
            if(this.state.sex==='1'){
                this.sex.querySelector("#man").removeAttribute('checked')
                this.sex.querySelector("#woman").setAttribute('checked',"")
            }else{
                this.sex.querySelector("#woman").removeAttribute('checked')
                this.sex.querySelector("#man").setAttribute('checked',"")
            }
        })
        //获取所有的省信息保存到state中
        axios.get('/wk/User_Con/GetCity').then((suc)=>{
            this.setState({shengArr:suc.data},()=>{
                //如果有省就返回所有市
                if(this.state.sheng!=="未填写"){
                    let shengArr=this.state.shengArr.filter(item=>{
                        return item.cn_name===this.state.sheng
                    })
                    let id=shengArr[0].id
                    axios.get('/wk/User_Con/GetCity',{
                        params:{
                            city:id
                        }
                    }).then((suc)=>{
                        this.setState({shiArr:suc.data})
                    }).catch((err)=>{
                        console.log(err)
                        alert('获取市失败')
                    })
                }
            })
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
            //name,mail,tele,professions的字符判断
            switch(e.target.dataset["type"]){
                case ("name"):
                    if(!/^.{1,4}$/.test(val)){
                        alert("名字长度在1-4字符之间")
                        this.setState({[name]:false})
                        return
                    }
                break
                case("mail"):
                if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)){
                    alert("请输入正确的电子邮箱")
                    this.setState({[name]:false})
                    return
                }
                break
                case("tele"):
                    if(!/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(val)){
                        alert("请输入正确的手机号")
                        this.setState({[name]:false})
                        return
                    }
                break
                case("professions"):
                    if(!/^.{1,3}$/.test(val)){
                        alert("职业的字符长度为1-3，请重新输入")
                        this.setState({[name]:false})
                        return
                    }
                break
                default:
                    alert("未知错误")
                    this.setState({[name]:false})
                    return
            }    
            this.setState({[name]:false,[key]:val})
            axios.post("/wk/User_Con/ReviseDeal",qs.stringify({
                key:e.target.dataset["type"],
                value:val
            })).then((suc)=>{
                console.log(suc)
                if(suc.data.return==="修改成功"){
                    alert("修改成功")
                    window.location.reload()
                }else if(suc.data.return==="未知错误,也许是你还没有进行修改哦"){
                    alert("修改成功")
                    window.location.reload()
                }else{
                    alert("未知错误")
                }
            }).catch((err)=>{
                console.log(err)
            })
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
        var formData = new FormData()
        formData.append("key","head")
        formData.append('value',file)
        console.log(formData.get("value"))
        read.readAsDataURL(file)
        read.onloadend=()=>{
            this.setState({showImg:read.result})
            axios({
                url:'/wk/User_Con/ReviseDeal',
                method : 'post',
                headers: { "token": window.localStorage.getItem( "token" ) },
                data:formData
            }).then(suc=>{
                console.log(suc)
            }).catch(err=>{
                console.log(err)
            })
        }

    }
    //判断省获取市并提交省
    getCity(e){
        var selectIndex=e.target.selectedIndex
        var selectId=e.target.options[selectIndex].dataset["name"]
        if(selectId){
            //获取市
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
            // 修改省
            let val=e.target.options[selectIndex].innerText
            axios.post('/wk/User_Con/ReviseDeal',qs.stringify({
                key:'address_sheng',
                value:val
            })).then(suc=>{
                console.log(suc.data)
                this.setState({sheng:val})
            }).catch(err=>{
                console.log(err)
            })
            //将市初始化
            axios.post('/wk/User_Con/ReviseDeal',qs.stringify({
                key:'address_shi',
                value:'未填写'
            })).then(suc=>{
                this.setState({shi:"未填写"})
            }).catch(err=>{
                console.log(err)
            })
        }else{
            this.setState({shiArr:[]})
        }
    }
    //提交市
    setCity(e){
        var selectIndex=e.target.selectedIndex
        let val=e.target.options[selectIndex].innerText
        console.log(val)
        axios.post('/wk/User_Con/ReviseDeal',qs.stringify({
            key:'address_shi',
            value:val
        })).then(suc=>{
            console.log(suc.data)
            this.setState({shi:val})
        }).catch(err=>{
            console.log(err)
        })
    }
    //改变性别并发送
    sexChange(e){
        console.log(e.target.value)
        axios.post("/wk/User_Con/ReviseDeal",qs.stringify({
            key:'sex',
            value:e.target.value
        })).then(suc=>{
            console.log(suc.data)
        }).catch(err=>{
            console.log(err)
        })
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
                            <div className="userChange" onClick={this.userChange} data-type="name">完成</div>
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
                            <div className="userChange" onClick={this.userChange} data-type="tele">完成</div>
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
                            <div className="userChange" onClick={this.userChange} data-type="mail">完成</div>
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
                    <div className="sex" ref={dom=>this.sex=dom}>
                        <span className="setName">性别</span>
                        <input type="radio" name='sex' id='man' value="0" onChange={this.sexChange.bind(this)}/>
                        <label htmlFor="man">男</label>
                        <input type="radio" name='sex' id='woman' value="1" onChange={this.sexChange.bind(this)}/>
                        <label htmlFor="woman">女</label>
                    </div>
                </div>
                <div className="DataOuteer">
                    <div className="place">
                        <span className="setName">现居</span>
                        <select name="province" id="province" onChange={this.getCity.bind(this)}  value={this.state.sheng}>
                            <option value="" data-name="">省份</option>
                            {
                                this.state.shengArr.map((item,index)=>{
                                    return(
                                            <option value={item.cn_name} data-name={item.id} key={index} >{item.cn_name}</option>
                                    )
                                })
                            }
                        </select>
                        <select name="city" id="city" onChange={this.setCity.bind(this)} value={this.state.shi}>
                            <option value="address_shi" data-name="" >城市</option>
                            {
                                this.state.shiArr.map((item,index)=>{
                                    return(
                                    <option value={item.cn_name} key={index} data-name={item.id}>{item.cn_name}</option>
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
                            <div className="userChange" onClick={this.userChange} data-type="professions">完成</div>
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
const storeToProps=(store)=>{
    return store
}
export default connect(storeToProps)(setPersonal)
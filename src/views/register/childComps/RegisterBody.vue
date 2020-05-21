<template>
  <div class="register-body">
    <form>
      <div class="username ">
        <label>用户名</label><input placeholder="请设置用户名" v-model="name">
      </div>
      <div class="useremail ">
        <label>邮箱号</label><input placeholder="请填写常用邮箱号" v-model="mail">
      </div>
      <div class="userpassword ">
        <label>密码</label><input type="password" placeholder="6-14个字符组成，区分大小写" v-model="password">
      </div>
      <div class="check">
        <label>验证码</label><input placeholder="请输入验证码" v-model="test">
        <div class="checked">
          <button class="checkbutton" @click="SendCode"  type="button" :disabled="isRun">{{isRun?`${runTime}s后获取`:'获取验证码'}}</button>
        </div>
      </div>
      <div class="register">
        <button  @click="registered" type="button" :disabled="isregistered">注册</button>
      </div>
      <div class="agree">
        <input type="checkbox" @click="readCheck">阅读并接受<a>《新叶用户协议》</a>及<a>《新叶隐私保护声明》</a>
      </div>
    </form>
  </div>
</template>

<script>
  import {checkName,check,admitValue,checkMail} from 'network/register'
  export default {
    name: "RegisterBody",
    data(){
      return{
        name:'',
        mail:'',
        password:'',
        test:'',
        //倒计时
        isRun:false,
        runTime:30,
        //注册
        isregistered:true
      }
    },
    methods:{
      async SendCode(){
        if(this.isRun)return
        //验证邮箱
        if(!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.mail)){
          alert('邮箱错误');
          return
        }

        // 验证邮箱和帐号是否重复
        // let data_name=await checkName(this.name)
        let data_mail=await checkMail(this.mail)
        if(data_mail.return==='此mail已经存在'){
          alert('邮箱已经被注册')
          return
        }
        //邮箱验证码
        await check(this.mail)

        //倒计时
        this.isRun=true
        this.autoTime=setInterval(()=>{
          if(this.runTime===0){
            this.runTime=30
            this.isRun=false
            clearInterval(this.autoTime)
            return
          }
          this.runTime--
        },1000)

      },
      async registered(){
        //正则判断
        //邮箱
        if(!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.mail)){
          alert('邮箱不规范');
          return
        }
        //帐号
        if(!/^.{2,10}$/.test(this.name)){
          alert('帐号不规范');
          return
        }
        //密码
        if(!/^.{5,15}$/.test(this.password)){
          alert('密码不规范');
          return
        }
        //注册
        let data= await admitValue(this.name,this.password,this.mail,this.test)
        if(data.return==='用户注册成功'){
          this.$router.push('/login')
        }else {
          alert('输入有错')
        }

      },
      readCheck(){
        this.isregistered=!this.isregistered
      }
    }
  }
</script>

<style scoped>
  .register-body{
    text-align: center;
    width: 640px;
  }
  label{
    letter-spacing:10px;
    font-weight: bold;
    font-size: 24px;
  }

  .userpassword label{
    letter-spacing:25px
  }

  input{
    width: 350px;
    height: 62px;
    margin-top: 36px;
    margin-left: 50px;
    border-color:#919492 ;
    border-radius: 10px;
    text-indent: 14px;
    font-size: 19px;
  }

  .check input{
    width: 204px;
    height: 60px;

  }
  .checked{
    width: 152px;
    height: 60px;
    display: inline-block;
  }

  .checkbutton{
    width: 122px;
    height: 60px;
    font-size: 22px;
  }

  .register button{
    width: 506px;
    height: 60px;
    border-radius: 30px;
    border: none;
    margin-top: 52px;
    background: #abb2e8;
    color: #fff;
    font-size: 22px;
  }
  .agree input{
    width: 15px;
    height: 15px;
    margin-right: 8px;
    vertical-align:bottom
  }
  .agree{
    font-size: 13px;
  }
  a{
    color: #2491ed;
    text-decoration:underline;
  }
  .username,.useremail,.userpassword,.check,.register{
    height: 120px;
  }
</style>
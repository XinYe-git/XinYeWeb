<template>
  <div class="register-body">
    <div class="xinyebar-user"><img src="~assets/img/login/user.png"></div>
    <form>
      <div class="useremail ">
        <label>用户名</label><input placeholder="请填写用户名" v-model="name">
      </div>
      <div class="userpassword ">
        <label>密码</label><input type="password" placeholder="6-14个字符组成，区分大小写" v-model="password">
      </div>
      <div class="check">
        <label>验证码</label><input placeholder="请输入验证码" v-model="test">
        <div class="checked">
          <button v-if="isImage" class="checkbutton" type="button" @click="getImage">获取验证码</button>
          <img v-else class="testimg" :src="imageSrc" @click="getImage">
        </div>
      </div>
      <div class="register">
        <button @click="login"  type="button">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {checkLogin,checkImage} from 'network/login'
  export default {
    name: "LoginBody",
    data(){
      return{
        name:'',
        password:'',
        test:'',
        img:'',
        isImage:true,
        imageSrc:''
      }
    },
    methods:{
      async login(){
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
        //判断提交是否正确
        let data= await checkLogin(this.name,this.password,this.test)
        if(data.return==='用户或者密码不正确，请检查大小写'){
          alert('用户或者密码不正确，请检查大小写')
          return
         }
        if(data.return==='验证码不对'){
          alert('验证码不对')
          return
        }
        if(data.return==='登录成功'){
          this.$router.push('/profile')
        }
      },
      getImage(){
        //获取验证码
        checkImage().then(res=>{
          let fr = new FileReader();
          fr.readAsDataURL(res);
          fr.onload=()=>{
            this.imageSrc=fr.result
          }
        })
        this.isImage=false
      }
    }
  }
</script>

<style scoped>
  .useremail,.userpassword,.check,.register{
    height: 120px;
  }

  .xinyebar-user{
    text-align: center;
    height: 100px;

  }
  .xinyebar-user img{
    width: 89px;
    height: 89px;
  }
  .register-body{
    text-align: center;
    width: 640px;
    position: relative;
    top: -40px;
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
    font-size: 21px;
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
    font-size: 21px;
  }

  .testimg{
    position: relative;
    top: 20px;
    width: 122px;
    height: 60px;
  }
  .register button{
    width: 506px;
    height: 60px;
    border-radius: 30px;
    border: none;
    margin-top: 52px;
    background: #abb2e8;
    color: #fff;
  }
</style>
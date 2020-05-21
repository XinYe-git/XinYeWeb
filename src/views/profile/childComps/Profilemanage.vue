<template>
  <div>
      <div class="profileimage">
        <img :src="head">
        <span class="changehead" @click.stop="uploadHeadImg">修改</span>
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
        <span @click="headchange" class="headchange">修改</span>
      </div>
      <div class="username">
        <input v-model="name">
        <span @click="namechange">修改</span>
      </div>
      <div class="phone">
        <label>手机号</label><input v-model="tele">
        <span @click="telechange">修改</span>
      </div>
      <div class="mail">
        <label>邮箱</label><input v-model="mail">
        <span @click="mailchange">修改</span>

      </div>
      <div class="male">
        <label>性别</label><input name="man" type="radio" value="0" v-model="sex " />男<input name="man" type="radio" value="1"  v-model="sex " />女
        <span @click="malechange">修改</span>
      </div>
      <div class="job">
        <label>职业</label><input v-model="professions">
        <span @click="professionschange">修改</span>
      </div>
      <div class="password">
        <label>密码</label><input type="password" :value="passwd">
        <span @click="passwordchange">修改</span>
      </div>
  </div>
</template>

<script>
  import {checkProfiledata,changename,changetele,changeprofessions,changesex,changemail,changehead} from 'network/profile'
  export default {
    name: "Profilemanage",
    data(){
      return{
        head:'',
        name:'',
        mail:'',
        tele:'',
        sex:'',
        professions:'',
        passwd:'',
        headc:''
      }
    },
    methods:{
      async headchange(){
        var formData = new window.FormData()
        formData.append("value",this.headc);
        formData.append("key",'head');
        let datahead= await changehead(formData)
        this.$router.go(0)
        if(datahead.return==='修改成功'){
          alert('头像修改成功')
        }
      },
      uploadHeadImg() {
        this.$el.querySelector('.hiddenInput').click()

      },
      // 将头像显示
      handleFile: function (e) {
        let $target = e.target || e.srcElement
        let file = $target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (data) => {
          let res = data.target || data.srcElement
          this.head = res.result
          this.headc=file
        }

      },
      async namechange(){
        let dataname= await changename(this.name)
        if(dataname.return==='修改成功'){
          alert('名字修改成功')
        }
      },

      async telechange(){
        let datatele= await changetele(this.tele)
        if(datatele.return==='手机号格式不合法'){
          alert('手机号格式不合法')
        }
        if(datatele.return==='修改成功'){
          alert('手机号修改成功')
        }
      },
      async professionschange(){
        let dataprofessions= await changeprofessions(this.professions)
        if(dataprofessions.return==='修改成功'){
          alert('职业修改成功')
        }
      },
      async malechange(){
        let datasex= await changesex(this.sex)
        if(datasex.return==='修改成功'){
          alert('性别修改成功')
        }
      },
      async mailchange(){
        let datamail= await changemail(this.mail)
        if(datamail.return==='修改成功'){
          alert('邮箱修改成功')
        }
      },
      passwordchange(){
        alert('请移至PC端修改密码')
      }
    },
    created(){
      checkProfiledata().then(res=>{
        this.head= 'http://jamkang.club'+res.head
        this.mail=res.mail
        this.tele=res.tele
        this.name=res.name
        this.sex=res.sex
        this.passwd=res.passwd
        this.professions=res.professions
      })
    }
  }
</script>

<style scoped>
  .hiddenInput{
    display: none;
  }
.profileimage{
  margin: 0 auto;
  width: 68px;
  height: 68px;
  border-radius: 50%;
}
.profileimage img{
  width: 100%;
  height: 100%;
}
  input{
    width: 80px;
    font-size: 12px;
    border: none;
  }
label{
  display: inline-block;
  width: 72px;
  font-size: 13px;
  margin-right: 20px;
}
span{
  font-size: 12px;
  color: #d48585;
  margin-left: 24px;
}
  .username{
    position: relative;
    text-align: center;
    margin-top: 25px;
  }
.username span{
  position: absolute;
  top: 10px;
}
.username input{
  text-align: center;
}
.phone{
    margin-left: 112px;
    margin-top: 35px;
  }
  .mail,.job,.password,.male{
    margin-left: 112px;
    margin-top: 25px;
    font-size: 14px;
  }
  .phone input{
    width: 100px;
  }
.mail input{
  width: 165px;
}
.job input{
  width: 55px;
}
.password input{
  width: 87px;
}
.profileimage{
  position: relative;

}
  .changehead{
    position: absolute;
    right: 15px;
    top: 20px;
    opacity:0;
  }
  .headchange{
    position: absolute;
    top: 20px;
    width: 50px;
  }
</style>
<template>
  <div class="feedback">
    <h2>问题反馈</h2>
    <h4>FEEDBACK</h4>
    <label class="phone"><input placeholder="电话:" style="color:#a5a6a8"/></label>
    <label class="city">
      <select>
      <option>上海</option>
      <option>湖南</option>
      <option>湖北</option>
      </select>
    </label>
    <label class="content"><textarea></textarea></label>
   <button>提交</button>
  </div>
</template>

<script>
  export default {
    name: "FeedBack"
  }
</script>

<style scoped>
  .feedback{
    margin-top: 46px;
    margin-left: 77px;
    position: relative;
  }
  h2{
    font-size: 12px;
    margin-bottom: 29px;
    font-weight: bold;
  }
  h4{
    position: absolute;
    top: 5px;
    left: 2px;
    font-size: 15px;
    color: #4de75b;
    opacity: .8;
  }
  input,.city select{
    background: #e8ecef;
    border: none;
    color:#a5a6a8
  }
  .phone input,.city select{
    width: 126px;
    height: 30px;
    font-size: 10px;
    text-indent: 6px;
  }
  .city{
    margin-left: 177px;

  }
  .content textarea{
    background: #e8ecef;
    margin-top: 31px;
    width: 496px;
    height: 176px;
    border: none;
  }
  button{
    width: 92px;
    height: 30px;
    position: absolute;
    bottom: -52px;
    left: 2px;
    background: #2da6f3;
    border: none;
    color: #fff;
    font-size: 10px;
  }
</style>
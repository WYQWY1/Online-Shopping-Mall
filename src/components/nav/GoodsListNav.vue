<template>
  <div>
    <div class="search-nav">
      <div class="search-nav-container">
        <ul>
          <li>所有商品分类</li>                     
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListNav'
};
</script>

<style scoped>
.search-nav{
  width: 100%;
  height: 64px;
  border-bottom: 2px solid #FF4400;
}
.search-nav-container{
  width: 80%;
  min-width: 1000px;
  height: 64px;
  margin: 0px auto;
}
.search-nav-container-90{
  width: 90%;
}
.search-nav-container ul{
  margin: 0px;
  padding-left: 0px;
  list-style: none;
}
.search-nav-container li{
  cursor: pointer;
  margin-left: 30px;
  line-height: 64px;
  color: #FF4400;
  font-size: 18px;
  /*font-weight: bold;*/
  float: left;
}
.search-nav-container a{
  color: #FF4400;
  text-decoration: none;
}
.search-nav-container li:first-child{
  padding: 0px 38px;
  background:#FF4400;
  margin: 0px;
  color: #fff;
}
</style>

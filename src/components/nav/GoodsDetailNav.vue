<template>
  <div class="shop-nav-box">
    <div class="shop-nav-container">
      <ul>
        <li v-for="(item, index) in shopNav" :key="index">
          <router-link to="/merchant">{{item}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetailNav',
};
</script>

<style scoped>


.shop-nav-container {
  width: 80%;
  height: 100%;
  margin: 0px auto;
}

.shop-nav-container ul {
  padding: 0px;
  margin: 0px;
  list-style: none;
}

.shop-nav-container li {
  float: left;
  margin-right: 30px;
  line-height: 35px;
}

.shop-nav-container a {
  text-decoration: none;
  color: rgb(233, 224, 224);
  font-weight: bold;
}
</style>

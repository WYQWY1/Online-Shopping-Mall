<template>
  <div>
    <div style="background-color: #fe4151;">
    <div class="headerimg">
    <router-link to="/GoodsList">
      <img  style=" width: 70%;height:50px;" src="../../static/img/headerimg.jpg" >
    </router-link>
    </div>
  </div>
    <div class="container">
      <i-input v-model="searchData" size="large" class="search" placeholder="休闲鞋">
        <Button class="button" slot="append" icon="ios-search" @click="search"></Button>
      </i-input>
     </div>
    
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchData: '',
     };
  },
  methods: {
    closeTags (index) {
      this.promotionTags.splice(index, 1);
    },
    selectTags (index) {
      this.searchData = this.promotionTags[index];
    },
    search () {
      this.$router.push({path: '/goodsList', query: { searchData: this.searchData }});
    }
  }
};
</script>

<style scoped>

.headerimg{
  text-align:center;
  padding-top:10px;
}

.container {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 460px;
  
}
.search {
  margin: 5px 0px;
}
.button:hover{
    background-color:#C20102;
    border:1px solid #C20102;
}
</style>

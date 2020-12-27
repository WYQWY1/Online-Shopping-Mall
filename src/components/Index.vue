<template>
  <div class="container">
    <Search></Search>
    <HomeNav></HomeNav>
    <div class="content">
      <!-- 秒杀 -->
      <div class="seckill">
        <!-- 秒杀头部 -->
        <div class="seckill-head">
          <div class="seckill-text">
            <span class="seckill-title">好享买秒杀</span>
          </div>
          <div class="seckill-icon">
            <img src="static/img/index/seckill.png">
          </div>
          <div class="count-down">
            <span class="count-down-text">12:00场 倒计时&nbsp;&nbsp;</span>
            <span class="count-down-num count-down-hour">{{ seckillsHours }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-minute">{{ seckillsMinutes }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-seconds">{{ seckillsSeconds }}</span>
          </div>
        </div>
        <!-- 秒杀内容 -->
        <div class="seckill-content">
          <div class="seckill-item" v-for="(item, index) in seckills.goodsList" :key="index">
            <div class="seckill-item-img">
              <router-link to="/goodsList" target="_blank"  tag="a"><img :src="item.img"></router-link>
            </div>
            <div class="seckill-item-info">
              <p>{{item.intro}}</p>
              <p>
                <span class="seckill-price text-danger"><Icon type="social-yen"></Icon>{{item.price}}</span>
                <span class="seckill-old-price"><s>{{item.realPrice}}</s></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--发现好货-->
      <div class="goodTing">
        <div  class="goodImg">
            <img height="50px" src="../../static/img/goodThing.png" alt="">
        </div>
        <Row >
          <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/1.jpg" alt=""></router-link> </Col>
          <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/2.jpg" alt=""></router-link> </Col>
          <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/3.jpg" alt=""></router-link> </Col>
          <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/4.jpg" alt=""></router-link> </Col>
          <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/5.jpg" alt=""></router-link> </Col>
          <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/6.jpg" alt=""></router-link> </Col>
        </Row>
     </div>
      <!--新品首发-->
      <div class="newTing">
          <div  class="newImg">
            <img height="50px" src="../../static/img/newThing.png" alt="">
          </div>
            <Row >
                <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/newThing/1.jpg" alt=""></router-link> </Col>
                <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/newThing/2.jpg" alt=""></router-link> </Col>
                <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/newThing/3.jpg" alt=""></router-link> </Col>
                <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/newThing/4.jpg" alt=""></router-link> </Col>
                <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/newThing/5.jpg" alt=""></router-link> </Col>
                <Col class="hover" span="4"><router-link to="/goodsList" target="_blank"  tag="a"><img width="95%" src="../../static/img/index/newThing/6.jpg" alt=""></router-link> </Col>
          </Row>
      </div>
      <!-- 电脑专场 -->
      <div class="item-class">
        <div class="item-class-head">
          <span class="item-class-title">{{computer.title}}</span>
          <ul>
            <li v-for="(item, index) in computer.link" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in computer.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <router-link to="/goodsList">
                <img :src="item.bigImg" alt="">
              </router-link>
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
                <div class="item-four-detail-img">
                  <router-link to="/goodsList">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 爱吃专场 -->
      <div class="item-class">
        <div class="item-class-head item-class-eat-head">
          <span class="item-class-title">{{eat.title}}</span>
          <ul>
            <li v-for="(item, index) in eat.link" :key="index">
              <router-link to="/goodsList">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="item-class-content" v-for="(item, index) in eat.detail" :key="index">
          <div class="item-content-top">
            <div class="item-big-img">
              <img :src="item.bigImg" alt="">
            </div>
            <div class="item-four-img">
              <div class="item-four-detail" v-for="(subItem, index) in item.itemFour" :key="index">
                <div class="item-four-detail-text">
                  <p class="pt_bi_tit pt_bi_tit-eat">{{subItem.title}}</p>
                  <p class="pt_bi_promo">{{subItem.intro}}</p>
                </div>
                <div class="item-four-detail-img">
                  <router-link to="/goodsList">
                    <img :src="subItem.img" alt="">
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="item-content-bottom">
            <div class="item-content-bottom-img" v-for="(subImg, index) in item.itemContent" :key="index">
              <router-link to="/goodsList">
                <img :src="subImg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import HomeNav from '@/components/nav/HomeNav';
import store from '@/vuex/store';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Index',
  created () {
    this.loadSeckillsInfo();
    this.loadCarouselItems();
    this.loadComputer();
    this.loadEat();
    this.loadShoppingCart();
  },
  mounted () {
    const father = this;
    this.setIntervalObj = setInterval(function () {
      father.REDUCE_SECKILLS_TIME();
    }, 1000);
  },
  data () {
    return {
      setIntervalObj: null
    };
  },
  methods: {
    ...mapActions(['loadSeckillsInfo', 'loadCarouselItems', 'loadComputer', 'loadEat', 'loadShoppingCart']),
    ...mapMutations(['REDUCE_SECKILLS_TIME'])
  },
  computed: {
    ...mapState([ 'seckills', 'computer', 'eat' ]),
    ...mapGetters([ 'seckillsHours', 'seckillsMinutes', 'seckillsSeconds' ])
  },
  components: {
    Search,
    HomeNav
  },
  destroyed () {
    clearInterval(this.setIntervalObj);
  },
  store
};
</script>

<style scoped>
.container {
  background-color: #F6F6F6;
}
.content {
  width: 1024px;
  margin: 0px auto;

}
/*****************************秒杀专栏开始*****************************/
/*秒杀专栏*/
.seckill {
  width: 100%;
  height: 330px;
  margin: 15px auto;
  background-color: #fff;
}
.seckill-head {
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to right, #C901E7 , #FD2654);
  background-color: #FD2654;
}
.seckill-icon {
  width: 68px;
  height: 100%;
  float: left;
}
.seckill-icon img {
  width: 35px;
  height: 35px;
  margin-top: 10px;
  margin-left: -70px;
}

.seckill-text {
  width: 300px;
  height: 100%;
  float: left;
}
.seckill-text .seckill-title {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
  margin-left:100px;
}
.seckill-text .seckill-remarks {
  margin-left: 5px;
  font-size: 10px;
  color: #fff;
}
/*倒计时*/
.count-down {
  height: 100%;
  margin-right: 30px;
  line-height: 50px;
  float: right;
}
.count-down-text {
  color: #ffffff;
  font-size:25px;
}
.count-down-num {
  padding: 3px;
  border-radius: 5px;
  background-color: #440106;
  font-size: 26px;
  font-weight: bold;
  color: #f90013;
}
.count-down-point {
  font-size: 26px;
  font-weight: bold;
  color: #440106;
}

.seckill-content {
  width: 100%;
  height: 280px;
}
.seckill-item {
  width: 183px;
  height: 250px;
  margin-top: 15px;
  margin-left: 15px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
  float: left;
}
.seckill-item-img {
  width: 160px;
  height: 160px;
  margin: 0px auto;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.seckill-item-img img {
  width: 130px;
  height: 130px;
  margin-left: 15px;
  margin-top: 15px;
  transition: margin-top 0.3s;
}
.seckill-item-img:hover img {
  margin-top: 6px;
  transition: margin-top 0.3s;
}
.seckill-item-info {
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  color: #DC3618;
}
.seckill-item-info i:first-child {
  font-size: 14px;
}
.seckill-price {
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
/*****************************秒杀专栏结束*****************************/

/*****************************商品专栏开始*****************************/
.item-class {
  width: 100%;
  height: 470px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-head {
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to right,  #FD2654,#ECB226);

  background-color: #FF2B53;
}
.item-class-eat-head {
  background-color: #ECB226;
}
.item-class-head2{
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to right,  #FD2654,#ECB226);

  background-color: #FF2B53;
}
.item-class-head ul {
  list-style: none;
  float: right;
  margin-right: 30px;
  line-height: 50px;
}
.item-class-head a {
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #FA404B;
  border: 1px solid #FA404B;
  text-decoration: none;
  color: #fff;
}
.item-class-eat-head a {
  background-color: #eeb955;
  border: 1px solid #eeb955;
}
.item-class-head a:hover {
  border: 1px solid #fff;
}
.item-class-head li {
  float: left;
}
.item-class-title {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
  margin-left: 15px;
}
.item-class-content {
  width: 49%;
  cursor: pointer;
  border-right: 1px solid #ccc;
  margin-left: 0.9%;
  /*background-color: #cff;*/
  float: left;
}
.goodImg{
  color: #A3A3A3;
  background-color: #3c3838;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
}
.newImg{
  color: #A3A3A3;
  background-color:#007eff;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
}
.hover:hover{
  opacity: 0.8;
}
.goodTing{
  width: 1020px;
  background-color: #F3F3F3;
  height: 250px;
}
.item-class-content:nth-child(odd) {
  border: none;
}
.item-content-top {
  width: 100%;
  height: 260px;
}
.item-big-img {
  width: 180px;
  height: 260px;
  overflow: hidden;
  float: left;
}
.item-big-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-big-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
.item-four-img {
  width: 303px;
  margin-left: 8px;
  float: left;
}
.item-four-detail img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-four-detail:hover img {
  margin-left: -6px;
  transition: margin-left 0.3s;
}
.item-four-detail {
  width: 152px;
  height: 130px;
  margin-left: -1px;
  float: left;
}
.item-four-detail:first-child {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.item-four-detail:last-child {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.item-four-detail-text {
  width: 50px;
  margin-left: 5px;
  margin-top: 15px;
  float: left;
}
.item-four-detail-img {
  width: 96px;
  margin-top: 15px;
  overflow: hidden;
  float: left;
}
.item-four-detail-img img {
  margin-left: 5px;
  width: 90px;
}
.pt_bi_tit {
  font-weight: bold;
  font-size: 12px;
  color: #40AADA;
}
.pt_bi_tit-eat {
  color: #ecb127;
}
.pt_bi_promo {
  color: #B18FCC;
}
.item-content-bottom {
  width: 100%;
  margin-top: 8px;
}
.item-content-bottom-img {
  width: 156px;
  margin-right: 8px;
  overflow: hidden;
  float: left;
}
.item-content-bottom-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-content-bottom-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
/*****************************商品专栏结束*****************************/
</style>

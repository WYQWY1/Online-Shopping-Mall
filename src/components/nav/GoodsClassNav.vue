 
<template>
  <div class="item-class-show">
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ items.tagName }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '品牌',
          tags: [ '阿迪达斯', '匡威', '巴黎世家', '斐乐', 'Chanel','回力','贵人鸟']
        },
        {
          tagName: '尺码',
          tags: [ '30', '31', '32', '33', '34', '35', '36','37']
        },
        {
          tagName: '功能',
          tags: [ '保暖', '防水', '矫正', '耐磨', '透气', '增高', '减震']
        },
        {
          tagName: '鞋头款式',
          tags: [ '圆头', '尖头', '方头', '露趾', '夹趾' ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid #FFF1DC;
}
 
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: #666;
  font-weight: bold;
  background-color: #FFF1DC;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #005aa0;
  line-height: 45px;
  cursor: pointer;
}
</style>

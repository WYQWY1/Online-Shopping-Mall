// 获取秒杀数据
import api from './../axios/api.js'
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
   
    
    
    api.gain('/seckill/index','').then(res =>{   
      const data=res.data;
       const  deadline=res.deadline
     commit('SET_SECKILLS_INFO', [data,deadline]);
   })
   
   
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {

   
     const data = {
      carouselItems: [''],
      activity: []
    };
   api.gain('/navBar/index','').then(res =>{   
    data.carouselItems=res.carouselItems;
    data.activity=res.activity;
    commit('SET_CAROUSELITEMS_INFO', data);
  })
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '电脑数码',
      link: [ '电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊' ],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemFour: [
            {
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemFour: [
            {
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '爱吃',
      link: [ '休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃' ],
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit },intro) => {
  console.log(intro)
  
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let i=1;
      if(intro=='韩范经典女鞋保暖秋冬'){
        i=2
    }
    else if(intro=='Adidas三叶草女经典运动鞋'){
      i=3
    }
    else if(intro=='韩系学院风少女经典百搭鞋'){
      i=4;
    }
    else if(intro=='NB经典女鞋'){
      i=5;
    }
    else if(intro=='Adidas女士运动鞋'){
      i=6;
    }
    else if(intro=='2020女鞋新款休闲小白鞋'){
      i=7;
    }
    else if(intro=='2020新款百搭运动鞋潮流女鞋'){
      i=8;
    }
    else if(intro=='秋季纯皮百搭休闲鞋'){
      i=9;
    }
    if(i==1){
      const data = {
        goodsImg: [
          'static/img/goodsDetail/item-detail-1.jpg',
          'static/img/goodsDetail/item-detail-2.jpg',
          'static/img/goodsDetail/item-detail-3.jpg',
          'static/img/goodsDetail/item-detail-4.jpg'
        ],
        title: '飞跃女鞋面包鞋秋冬新款学生甜美百搭休闲包子鞋',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 6000,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: '黑色',
              price: 75.0
            },
            {
              img: 'static/img/goodsDetail/pack/2.jpg',
              intro: '灰色',
              price: 75.0
            },
            {
              img: 'static/img/goodsDetail/pack/3.jpg',
              intro: '白色',
              price: 75.0
            }
          ],
          
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1.jpg',
          'static/img/goodsDetail/intro/2.jpg',
          'static/img/goodsDetail/intro/3.jpg',
          'static/img/goodsDetail/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '飞跃女鞋'
          },
          {
            title: '商品编号',
            content: '12138'
          },
          {
            title: '店铺',
            content: '飞跃旗舰店'
          },
          {
            title: '风格',
            content: '休闲'
          },
          {
            title: '上市年份',
            content: '2020年冬季'
          },
          {
            title: '图案',
            content: '拼色'
          },
          {
            title: '材质',
            content: '橡胶'
          },
          {
            title: '款式',
            content: '系带'
          },
          {
            title: '适用人群',
            content: '青年'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
     
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }
    else if(i==2){
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg'
        ],
        title: '韩范经典女鞋保暖秋冬',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 95.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 99.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 95.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 95.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 99.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 95.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '韩范经典女鞋保暖秋冬'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: '飞跃旗舰店'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '休闲鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
      
      
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }
    else if(i==3){
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg'
        ],
        title: 'Adidas三叶草女经典运动鞋',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 1099.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 1099.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 1099.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 1099.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 1099.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 1099.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: 'Adidas三叶草女经典运动鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: 'adidas官方旗舰店'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '休闲鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
      
      
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }
    else if(i==4){
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg'
        ],
        title: '韩系学院风少女经典百搭鞋',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 149.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 149.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 149.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 149.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 149.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 149.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '韩系学院风少女经典百搭鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: 'XYZ旗舰店'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content:'休闲鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }
    else if(i==5){
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg'
        ],
        title: 'NB经典女鞋',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 415.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 415.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 415.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 415.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 415.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 415.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: 'NB经典女鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: 'NB官方旗舰店'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '休闲鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
      
      
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }
    else if(i==6){
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg'
        ],
        title: 'Adidas女士运动鞋',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 528.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 528.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 528.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 528.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 528.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 528.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: 'Adidas女士运动鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: 'Adidas旗舰店'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '休闲鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
      
      
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }

    else if(i==7){
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg'
        ],
        title: '2020女鞋新款休闲小白鞋',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 97.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 97.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 97.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 97.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 97.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 97.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '2020女鞋新款休闲小白鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: '胜道旗舰店'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '休闲鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
      
      
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }

    else if(i==8){
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg'
        ],
        title: '2020新款百搭运动鞋潮流女鞋',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 175.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 175.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 175.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 175.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 175.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 175.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '2020新款百搭运动鞋潮流女鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: '向往体育'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '休闲鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
      
      
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }

    else if(i==9){
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg'
        ],
        title: '秋季纯皮百搭休闲鞋',
        tags: [ ],
        discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
        promotion: ['买三双打六折'],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 75.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 75.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 75.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 75.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 75.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 75.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 177.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 76.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 154.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price:133.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 225.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 210.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '秋季纯皮百搭休闲鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: '莱希福特旗舰店'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '休闲鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '鞋底软', '物美价廉', '不磨脚', '是正品', '质量没话说', '显脚小'],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色不太好看，质量也不是很好！穿起来有点磨脚！',
              goods: '灰色',
              create_at: '2020-11-15 09:20'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '好看，鞋底很软',
              goods: '灰色',
              create_at: '2020-12-8 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '可以，增高就是我想要的',
              goods: '灰色',
              create_at: '2020-12-11 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '鞋子还行，感觉有一点点大',
              goods: '黑色',
              create_at: '2020-12-15 10:13'
            }
          ]
        }
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 149,
            intro: '韩系学院风少女经典百搭鞋',
            num: 6160,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 528.0,
            intro: 'Adidas女士运动鞋',
            num: 300,
            sale: 9000
          },
          
          {
            img: 'static/img/goodsList/item-as-img-3.jpg',
            price: 415.0,
            intro: 'NB经典女鞋',
            num: 2800,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-4.jpg',
            price: 75,
            intro: '飞跃女鞋面包鞋秋冬新款学生甜美百搭休闲包子鞋',
            num: 777,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-5.jpg',
            price: 75.0,
            intro: '秋季纯皮百搭休闲鞋',
            num: 545,
            sale: 6900
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 95.00,
            intro: '韩范经典女鞋保暖秋冬',
            remarks: 1335,
            shopName: '飞跃旗舰店',
            sale: 666
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 528.00,
            intro: 'Adidas女士运动鞋',
            remarks: 300,
            shopName: 'Adidas旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 415.00,
            intro: 'NB经典女鞋',
            remarks: 2800,
            shopName: 'NB官方旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 1099,
            intro: 'Adidas三叶草女经典运动鞋',
            remarks: 3000,
            shopName: 'adidas官方旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 149.0,
            intro: '韩系学院风少女经典百搭鞋',
            remarks: 6160,
            shopName: 'XYZ旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 75.00,
            intro: '飞跃女鞋面包鞋秋冬新款学生甜美百搭休闲包子鞋',
            remarks: 777,
            shopName: '飞跃旗舰店',
            sale: 666
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 97.00,
            intro: '2020女鞋新款休闲小白鞋',
            remarks: 555,
            shopName: '胜道旗舰店',
            sale: 666
          },{
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 175.00,
            intro: '2020新款百搭运动鞋潮流女鞋',
            remarks: 555,
            shopName: '向往体育',
            sale: 666
          },
          {
            img: 'static/img/goodsList/item-show-9.jpg',
            price: 75.00,
            intro: '秋季纯皮百搭休闲鞋',
            remarks: 545,
            shopName: '莱希福特旗舰店',
            sale: 666
          }

        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: 'iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖3D抗蓝',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '苹果数据线 苹果iPhoneX/6s/7plus/8充电线',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '苹果8/7/6/6s钢化膜 iphone8/7/6s/6钢化玻璃',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: 'iPhone6s/7钢化膜苹果8 Plus手机膜抗蓝光非全屏',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '苹果6s手机壳iPhone6s Plus保护壳防摔全',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '1',
        name: 'WYQ',
        province: '江苏省',
        city: '苏州市',
        area: '常熟市',
        address: '常熟理工学院东南校区',
        phone: '123456789',
        postalcode: ''
      },
      {
        addressId: '2',
        name: 'QYW',
        province: '江苏省',
        city: '南通市',
        area: '海安市',
        address: '海安镇',
        phone: '987654321',
        postalcode: ''
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: '4.7英寸-深邃蓝',
      price: 28,
      title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳'
    }];
   
    console.log(localStorage.getItem('shopCar'))
    var content= JSON.parse(localStorage.getItem('shopCar'))
    if (content != null) {
      commit('SET_SHOPPING_CART',content);
  }
    
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'WYQ' && data.password === '092218238') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        console.log(item)
        console.log(data)
        if (item.username === data.username ||item.phone==data.username ) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
        
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
  else 
  return 0;
};

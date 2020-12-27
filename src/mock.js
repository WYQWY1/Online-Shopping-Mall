// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
    case 1: 
     return parseInt(Math.random()*minNum+1); 
    break; 
    case 2: 
     return parseInt(Math.random()*(maxNum-minNum+1)+minNum); 
    break; 
    default: 
     return 0; 
    break; 
    } 
   } 
const navPhoto=function( ){
    let begin= randomNum(1,9);
    var tem;
    var carouselItems=new Array();
    var activity=new Array();
    for(let i=0;i<5;i++)
    {    tem=begin+i;
        if(tem>9)
            tem-=9;
        carouselItems.push('static/img/nav/'+tem+'.jpg'); 
    }
    let begin2= randomNum(1,4);
    var tem=0;
    for(let i=0;i<2;i++){
      tem=begin2+i;
      if(tem>4)
          tem-=4;
          activity.push('static/img/nav/nav_showimg'+tem+'.jpg'); 
    }

   return {
       carouselItems:carouselItems,
       activity:activity
        };
}
const GoodsInfo=function(){
  let i=2;
  const data2={
    goodsImg: [
      'static/img/goodsDetail'+i+'/item-detail-1.jpg',
      'static/img/goodsDetail'+i+'/item-detail-2.jpg',
      'static/img/goodsDetail'+i+'/item-detail-3.jpg',
      'static/img/goodsDetail'+i+'/item-detail-4.jpg'
    ],
    title: '潮流小白/黑鞋',
    tags: [ ],
    discount: ['满99减10', '满198减22', '满290减35'],
    promotion: ['跨店满减200-20', ],
    remarksNum: 5800,
    setMeal: [
      [
        {
          img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
          intro: '4.7英寸-深邃蓝',
          price: 28.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
          intro: '4.7英寸-星空黑',
          price: 29.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
          intro: '5.5英寸-香槟金',
          price: 28.5
        }
      ],
      [
        {
          img: 'static/img/goodsDetail'+i+'/pack/4.jpg',
          intro: '5.5英寸-玫瑰金',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/5.jpg',
          intro: '5.5英寸-深邃蓝',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/6.jpg',
          intro: '5.5英寸-星空黑',
          price: 35.0
        }
      ],
      [
        {
          img: 'static/img/goodsDetail'+i+'/pack/7.jpg',
          intro: '4.7英寸-香槟金',
          price: 26.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/8.jpg',
          intro: '4.7英寸-玫瑰金',
          price: 25.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/9.jpg',
          intro: '4.7英寸-中国红',
          price: 28.0
        }
      ]
    ],
    hot: [
      {
        img: 'static/img/goodsDetail'+i+'/hot/1.jpg',
        price: 28.0,
        sale: 165076
      },
      {
        img: 'static/img/goodsDetail'+i+'/hot/2.jpg',
        price: 36.0,
        sale: 135078
      },
      {
        img: 'static/img/goodsDetail'+i+'/hot/3.jpg',
        price: 38.0,
        sale: 105073
      },
      {
        img: 'static/img/goodsDetail'+i+'/hot/4.jpg',
        price: 39.0,
        sale: 95079
      },
      {
        img: 'static/img/goodsDetail'+i+'/hot/5.jpg',
        price: 25.0,
        sale: 5077
      },
      {
        img: 'static/img/goodsDetail'+i+'/hot/6.jpg',
        price: 20.0,
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
        content: '潮流小白鞋'
      },
      {
        title: '商品编号',
        content: '11234573278'
      },
      {
        title: '店铺',
        content: 'Our Shop'
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
        content: '小白鞋'
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
      goodAnalyse:99,
      remarksTags: [ '颜色可人', '实惠优选', '严丝合缝',  , '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', ,   ],
      remarksNumDetail: [ 2000, 3000, 900, 1 ],
      detail: [
        
        {
          username: '13****1',
          values: 5,
          content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
          goods: '5.5英寸-玫瑰金',
          create_at: '2018-05-13 15:23'
        },
        {
          username: '3****z',
          values: 4.5,
          content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
          goods: '4.7英寸-玫瑰金',
          create_at: '2018-05-05 12:25'
        },
        {
          username: 'gd****c',
          values: 3.5,
          content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
          goods: '4.7英寸-中国红',
          create_at: '2018-04-06 16:23'
        },
      
      ]
    }
  }

  const data1 = {
    goodsImg: [
      'static/img/goodsDetail/item-detail-1.jpg',
      'static/img/goodsDetail/item-detail-2.jpg',
      'static/img/goodsDetail/item-detail-3.jpg',
      'static/img/goodsDetail/item-detail-4.jpg'
    ],
    title: '飞跃女鞋面包鞋秋冬新款学生甜美百搭休闲包子鞋',
    tags: [ ],
    discount: ['双旦礼遇券满300减30', '店铺券满90减10'],
    promotion: ['跨店满减200-20', '多买优惠'],
    remarksNum: 6000,
    setMeal: [
      [
        {
          img: 'static/img/goodsDetail/pack/1.jpg',
          intro: '4.7英寸-深邃蓝',
          price: 28.0
        },
        {
          img: 'static/img/goodsDetail/pack/2.jpg',
          intro: '4.7英寸-星空黑',
          price: 29.0
        },
        {
          img: 'static/img/goodsDetail/pack/3.jpg',
          intro: '5.5英寸-香槟金',
          price: 28.5
        }
      ],
      [
        {
          img: 'static/img/goodsDetail/pack/4.jpg',
          intro: '5.5英寸-玫瑰金',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail/pack/5.jpg',
          intro: '5.5英寸-深邃蓝',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail/pack/6.jpg',
          intro: '5.5英寸-星空黑',
          price: 35.0
        }
      ],
      [
        {
          img: 'static/img/goodsDetail/pack/7.jpg',
          intro: '4.7英寸-香槟金',
          price: 26.0
        },
        {
          img: 'static/img/goodsDetail/pack/8.jpg',
          intro: '4.7英寸-玫瑰金',
          price: 25.0
        },
        {
          img: 'static/img/goodsDetail/pack/9.jpg',
          intro: '4.7英寸-中国红',
          price: 28.0
        }
      ]
    ],
    hot: [
      {
        img: 'static/img/goodsDetail/hot/1.jpg',
        price: 28.0,
        sale: 165076
      },
      {
        img: 'static/img/goodsDetail/hot/2.jpg',
        price: 36.0,
        sale: 135078
      },
      {
        img: 'static/img/goodsDetail/hot/3.jpg',
        price: 38.0,
        sale: 105073
      },
      {
        img: 'static/img/goodsDetail/hot/4.jpg',
        price: 39.0,
        sale: 95079
      },
      {
        img: 'static/img/goodsDetail/hot/5.jpg',
        price: 25.0,
        sale: 5077
      },
      {
        img: 'static/img/goodsDetail/hot/6.jpg',
        price: 20.0,
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
        content: 'iPhoneX手机壳'
      },
      {
        title: '商品编号',
        content: '1123457778'
      },
      {
        title: '店铺',
        content: 'Our Shop'
      },
      {
        title: '商品毛重',
        content: '123.00g'
      },
      {
        title: '商品产地',
        content: '中国大陆'
      },
      {
        title: '机型',
        content: 'iPhone X'
      },
      {
        title: '材质',
        content: 'PC/塑料'
      },
      {
        title: '款式',
        content: '软壳'
      },
      {
        title: '适用人群',
        content: '通用'
      }
    ],
    remarks: {
      goodAnalyse:99,
      remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
      remarksNumDetail: [ 2000, 3000, 900, 1 ],
      detail: [
        
        {
          username: '13****1',
          values: 5,
          content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
          goods: '5.5英寸-玫瑰金',
          create_at: '2018-05-13 15:23'
        },
        {
          username: '3****z',
          values: 4.5,
          content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
          goods: '4.7英寸-玫瑰金',
          create_at: '2018-05-05 12:25'
        },
        {
          username: 'gd****c',
          values: 3.5,
          content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
          goods: '4.7英寸-中国红',
          create_at: '2018-04-06 16:23'
        },
      
      ]
    }
  };
}
const Segoods=function(){
  const sData = [
    {
      intro: '美国网件（NETGEAR）Orbi RBK752 AX8400M组合速率 WiFi6 Mesh千兆高速路由器 两支装',
      img: 'static/img/index/seckill/seckill-item1.jpg',
      price: 2699,
      realPrice: 3999
    },
    {
      intro: '【加绒加厚 88元两条】冬季男士运动休闲束脚加绒加厚卫裤 XL码',
      img: 'static/img/index/seckill/seckill-item2.jpg',
      price: 88.0,
      realPrice: 288.0
    },
    {
      intro: 'realme 真我Q2 Pro 4800万四摄 65W智慧闪充 仅175g超轻超薄 ',
      img: 'static/img/index/seckill/seckill-item3.jpg',
      price: 1499.0,
      realPrice: 1799.0
    },
    {
      intro: '集南鲜 赣南脐橙中大果手掰橙子当季新鲜水果 10斤彩箱优选大果',
      img: 'static/img/index/seckill/seckill-item4.jpg',
      price: 31.9,
      realPrice: 69.9
    },
    {
      intro: 'TRACK Air+ 主动降噪真无线蓝牙耳机双耳入耳式防水运动耳机',
      img: 'static/img/index/seckill/seckill-item5.jpg',
      price: 1299,
      realPrice: 1699
    },
    {
      intro: 'Wendy Bear温迪熊婴儿额温枪红外电子体温计温度计宝宝精准额温计',
      img: 'static/img/index/seckill/seckill-item6.jpg',
      price: 61.9,
      realPrice: 129.9
    },
    {
      intro: '黑眼豆豆真无线蓝牙耳机入耳式降噪运动耳机苹果华为安卓通用 黑色耀石款',
      img: 'static/img/index/seckill/seckill-item7.jpg',
      price:  1249.99,
      realPrice:  1898
    },
    {
      intro: '罗氏 100支学生钢笔墨囊练字书法小学生墨胆墨水替换3.4mm办公钢笔',
      img: 'static/img/index/seckill/seckill-item8.jpg',
      price:   19.9,
      realPrice:  59.9
    },
    {
      intro: '戴尔(DELL) 34英寸 1440P IPS广视角 窄边框 电脑曲面带鱼屏显示器',
      img: 'static/img/index/seckill/seckill-item9.jpg',
      price: 3749,
      realPrice: 3949
    },
  ]
  let begin= randomNum(1,8);
    var tem;
    let data=new Array();
    for(let i=0;i<5;i++)
    {    tem=begin+i;
        if(tem>8)
            tem-=8;
            data.push(sData[tem]); 
    }
    let hour= randomNum(1,6);
    let minute=hour+ randomNum(0,40);
    let seconds=randomNum(0,60);
    let deadline = {
      hours: hour,
      minute: minute,
      seconds: seconds
    }
   
   return {
    data:data,
    deadline:deadline

        };
}

 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/navBar/index', 'post', navPhoto);
Mock.mock('/seckill/index', 'post', Segoods);
Mock.mock('/goodsSearch/index', 'post', GoodsInfo);

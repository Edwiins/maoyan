<template >
    
    
    <div class="detail-wrap">
       <!-- 这是详情页 {{$route.params.id}} -->
       <div class="movie-info">
           <a href="">猫眼电影</a>
           >
           <span>{{movieInfo.nm}}</span>
       </div>
       <div class="movie-info-top">
           <div class="movie-cover">
               <a href="">
                   <img :src="movieInfo.img" alt="">
               </a>
           </div>
           <div class="movie-desc">
               <div class="movie-desc-top">
                   <h1 class="movie-h1">{{movieInfo.nm}}</h1>
                   <p>{{movieInfo.enm}}</p>
                   <p>
                      <span v-for="(item, index) in movieInfo.tags" :key="index">{{ item }}{{ index=== movieInfo.tags.length - 1 ? '' : '/' }}</span> 
                   </p>
                   
                   <p class="star">
                        <span v-for="(item, index) in movieInfo.star" :key="index">{{ item }}{{ index=== movieInfo.star.length - 1 ? '' : '/' }}</span>
                    </p>
                   <p>{{movieInfo.showTime}}</p>
               </div>
               <div class="movie-btn">
                   <div class="btn">❤ 想看</div>
                   <div class="btn">☆ 看过</div>
               </div>

               
           </div>
       </div>
       <div class="real-time-word-of-mouth">
           <div class="top">
               <aside class="left">
                   实时口碑
               </aside>
               <aside class="right">
                   <span >{{praise.wish}}</span>
                   <span class="num1">人想看</span>
                   <span >{{praise.evaluate}}</span>
                   <span>人看过</span>
               </aside>
           </div>
           <div class="middle">
               <aside class="left">
                  <p class="left-score">{{praise.score}}</p>
                  <p class="left-watched">{{praise.watched}}人评</p>
               </aside>
               <aside class="right">
                   <detail-score 
                        v-for="(item, index) in praise.mark" 
                        :key="index" 
                        :item="item"
                        :pic="praise.starPic"
                        :evaluate="praise.evaluate"
          :num="5 - index"
                   />
               </aside>
           </div>
        </div>
        <div class="brief-introduction">
            <aside class="title">
                <p class="p1">简介</p>
                <p class="p2">收起</p>
            </aside>
            <aside class="content">
                <p>{{movieInfo.content}}</p>
            </aside>
        </div>
        <div class="actors">
            <aside class="title">
                <p class="name">演职人员</p>
                <p class="roal">全部</p>
            </aside>
            <aside class="actor-list">
                <ul>
                    <li v-for="(items,index) in actorList" :key="index">
                        <a href="#">
                            <img :src="items.pic" alt="">
                            <p class="name">{{items.name}}</p>
                            <p class="role">{{items.role}}</p>
                        </a>
                    </li>
                </ul>
                
            </aside>
            
        </div>
        <section class="discussion">
            <header class="title">短评</header>
            <aside class="comments" v-for="item2 in discuss" :key="item2">
                <article class="no-padding-top" >
                    <div class="img">
                        <img src="//p1.meituan.net/maoyanuser/68c28e3aabea09316a7ca9e92375dc445151.jpg@68w_68h" alt="">
                    </div>
                    <div class="right">
                        <div class="top">
                            <div class="title-container">
                                <div class="name">{{item2.name}}</div>
                                <div class="star-wrap">
                                    <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-full-graded.png" alt="">
                                    <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-full-graded.png" alt="">
                                    <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-full-graded.png" alt="">
                                    <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-full-graded.png" alt="">
                                    <span>{{item2.score}}分</span>
                                </div>
                            </div>
                            <div class="title-appove">赞:{{item2.praiseNum}}</div>
                        </div>
                        <div class="middle">{{item2.content}}</div>
                        <div class="bottom">
                            <span class="time">{{item2.time}}</span>
                            <a href="#" >{{item2.commentsNum}}</a>
                        </div>
                    </div>
                </article>
            </aside>
            <a class="separator-line">打开App，查看全部666666个短评</a>
         </section> 
    </div> 
    
    
       
    
    
</template>


<script>
import { getMovieInfo } from '../utils/api'
import DetailScore from '../components/detail/Socre'
export default {
    data() {
        return {
            discuss:[],
            movieInfo:{},
            praise:{},
            actorList:[]
        }
    },
    components:{
        DetailScore
    },
    mounted() {
        this.getMovieInfo1()
    },
    
    methods: {
        async getMovieInfo1(){
           const res = await getMovieInfo({
               id:this.$route.params.id
           })
            if(res.status === 0){
                
                console.log(res)
                this.discuss =res.discuss,
                this.movieInfo = res.movieInfo,
                this.praise = res.praise
                this.actorList = res.movieInfo.actorList
                console.log(this.discuss)
                
            }
        }
    },
}
</script>


<style lang="scss" scoped>
    #app {
        padding-top: 0; 
    
    }
    .detail-wrap{
      width: 100%;
       position: absolute; 
    //    top:0;
    //    left:0;
    //    right:0;
    //    bottom:0;
       background: #385266;
       z-index: 999;
       color: #ccc;
       padding: 0px 21px 16px;
       
       .movie-info{
           font-size: 14px;
           color: #ccc;
           margin-bottom: 25px;
           a{
               font-size: 14px;
               color: #ccc;
           }
       }
       .movie-info-top{
           width: 100%;
           height: 138px;
           display: flex;
        //    background: burlywood;
           .movie-cover{
               height: 100%;
               width: 100px;
                img{
                    height: 100%;
                    width: 100px;
            }

           }
           .movie-desc{
               margin-left: 12px;
               width: 260px;
            //    background: red;
               height: 100%;
               overflow: hidden;
               .movie-desc-top{
                   height:108px;
                //    background: chartreuse;
                    .movie-h1{
                        color: #fff;
                        font-size: 16px;
                        margin-bottom: 6px;
                    }
                    p{
                        opacity: .6;
                        margin-bottom: 6px;
                        font-size: 12px;
                    }
                    .star{
                        width: 260px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        
                        overflow: hidden;
                    }
               }
               .movie-btn{
                   height: 30px;
                   
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   .btn{
                       font-size: 14px;
                       line-height: 30px;
                       width: 120px;
                       background: #bbb;
                       margin-right: 8px;
                       text-align: center;
                       width: 127px;
                       border-radius: 5px;
                       color: #fff;
                   }
               }
           }

           
       }
       .real-time-word-of-mouth{
            width: 100%;
            height: 176px;
            background: rgb(18, 18, 34);
            margin-top: 15px;
            padding: 10px 15px;
            .top{
                font-size: 12px;
                color: #bbb;
                display: flex;
                
                justify-content: space-between;
                .right{
                    .num1{
                        margin-right: 10px;
                    }
                }
            }
            .middle{
                height: 88px;
                margin-top: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                .left{
                    margin-right: 20px;
                    line-height: .8rem;
                    .left-score{
                    font-size: 25px;
                    color: #ffb400;
                    text-align: center;
                    
                    }
                    .left-watched{
                        font-size: 12px;
                        color:#aaa
                    }
                }
                .right{
                    width: 180px;
                    height: 88px;
                    // background: coral;
                }
            }
        }
        .brief-introduction{
            margin-top: 20px;
            height: 129px;
            .title{
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 12px;
                height: 22.4px;
                color: #fff;
                
                .p1{
                    font-size: 20px;
                    font-weight: 700;
                }
            }
            .content{
                margin-top: 12px;
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                
                color: #fff;
                height: 76px;
                line-height:25px;
                font-size: 14px;
                // background: red;
            }
        }
        .actors{
            width: 100%;
            // height: 180px;
            overflow: hidden;
            // background: hotpink;
            .title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 12px;
                height: 22.4px;
                color:#aaa;
                .name{
                   font-size: 20px;
                    font-weight: 700; 
                }
            }
            .actor-list{
                margin-top: 15px;
                height: 147px; 
                // background: palegreen;
               ul{
                   display: flex;
                   overflow: auto;
                   li{
                       width: 82px;
                       height: 120%;
                       margin-left: 5px;
                       img{
                           width: 80px;
                           height: 110px;

                       }
                       p{
                           font-size: 10px;
                           text-align: center;
                           white-space: nowrap;
                           overflow: hidden;
                           text-overflow: ellipsis;

                       }
                       .name{
                           color:#fff;
                           margin-bottom: 5px;

                       }
                       .role{
                           color: #aaa;
                       }
                   }
               }
            }
        }
        .discussion{
            
            margin-top: 25px;
            background:#fff;
            border-radius: 10px;
            // height: 600px;
            position: relative;
            
            .title{
                color: black;;
                padding: 16px 0;
                font-size: 16px;
            }
            .comments{
                margin-bottom: 20px;
                width: 100%;
                color:black;
                .no-padding-top{
                //    background: #aaa; 
                   display: flex;
                   .img{
                       
                       width: 34px;
                       height: 34px;
                       img{
                          width: 34px;
                           height: 34px;
                           border-radius: 17px; 
                       }
                   }
                   .right{
                       width:336px ;
                       margin-left: 8px;
                    //    background: blueviolet;
                       .top{
                           display: flex;
                           justify-content: space-between;
                           font-size: 12px;
                           margin-bottom: 7px;
                           .title-appove{
                               border: 1px solid #bbb;
                               padding: 2px 10px;
                               display: flex;
                               height: 25px;
                               align-items: center;
                               border-radius: 10px;
                               
                           }
                           .star-wrap{
                               margin-top: 3px;
                               color:#faaf00 ;
                               
                               img{
                                width: 9px;
                                height: 9px;
                               }
                           }
                       }
                       .middle{
                           font-size: 12px;
                           margin-bottom: 7px;
                           display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 7;
                            overflow: hidden;
                       }
                       .bottom{
                          font-size: 12px; 
                          a{
                              background: #5a7cab;
                              padding: 0 8px;
                              border-radius: 5px;
                          }
                          .time{
                              margin-right: 9px;
                              
                          }
                       }
                   }
                }
            }
            .separator-line{
                height: 25px;
                border: 1px solid #fff;
                font-size: 15px;
                line-height: 25px;
                display: flex;
                justify-content: center;
                text-align: center;
                color: palevioletred;
                
                
                

            }
        }
        
}

</style>
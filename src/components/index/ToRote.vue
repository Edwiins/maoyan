<template>
    <div class="top-rote">
        <p class="top-title">最受好评电影</p>
        <div class="top-ul">
            <ul class="top-imglist">
                <li v-for="item in topRatedList" 
                    :key="item.id"
                    @click="toDetail(item.id)"
                >
                    <div class="img-wrap">
                        <img :src="item.img" alt="">
                        <p class="pingfen">{{ item.score ? "观众评分"+item.score:item.wishNum +"人想看"}}</p>
                    </div>
                    <h5>{{item.title}}</h5>
                </li>
            </ul>
        </div>
        
    </div>
</template>


<script>
// import http from '../../utils/http'
// import { getTopRated } from '../../utils/api'
import BetterScroll from 'better-scroll'
export default {
    props:["topRatedList"],
    data() {
        return {
           
        }
    },
    watch: {
       async topRatedList(){
           await this.$nextTick()
            let bs = new BetterScroll('.top-ul', {
              //  纵向滚动
            //    scrollY: true,
                scrollX:true,
                // 区域内能点击
                click: true,
            })
        }
    },
    
   methods: {
    toDetail(id){
        // this.$router.push("/detail" +id)
        this.$router.push({name: 'detail', params: {id: id}})
    }
    
  }, 
}
</script>


<style lang="scss" scoped>
.top-rote{
    
    width: 100%;
    height: 200px;
    padding: 12px;
    background:#fff;
    .top-title{
            margin: 0;
            font-size: 14px;
            color: #333;
            margin-bottom: 12px;
    }
    .top-ul{
        height: 140px;
        width: 100%;
        overflow: hidden;
        
    }
    .top-imglist{
        display: inline-flex;
        
        li{
            width: 85px;
            height: 140px;
            margin-right: 10px;
            flex-shrink: 0; 
            .img-wrap{
               width: 85px;
               height: 115px;
               position: relative; 
               img{
                  width: 100%;
                  height: 100%; 
               }
               .pingfen{
                   width: 83px;
                   position:absolute;
                   color: #faaf00;
                   font-size: 11px;
                   font-weight: 600;
                   bottom: 0;
                   left: 0;
                   white-space: nowrap;
                   overflow: hidden;
               }
            }

           h5{
               width: 100%;
               white-space: nowrap;
               overflow: hidden;
               text-overflow: ellipsis;
               margin-top: 5px;
                font-size: 13px;
                color: #222;
                margin-bottom: 3px;
           }
        }
    }
}
    
</style>
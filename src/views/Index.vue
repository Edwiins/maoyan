<template>
    <div class="index-page">
        <my-header />
        <tabs />
        <router-view></router-view>
        <!-- <my-hot /> -->
        <!-- <div class="wrap">
          <div>
              <top-rote :topRatedList="topRatedList" />
              <movie-list :movieList="movieList" />
          </div>
        </div> -->
        
    </div>
</template>

<script>
// import { getIndexList,getTopRated } from '../utils/api';
import MyHeader from "../components/index/Header"

import Tabs from "../components/index/Tabs"

// import MyHot from "../components/index/Hot"

// import TopRote from "../components/index/ToRote" 

// import MovieList from "../components/index/MovieList"

import FixFooter from "../components/index/Footer"

// import BetterScroll from 'better-scroll'
export default {
    data() {
    return {
      topRatedList: [],
      movieList:[]
    }
  },
  components:{
    MyHeader,
    Tabs,
    // MyHot
    // TopRote,
    // MovieList,
    
  },
  // mounted() {
  //   this.getList()
  //   this.getTopRatedList()
   
    
  // },

  methods: {
    //     async getTopRatedList() {
    //       const res = await getTopRated()
    //       this.topRatedList = res.result.result
    //     },
    //     async getList() {
    //         const res = await getIndexList()
    //         this.movieList = res.result.movieList
    //         await this.$nextTick()
    //         let bs = new BetterScroll('.wrap', {
    //           //  纵向滚动
    //            scrollY: true,
    //             // 区域内能点击
    //             click: true,
    //             pullUpLoad:true
    //         })
            
            
            
          
    //     }
     },
}
</script>


<style lang="scss">
    // .wrap{
    //   position: absolute;
    //   top: 50px;
    //   bottom: 50px;
    //   left: 0;
    //   right: 0;
    // }
</style>

<template>
  <div id="app">
    <!-- <my-header />
    <div class="wrap">
      <div>
        <tabs />
        <top-rote :topRatedList="topRatedList" />
        <movie-list :movieList="movieList" />
      </div>
    </div> -->
    <router-view ></router-view>
    <fix-footer />
  </div>
</template>



<script>

// import { getIndexList,getTopRated } from './utils/api';
// import MyHeader from "./components/index/Header"

// import Tabs from "./components/index/Tabs"

// import TopRote from "./components/index/ToRote" 

// import MovieList from "./components/index/MovieList"

import FixFooter from "./components/index/Footer"

// import BetterScroll from 'better-scroll'



export default {
  data() {
    return {
      // topRatedList: [],
      // movieList:[]
    }
  },
  components:{
    // MyHeader,
    // Tabs,
    // TopRote,
    // MovieList,
    FixFooter
  },
  // mounted() {
  //   this.getList()
  //   this.getTopRatedList()
   
    
  // },

  // methods: {
  //       async getTopRatedList() {
  //         const res = await getTopRated()
  //         this.topRatedList = res.result.result
  //       },
  //       async getList() {
  //           const res = await getIndexList()
  //           this.movieList = res.result.movieList
  //           await this.$nextTick()
  //           let bs = new BetterScroll('.wrap', {
  //             //  纵向滚动
  //              scrollY: true,
  //               // 区域内能点击
  //               click: true,
  //               pullUpLoad:true
  //           })
            
            
            
          
  //       }
  //   },
}
</script>

<style lang="scss">
  #app{
    padding-top: 50px;
    background:#eee;
  }

</style>

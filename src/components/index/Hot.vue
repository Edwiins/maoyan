<template>
    <div class="wrap">
        <div>
            <top-rote :topRatedList="topRatedList" />
            <movie-list :movieList="movieList" />
        </div>
    </div>
</template>

<script>
import { getIndexList,getTopRated } from '../../utils/api';


import TopRote from "./ToRote" 

import MovieList from "./MovieList"

import BetterScroll from 'better-scroll'
export default {
    data() {
    return {
      topRatedList: [],
      movieList:[]
    }
  },
  components:{
   
    TopRote,
    MovieList,
    
  },
  mounted() {
    this.getList()
    this.getTopRatedList()
   
    
  },

  methods: {
        async getTopRatedList() {
          const res = await getTopRated()
          this.topRatedList = res.result.result
        },
        async getList() {
            const res = await getIndexList()
            this.movieList = res.result.movieList
            await this.$nextTick()
            let bs = new BetterScroll('.wrap', {
              //  纵向滚动
               scrollY: true,
                // 区域内能点击
                click: true,
                pullUpLoad:true
            })
            
            
            
          
        }
    },
}
</script>

<style lang="scss" scoped>
  
.wrap{
      position: absolute;
      top: 94px;
      bottom: 50px;
      left: 0;
      right: 0;
    }
</style>
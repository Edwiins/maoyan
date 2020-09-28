<template>
    <ul class="movie-list">
        <movie-list-item   v-for="item in movieList" :key="item.id" :item="item"/>
    </ul>
</template>


<script>
import MovieListItem from "./MovieListItem"

// import { getIndexList } from '../../utils/api';

export default {
    props:["movieList"],
    data() {
        return {
        //    movieList: []
        }
    },
    components:{
        MovieListItem
    },
    created() {
        // this.getList()
    },
    

    methods: {
    //     async getList() {
    //         const res = await getIndexList()
    //         this.movieList = res.result.movieList
    //     }
     },
}
    
    

</script>

<style lang="scss" scoped>
    .movie-list {
        width: 100%;
        margin-top: 12px;
        background:#fff;
    }
</style>
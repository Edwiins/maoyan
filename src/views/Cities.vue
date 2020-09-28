<template>
    <div>
        <div class="hotTop">热门城市</div>
        <div class="hotCities" v-if="list.length">
            <span v-for="(item,index) in list[0].cities" :key="index" class="cits" @click="handleClick(item)">
                {{item.name}}
            </span>
            
        </div>
        <van-index-bar :index-list="indexList"> 
            <div v-for="(item,index) in list" :key="index">
                <template v-if="item.prefix !== 'hotCities'">
                    <van-index-anchor :index="item.prefix | toUpperCase"></van-index-anchor>
                    <van-cell :title="it.name"
                        v-for="(it,i) in item.cities"
                        :key="i"
                        @click="handleClick(item)"
                    />
                </template>
                
            </div>
           
        </van-index-bar>
    </div>
</template>


<script>

import { getCitiesList } from '../utils/api';
export default {
    data() {
        return {
            // indexList:['a','b'],
            list:[] 
        }
    },
    computed:{
        indexList(){
            let arr=[]
            for(let i = 1;i<this.list.length;i++){
                arr.push(this.list[i].prefix.toUpperCase())
            }
            return arr;
        }
    },
    
    mounted(){
        this.getList()
    },
    filters:{
        toUpperCase(value){
            return value.toUpperCase()
        }
    },
    methods:{
        async getList(){
            const res = await getCitiesList()
            console.log(res)
            this.list = res
        },
        handleClick(it){
            // console.log("click")
            console.log(it)
            this.$store.commit('changeCity', it)
            this.$router.go(-1);
            
        }
        
    }
}
</script>

<style lang="scss">
    .hotTop{
       padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        color: #333;
    }
    .hotCities{
        background: #fff;
        overflow: hidden;
    }
    .cits{
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 4%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
    }
</style>



<template>
    <li class="movie-list-item">
        <img :src="item.img | format" alt="">

        <div class="content-wrapper">
            <div class="content">
                <div class="movie-title">
                    <div class="title">{{item.nm}}</div>
                    <span>{{item.version}}</span>
                </div>
                <div class="detail">
                    <div class="score">{{ item.sc ? "观众评分"+item.sc:item.wish +"人想看"}}</div>
                    <div class="actor">{{item.star}}</div>
                    <div class="show-info">{{item.showInfo}}</div>
                </div>
            </div>
            <!-- <div class="button-block" >{{item.showst ==3 ? "购票" : "预售"}}</div> -->
            <div class="button-block" >
                <div v-if="item.globalReleased" class="button-gp">
                    购票
                </div>
                <div v-else class="button-ys">
                    预售
                </div>
                
            </div> 
        </div>
        
    </li>
</template>


<script>
export default {
    props:["item"],
    data() {
        return {
           
        }
    },
    filters: {
    format(value) {
      return value.replace('\/w\.h', '')
    }
  }
    
  }

</script>

<style lang="scss" scoped>
    .movie-list-item {
        width: 100%;
        height: 114px;
        padding-left: 15px;
        display: flex;
        align-items: center;
        
        img {
            width: 64px;
            height: 90px;
            margin-right: 10px;
        }
        .content-wrapper{
            width: 272px;
            height: 114px;
            // background: red;
            padding: 14px;
            padding-left: 0;
            display: flex;
            align-items: center;
            .content{
                width: 210px;
                height: 86px;
                // background: chartreuse;
                padding-right: 5px;
                .movie-title{
                    width: 100%;
                    height: 24px;
                    display: flex;
                    font-size: 18px;
                    align-items: center;
                    
                    .title{
                        font-weight: 700;
                    }
                    span{
                        height: 14px;
                        background: #87bfe7;
                        font-size: 13px;
                        margin-left: 6px;
                        
                        
                    }

                }
                .detail{
                    width: 100%;
                    height: 55px;
                    .score{
                        font-size: 14px;
                        color:#faaf00
                    }
                    .actor{
                        font-size: 14px;
                        width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-top: 6px;
                    }
                    .show-info{
                        font-size: 14px;
                        margin-top: 6px;
                    }
                }
            }
            .button-block{
                width: 47px;
                height: 27px;
                
                font-size: 14px;
                text-align: center;
                line-height: 27px;
                .button-gp{
                    background: #f03d37;
                }
                .button-ys{
                    background: #3c9fe6
                }
            }

        }
    }
</style>
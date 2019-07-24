<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
            <h1 class="title">华为p30 望远镜</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥6999</span>
                    <span class="old">¥9999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>

            </div>
        </div>
        <div class="goods-item">
            <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
            <h1 class="title">华为p30 望远镜华为p30 望远镜华为p30 望远镜华为p30 望远镜</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥6999</span>
                    <span class="old">¥9999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>

            </div>
        </div>
        <div class="goods-item">
            <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" alt="">
            <h1 class="title">华为p30 望远镜华为p30 望远镜华为p30 望远镜华为p30 望远镜</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥6999</span>
                    <span class="old">¥9999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around; 居中
    padding: 7px;
    justify-content: space-between; // 两边贴紧
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width:100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #ddd;
            
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color:red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>


<style scoped>
.container {
  background: #fff;
  min-height: 100vh;
  padding: 24px 8px 0;
  /* display: flex;
  flex-direction: column;
  position: relative; */
  /* background-image: url('https://cdn.amathclass.cn/default/buy_bg.png'); */
  /* background-repeat: no-repeat; */
  /* background-color: #7e849c; */
  /* background-size: cover;
  background-position: center center; */
}
.top-box {
  position: relative;
  height: 160px;
  overflow: hidden;
}
.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  padding: 40px 6px 20px;
  align-items: center;
  display: flex;
}
.header .icon-back-img {
  width: 20px;
  height: 20px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 43%;
  height: 43vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 16px;
  padding-bottom: calc(env(safe-area-inset-bottom) + 16px);
}
.footer .footer-title {
  font-size: 24px;
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: bold;
}
.pay-submit-bar {
  width: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
}
.pay-submit-bar .buy-btn {
  position: relative;
  border-radius: 5px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #262626;
  padding: 0 16px;
  padding-right: 38px;
}
.pay-submit-bar .buy-btn:after {
  content: '';
  position: absolute;
  right: 18px;
  top: 23px;
  width: 8px;
  height: 8px;
  border-top: solid 1px currentColor;
  border-right: solid 1px currentColor;
  transform: rotate(45deg);
}
.mb28 {
    margin-bottom: 28px;
}
.text-center { text-align: center; }
.ft14 { font-size: 14px; }
.cl-fff { color: #fff; }

.section-list {
    /* padding: 16px; */
}

.section {
    position: relative;
  display: flex;
  align-items: space-between;
  margin-bottom: 14px;
  padding: 8px;
  border-radius: 8px;
  background: #f9f9f9;
}
.section.active {
    /* border: 1px solid #eee; */
    /* background: #FF4C4E; */
    background-image: linear-gradient(to right, #fae9e9, 30%, #FF4C4E);
    color: #fff;
}
.section.active .bd .title{ color: #fff; }
.section.active .bd .note{ color: #fff; }
.section.active .price{ color: #fff; }
.section .hd {
  width: 90px;
  height: 104px;
}
.section .hd .book-png {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
}
.section .bd {
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  flex: 1;
}
.section .bd .title {
  color: #434343;
  font-size: 17px;
}
.section .bd .note {
  color: #8c8c8c;
  font-size: 13px;
}
.section .price {
    position: absolute;
    bottom: 8px;
    right: 8px;
    color: #FF4C4E;
}

.page-title {
  color: #000;
  font-size: 20px;
  margin-bottom: 8px;
  padding-left: 8px;
}

.buy-wrap {
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 0;
  padding: 8px 16px;
  box-sizing: border-box;
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
  background-color: #fff;
  animation: slideInUp 1s;
  animation-delay: 800ms;
  animation-fill-mode: forwards;
  opacity: 0;
}
.buy-wrap:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #f0f0f0;
  color: #f0f0f0;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}
.buy-wrap .buy-btn {
  width: 100%;
  height: 44px;
  margin: 0 auto;
  background-color: #FF4C4E;
  color: #fff;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  border-radius:4px;
}
@keyframes slideInUp {
  0% {
    transform: translate(0, 100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>

<template>
    <!--pages/buy/buy.wxml-->
    <div class="container">
        <!-- <div class="top-box">
            <div class="header">
                <div class="iconfont icon-back cl-fff ft28" bindtap="handerBack"></div>
                <div class="icon-back-img"></div>
            </div>
        </div> -->
        <div class="page-title">真题系列 · 选择购买</div>
        <main class="section-list">
            <section v-for="(item, index) of stiGoods" :key="item.name" class="section" :class="activeIndex === index ? 'active' : ''" @click="activeIndex = index">
                <div class="hd">
                    <img class="book-png" :src="item.image" />
                </div>
                <div class="bd">
                    <div class="title">{{item.name}}</div>
                    <div class="note">每日精练一题，每天10分钟，100天练就敏锐英语听力！</div>
                </div>
                <div class="price">￥{{ item.price }}</div>
            </section>
        </main>

        <!-- 1. footer buy tab -->
        <!-- <div class="footer">
            <div class="footer-title">
                <div>Let's speed you up</div>
            </div>
            <div class="pay-submit-bar">
                <div class="text-center mb28 ft14 cl-fff">解锁全部真题</div>
                <div class="buy-btn" @click="onSubmit">
                    <div class="ft14 strong">闪题 · 永久会员</div>
                    <div class="ft14">￥68</div>
                </div>
            </div>
        </div> -->
        <div class="buy-wrap" @click="onSubmit">
            <div class="buy-btn" bindtap="handleBuy">购买学习: ￥{{stiGoods[activeIndex].price}}</div>
        </div>
    </div>
</template>
<script>
import { stiGoods } from '../config';
export default {
    data() {
        return {
            stiGoods,
            activeIndex: 0
        }
    },
    mounted: function () {
        console.log('this.$Util.getUrlParams()', this.$Util.getUrlParams())
        document.title = "闪题";
        if (location.href.indexOf("openid") < 0) {
            window.location.href = "https://payjs.cn/api/openid?mchid=1578310381&callback_url=".concat(encodeURIComponent("http://stcdn.iijx.site/#/stiBuy"));
        } 
    },
    methods: {
        onSubmit() {
            const item = this.stiGoods[this.activeIndex];
            const params = {
                total_fee: item.totalFee,
                attach: JSON.stringify({
                    project: 'sti',
                    kitpackId: item.kitpackId,
                    stopenid: this.$Util.getUrlParams().stid || ''
                }),
                openid: this.$Util.getUrlParams().openid,
            };
            const that = this;
            this.$Http.post("/pay/api/wxJsPayParams", params).then(res => {
                if (res.success) {
                    window.WeixinJSBridge.invoke("getBrandWCPayRequest", res.jsapi, function (r) {
                        if ("get_brand_wcpay_request:ok" == r.err_msg) {
                            that.$toast.loading({
                                message: "加载中...",
                                forbidClick: !0,
                                loadingType: "spinner",
                            });
                        }
                    });
                }
            }).catch(err => {
                console.log("err", err);
            });
        }
    }
}
</script>
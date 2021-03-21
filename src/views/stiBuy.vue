
<style scoped>
.container {
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url('https://cdn.amathclass.cn/default/buy_bg.png');
  background-repeat: no-repeat;
  background-color: #7e849c;
  background-size: cover;
  background-position: center center;
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
</style>

<template>
    <!--pages/buy/buy.wxml-->
    <div class="container">
        <div class="top-box">
            <div class="header">
                <div class="iconfont icon-back cl-fff ft28" bindtap="handerBack"></div>
                <div class="icon-back-img"></div>
            </div>
        </div>

        <!-- 1. footer buy tab -->
        <div class="footer">
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
        </div>
    </div>
</template>
<script>
export default {
    
    mounted: function () {
        console.log('this.$Util.getUrlParams()', this.$Util.getUrlParams())
        document.title = "闪题";
        if (location.href.indexOf("openid") < 0) {
            window.location.href = "https://payjs.cn/api/openid?mchid=1578310381&callback_url=".concat(encodeURIComponent("http://stcdn.iijx.site/#/stiBuy"));
        } 
    },
    methods: {
        onSubmit() {
            const params = {
                total_fee: 6800,
                attach: JSON.stringify({
                    project: 'sti',
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
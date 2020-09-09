<template>
  <div class="container">
    <div class="userInfo">
      <div type="userAvatarUrl" class="avatar"></div>
      <div type="userNickName" class="nickName"></div>
    </div>
    <div class="signUpNum">
      <div class="signUpNumAnimation">
        已有<span class="num"> 348 </span>位同学已加入会员 · 提升数听力
      </div>
    </div>

    <div class="member-card">
      <div style="padding: 15px;">
        <div style="display: flex;">
          <div style="flex: 1 1 0%; color: rgb(0, 0, 0); font-size: 20px; font-weight: bold;">选择会员类型</div>
          <div style="color: rgb(152, 152, 151); font-size: 12px;">该卡一旦售出，概不退换</div>
        </div>
      </div>

      <van-radio-group v-model="memberType">
        <van-cell-group :border="false">
          <van-cell center v-for="(item, index) of goods" :key="index" clickable :border="false" @click="onRadioCellClick(index)">
            <template v-slot:right-icon>
              <van-radio :name="item.memberType"></van-radio>
            </template>
            <template v-slot:label>
              <div class="price">
                <span>￥{{ item.price }} </span>
                <span class="old-price">￥{{ item.oldPrice }}</span>
              </div>
            </template>
            <template v-slot:title>
              <span class="member-name">{{ item.name }}<span v-if="item.isRecommend" style="color: rgb(254, 63, 29);">（推荐）</span></span>
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="buyed-list" @click="buyedBtn">查看我的购买记录</div>
    <van-submit-bar :price="price" button-text="立即开通" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      memberType: "4",
      price: 960,
      paying: false,
      signUpNumber: 10,
      goods: this.$Config.goods.filter(i => i.isOnline),
    };
  },
  mounted: function () {
    location.href.indexOf("openid") < 0 ? (window.location.href = "https://payjs.cn/api/openid?mchid=1578310381&callback_url=".concat(encodeURIComponent("http://stcdn.iijx.site/"))) : this.updateSignUpNumber();

    let recommenItem = this.goods.find(item => item.isRecommend);
    this.price = Math.floor(recommenItem.price * 100);
    this.memberType = recommenItem.memberType;
  },
  methods: {
    buyedBtn: function () {
      this.$router.push("buyed");
    },
    updateSignUpNumber: function () {
      var t = 10,
        e = 2,
        n = new Date("2020-03-01T16:00:00.000Z").getTime(),
        r = Date.now(),
        i = (r - n) / 1e3,
        o = parseInt(i / 86400),
        a = parseInt((i - 86400 * o) / 3600),
        c = t + o * e;
      console.log(o, a),
        (c += a <= 6 ? 8 * a : 22 + 6 * (a - 6)),
        (c += this.randomNum(0, 3)),
        (this.signUpNumber = parseInt(Number(c)));
    },
    randomNum: function (t, e) {
      return Math.random() * (e - t) + t;
    },
    onRadioCellClick(index){
      (this.memberType = String(this.goods[index].memberType)),
        (this.price = 100 * this.goods[index].price);
    },
    onSubmit: function () {
      const params = {
        total_fee: parseInt(this.price),
        attach: JSON.stringify({ memberType: this.memberType }),
        openid: this.$Util.getUrlParams().openid,
      };
      const that = this;
      this.$Http.post("/pay/api/wxJsPayParams", params)
        .then(res => {
          console.log(res);
          if (res.success) {
            window.WeixinJSBridge.invoke("getBrandWCPayRequest", res.jsapi, function (r) {
                if ("get_brand_wcpay_request:ok" == r.err_msg) {
                  that.$toast.loading({
                    message: "加载中...",
                    forbidClick: !0,
                    loadingType: "spinner",
                  });
                  setTimeout(function () {
                    that.$router.replace("buyed");
                  }, 3000);
                }
              }
            );
          }
        })
        .catch(err => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style>
.userInfo {
  background: #f9ce0d;
  color: #3e3f41;
  opacity: 1;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom-left-radius: 350px 40px;
  border-bottom-right-radius: 350px 40px;
}
.userInfo .avatar {
  width: 60px;
  height: 60px;
  display: block;
  margin-right: 0.37333rem;
  overflow: hidden;
  border-radius: 50%;
  background-size: cover;
}
.userInfo .nickName {
  flex: 1;
}
.userInfo .member {
  text-align: center;
}
.join-member {
  color: #d82c1e;
  font-size: 17px;
  text-decoration: underline;
}
.sign-avatar {
  width: 0.53333rem;
  height: 0.53333rem;
}
.member-card {
  width: 91.5vw;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 10px;
  margin: 0 auto;
  box-sizing: border-box;
  transform: translateY(-36px);
  padding-bottom: 0.26667rem;
}
.member-name {
  color: #333;
  font-size: 14px;
  font-weight: 700;
}
.price {
  font-size: 15px;
  font-weight: 700;
  color: #fe3f1d;
}
.old-price {
  text-decoration: line-through;
  color: #959695;
  font-size: 13px;
}
.signUpNum {
  position: absolute;
  left: 18%;
  top: 40px;
  color: #fff;
  font-size: 12px;
  overflow: hidden;
}
.signUpNum .num {
  font-weight: 700;
  font-size: 14px;
}
.signUpNumAnimation {
  display: inline-block;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 23px;
  line-height: 2;
  padding: 0 12px;
  animation: signUpNum_Keyframes 5s infinite;
}
@keyframes signUpNum_Keyframes {
  0% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  5% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  20% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  80% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  95% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.buyed-list {
  color: #1989fa;
  font-size: 14px;
  text-decoration: underline;
  text-align: center;
}
</style>

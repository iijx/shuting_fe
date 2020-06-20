<template>
    <div class="container">
        <van-panel v-for="(item, index) of buyList" :key="index" :title="item.name" :desc="item.statusStr + ' ' + item.time_end" style="margin-bottom: 16px">
            <div style="padding: 16px;">
                <div style="font-size: 15px;">兑换码为：{{ item.exchange_code }}</div>
            </div>
            <template #footer>
                <div id="copyBtn" :data-clipboard-text="item.exchange_code" style="display: flex; align-items: center;">
                    <div style="flex: 1 1 0%; font-size: 12px; color: #323334;">别忘了到「数听英语」小程序里兑换哦!</div>
                    <van-button type="warning" size="small" @click="copy">复制兑换码</van-button>
                </div>
            </template>
        </van-panel >
    </div>
</template>

<script>
import Clipboard from 'clipboard';
export default {
    data() {
        return {
            buyList: [],
            goods: [...this.$Config.goods]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$Http.post("/pay/api/getH5OrderByOpenid", { openid: this.$Util.getUrlParams().openid })
                .then(res => {
                    console.log('res', res);
                    this.buyList = res.data.data.map(item => {
                        const obj = JSON.parse(item);
                        console.log(obj);
                        const memberType = obj.attach.memberType;
                        return {
                            ...obj,
                            memberType,
                            name: this.goods.find(i => String(i.memberType) === String(memberType)).name,
                            statusStr: "2" === String(obj.status) ? "购买成功" : "",
                        };
                    })
                })
        });
        },
        methods: {
            copy() {
                let clipboard = new Clipboard('#copyBtn');
                clipboard.on('success', e =>  {
                    this.$toast('复制成功')
                    e.clearSelection();
                });
            },
        },
}
</script>

<style scoped>
.container {
    padding: 16px 12px;
}
</style>
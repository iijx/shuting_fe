<template>
    <main class="container">
        <section id="link0" class="header">
            <section class="head-content">
                <div class="logo">
                    <img src="https://cdn.amathclass.cn/shuting/common/icon-shuting-eng.png" alt="">
                </div>
                <div class="bd" style="flex: 1;">
                    <div class="app-title">数听英语</div>
                    <!-- <div class="app-title-note">专项提升数字英语听力</div> -->
                </div>
                <section class="links">
                    <a class="link" href="javascript:;" @click="scroll('link0')">首页</a>
                    <a class="link" href="javascript:;" @click="scroll('link1')">数字详解</a>
                    <a class="link" href="javascript:;" @click="scroll('link2')">专项训练</a>
                    <a class="link" href="javascript:;" @click="scroll('link3')">真题测验</a>
                    <a class="link" href="javascript:;" @click="scroll('link4')">关于我们</a>
                </section>
            </section>
        </section>
        <section class="top-img">
            <img src="https://unicdn.tiaoxuanyoushu.com/imgs/dynamic/yygl4.jpg" alt="">
            <div class="cc">
                <div style="color: #fff; text-align: center; font-weight: normal;">
                    <div style="font-size:48px; letter-spacing: 6px;">数听英语</div>
                    <div style="font-size: 22px; letter-spacing: 10px; margin: 24px 0 48px;">专项提升数字类英语听力</div>
                    <a href="http://" style="margin: 12px auto;">
                        <img src="https://cdn.amathclass.cn/shuting/common/apple-app-download.svg" alt="" style="width: 200px; margin: 12px auto;">
                    </a>
                </div>
            </div>
        </section>
        <div class="main">
            <section :class="'swiper-content-item item' + i" v-for="(item, i) of imgs" :key="i" :id="item.name">
                <div class="left" v-if="i === 1 || i === 3">
                    <img :src="item.img" alt="" />
                </div>
                <div class="right">
                    <div>
                        <div class="label-title">{{item.title}}</div>
                        <div class="label-text">{{item.text}}</div>
                    </div>
                </div>
                <div class="left" v-if="i === 0 || i === 2">
                    <img :src="item.img" alt="" />
                </div>
            </section>
            <!-- <section class="download-list">
                <div class="item">
                    <img src="https://unicdn.tiaoxuanyoushu.com/imgs/dynamic/1pn15.png" alt="">
                    <div style="margin-top: 10px;">
                        <img src="https://cdn.amathclass.cn/shuting/common/apple-app-download.svg" alt="">
                    </div>
                </div>
                <div class="item">
                    <img src="https://tva1.sinaimg.cn/large/008i3skNly1gsnd8z86w5j3076076wep.jpg" alt="" style="border-radius: 50%;">
                    <div class="img-text">微信小程序</div>
                </div>
            </section> -->
        </div>

        <footer class="footer">
            <section class="footer-content">
                <div class="main-content">
                    <section class="item" style="flex: 2;">
                        <div class="section-title">常见问题</div>
                        <div class="qa-list">
                            <div class="q">Q: 会员有几种类型？</div>
                            <div class="a">A: 均为永久版，一次付费，永久使用！</div>
                            <div class="q">Q: 有哪些平台可供使用？</div>
                            <div class="a">A：微信小程序、QQ小程序、安卓、IOS应用市场中均可搜索下载使用。</div>
                        </div>
                    </section>
                    <section class="item">
                        <div class="section-title">联系我们</div>
                        <div class="contact-text" style="cursor: pointer; text-decoration: underline;">邮件：fcxhlh19@163.com</div>
                        <div class="contact-text" style="cursor: pointer; text-decoration: underline;">客服微信号：iijx24</div>
                    </section>
                    <section class="item">
                        <div class="section-title">其他</div>
                        <div style="cursor: pointer; text-decoration: underline;" @click="privatebtn">隐私政策</div>
                    </section>
                </div>
                <div style="color: #777; font-size: 14px; text-align: center;">Copyright © 2021 izy. All Right Reserved. | 赣ICP备 20000637 号</div>
            </section>
        </footer>
    </main>
</template>

<script>
// import { Swipe, SwipeItem } from 'vant';

export default {
    components: {
        // Swipe, SwipeItem
    },
    data() {
        return {
            show: false,
            imgs: [
                {
                    img: 'https://unicdn.tiaoxuanyoushu.com/imgs/dynamic/h913c.png',
                    title: '数字表达详解',
                    text: '解析数字、电话、时间、年月等各种读法写法说明；',
                    name: 'link1'
                },
                {
                    img: 'https://unicdn.tiaoxuanyoushu.com/imgs/dynamic/7qi7r.png',
                    title: '专项训练',
                    text: '针对各个章节单独训练，各个击破；',
                    name: 'link2'
                },
                {
                    img: 'https://unicdn.tiaoxuanyoushu.com/imgs/dynamic/1pv5m.png',
                    title: '快听默写',
                    text: '软件随机快读，默写练习，高效率训练；',
                    name: 'link3'
                },
                {
                    img: 'https://unicdn.tiaoxuanyoushu.com/imgs/dynamic/ishjr.png',
                    title: '真题测验',
                    text: '历届往年真题，涵盖部分省市中考和最近五年高考的数字听力真题。',
                    name: 'link4'
                },
            ],
        }
    },
    methods: {
        privatebtn() {
            this.$router.push("/private");
        },
        scroll(i) {
            document.getElementById(i).scrollIntoView()
            // document.documentElement.scrollTo(0, i * 1000)
        }
    }
    
}
</script>
<style lang="less" scoped>
.container {
    padding-top: 78px;
    min-height: 100vh;
    background: #fff;
    box-sizing: border-box;
    font-weight: 300;
    font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica';
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #ededed;
        z-index: 100;
        background: #fff;
        .head-content {
            width: 1120px;
            height: 78px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            .logo {
                width: 58px;
                height: 58px;
                border-radius: 16px;
                overflow: hidden;
                margin-right: 16px;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .app-title { color: #4a4a4a; font-size: 18px;font-weight: bold; }
            .app-title-note { color: #4a4a4a; font-size: 15px; line-height: 2;}
            .links {
                display: flex;
                .link {
                    cursor: pointer;
                    color: #4a4a4a;
                    font-size: 16px;
                    margin: 0 16px;
                    font-weight: bold;
                }
            }

        }
    }
    .app-download { 
        display: block; margin: 0 auto; width: 120px; 
        img { width: 100%;}
    }
}
.top-img {
    position: relative;
    width: 100%;
    img { display: block; width: 100%;}
    .cc { 
        position: absolute;
        left: 0; right: 0; bottom: 0; top: 0;
        z-index: 1;
        background: rgba(0, 0, 0, .3);
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.main {
    position: relative;
    padding-top: 44px;
    box-sizing: border-box;
    .swiper-content-item {
        margin: 0 auto;
        // width: 1120px;
        // height: 100%;
        padding: 48px 200px;
        
        display: flex;
        &.item1, &.item3 {
            background: #f4f4f5;
        }
        .left {
            width: 240px;
            img {
                width: 100%;
                display: block;
            }
        }
        .right {
            flex: 1;
            display: flex;
            flex-direction: column;
            // align-items: center;
            padding-top: 100px;
            padding-left: 100px;
            .label-title {
                font-size: 48px;
                color: #363951;
                font-weight: 300;
                // font-weight: bold;
                line-height: 2;
            }
            .label-text {
                font-size: 24px;
                line-height: 2;
                font-weight: 100;
                color: #4a4a4a;
            }
        }
    }
    .download-list {
        position: absolute;
        width: 600px;
        bottom: 240px;
        left: 400px;
        display: flex;
        justify-content: space-around;
        .item {
            border: 1px solid #ededed;
            padding: 16px 32px;
            position: relative;
            img {
                width: 140px;
                // height: 140px;
            }
            .img-text {
                font-weight: bold;
                font-size: 16px;
                line-height: 3;
                text-align: center;
            }
        }
    }
}
.footer {
    background: #e7e7e7;
    line-height: 1.8;
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 400;
    .footer-content {
        width: 1120px;
        margin: 0 auto;
        padding: 68px 0 100px;
        .private-content {
            padding: 32px;
        }
        .main-content {
            display: flex;
            padding-bottom: 32px;
            .item {
                flex: 1;
                .section-title {
                    
                    font-weight: bold;
                    color: #262626;
                    margin-bottom: 16px;
                    .q { color: #4a4a4a; }
                    .a { color: #4a4a4a; }
                }
            }
        }
    }
}
</style>
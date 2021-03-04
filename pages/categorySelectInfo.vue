<template>
	<div class="csi-wrapper">

        <transition name="fade">
            <div class="modal align-items-end" v-if="modal" @click="closeModal">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header">
                        <div class="fs-12 text-center mt--10"></div>
                    </div>
                    <div class="modal-body">
                        <div class="mt-6 mb-2 fs-14">

                            <div class="rates mb-8">
                                <div class="sl mb-4">
                                    <div class="fs-14 gray--text1">قیمت نسبت به کیفیت</div>
                                    <div class="l"><Stars rate="4" class="sstar"/></div>
                                </div>
                                <div class="sl mb-4">
                                    <div class="fs-14 gray--text1">سرعت ارسال سفارشات</div>
                                    <div class="l"><Stars rate="4" class="sstar"/></div>
                                </div>
                                <div class="sl mb-4">
                                    <div class="fs-14 gray--text1">کیفیت بسته بندی</div>
                                    <div class="l"><Stars rate="4" class="sstar"/></div>
                                </div>
                                <div class="sl mb-4">
                                    <div class="fs-14 gray--text1">پاسخگویی به مشتریان</div>
                                    <div class="l"><Stars rate="4" class="sstar"/></div>
                                </div>
                            </div>
                            <a-textarea
                                v-model="vModel"
                                label="نظر شما"
                                required />
                            <v-btn
                                color="secondary"
                                block
                                rounded
                                x-large>
                                تایید و ثبت نظر
                            </v-btn>
                        </div>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </transition>


        <div class="sec-wrp">
            <div class="darkGray--text fs-14 mb-2">نقشه فروشگاه</div>
            <div class="shop-map">
                <img src="/images/tmp/map2.jpg">
            </div>
        </div>

        <div class="sec-wrp mt-4">
            <div class="darkGray--text fs-14 mb-2">اطلاعات فروشگاه</div>
            <div class="shop-info">
                <div class="sl">
                    <div class="fs-14 gray--text">نام فروشگاه:</div><div class="l">افق کوروش</div>
                </div>
                <div class="sl">
                    <div class="fs-14 gray--text">آدرس:</div><div class="l">یزد، بلوار 22 بهمن، جنب فروشگاه چرخ گردون</div>
                </div>
                <div class="sl">
                    <div class="fs-14 gray--text">هزینه پیک در محدوده:</div><div class="l">{{ $cn(110000) }} ریال</div>
                </div>
                <div class="sl">
                    <div class="fs-14 gray--text">هزینه پیک خارج از محدوده:</div><div class="l">{{ $cn(110000) }} ریال</div>
                </div>
                <div class="sl">
                    <div class="fs-14 gray--text">حداقل سفارش:</div><div class="l">{{ $cn(110000) }} ریال</div>
                </div>
            </div>
        </div>

        <div class="sec-wrp mt-4">
            <div class="darkGray--text fs-14 mb-2">نظرات فروشگاه</div>
            <div class="cmnts">
                <div class="cmnt mt-5 pb-2" v-for="i in 5">
                    <div class="sl">
                        <div class="fs-14 gray--text">
                            <img class="user-img" src="/images/account/avatar_f.png">
                            <div>
                                <div class="black--text">سجاد سجادی</div>
                                <div class="db fs-10">{{ $cn('22 آبان 99') }}</div>
                            </div>
                        </div>
                        <div class="l pt-2"><Stars rate="4" class="sstar"/></div>
                    </div>
                    <div class="sl fs-12 lightgray br-10 px-2 py-2">
                        نظر من نظر من نظر من نظر من نظر من نظر من نظر من نظر من نظر من نظر من نظر من نظر من 
                    </div>
                </div>
            </div>
        </div>

        <div class="add-cmnt">
            <div>
                <v-btn
                    @click="openModal"
                    color="accent"
                    block
                    rounded
                    x-large>
                    <i class="material-icons ml-2 fs-16">comment</i>
                    افزودن نظر به فروشگاه
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'اطلاعات فروشگاه']);
    },
    data(){
        return{
            vModel : '',
            modal: false,
        }
    },
    methods:{
        openModal(){
            this.modal = true;
        },
        closeModal(){
            this.modal = false;
        }
    }
};
</script>

<style scoped>
.db{display: block !important;}
.csi-wrapper{
    padding-bottom: 40px;
}
.shop-map{
    /*max-height:300px;*/
    overflow:hidden;
    border-radius: 10px;
    border: 1px solid #ddd;
    /*margin:0 -15px*/
}
.shop-info{
    border: 1px solid #ddd;
    padding: 20px 20px 0;
    border-radius: 10px;
}
.sl{
    margin-bottom: 10px;
}
.sl div{
    display: inline-block;
}
.sl .l{
    float: left;
    font-size: 14px;
}
.cmnt:not(:last-child){
    border-bottom: 1px solid #eee;
}
.user-img{
    max-width: 38px;
    max-height: 38px;
    border-radius: 50%;
    border: 2px solid #ddd;
    vertical-align: bottom;
}
.add-cmnt{
    position: fixed;
    width: calc(100% - 20px);
    bottom: 10px;
}
</style>
<style>
.rates .star{
    width: 22px;
    height: 22px;
}
</style>
<template>
    <div class="commission-wrapper">

        <transition name="fade">
            <div class="modal" v-if="modal" @click="closeModal">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header text-center mt--10 mb-6 fs-18 fw-500">
                        مبلغ قابل تسویه: {{ $cn(250000) }} ریال
                    </div>
                    <div class="modal-body">
                        <div class="shaba-info fs-12 gray--text">
                            <div>
                                <span>شماره شبا</span>
                                <span class="float-left">IR0200 0000 0000 5680211456</span>
                            </div>
                            <div class="mt-4">
                                <span>به نام</span>
                                <span class="float-left">حسین شمس</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="mt-6">
                            <span class="btns-wrapper r">
                                <v-btn
                                    color="secondary"
                                    block
                                    rounded>
                                    تایید و تسویه حساب
                                </v-btn>
                            </span>
                            <span class="btns-wrapper l">
                                <v-btn
                                    @click="closeModal"
                                    color="error"
                                    text>
                                    انصراف
                                </v-btn>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div class="commission-summary">
            <div class="commission fs-14">
                <div class="sl">
                    <div class="gray--text fs-12">موجودی کیف پول:</div><div class="l">{{ $cn(2250000) }} ریال</div>
                </div>
                <div class="sl">
                    <div class="gray--text fs-12">درآمد 30 روز گذشته از خرید دوستان:</div><div class="l">{{ $cn(2250000) }} ریال</div>
                </div>
                <div class="sl">
                    <div class="gray--text fs-12">درآمد 30 روز گذشته از خرید من:</div><div class="l">{{ $cn(2250000) }} ریال</div>
                </div>
                <div class="sl">
                    <div class="gray--text fs-12">درآمد کل از سامانه:</div><div class="l">{{ $cn(2250000) }} ریال</div>
                </div>
            </div>
        </div>

        <div class="commission mt-6 fs-14 err">
            <div class="sl">
                <div class="b">برداشت از کیف پول</div><div class="l">مبلغ: {{ $cn(250000) }} ریال</div>
                <div class="d">بابت تسویه حساب کیف پول</div>
            </div>
        </div>
        <div class="commission mt-6 fs-14 war">
            <div class="sl">
                <div class="b">برداشت از کیف پول</div><div class="l">مبلغ: {{ $cn(250000) }} ریال</div>
                <div class="d">بابت تسویه حساب کیف پول</div>
            </div>
        </div>
        <div class="commission mt-6 fs-14 suc">
            <div class="sl">
                <div class="b">برداشت از کیف پول</div><div class="l">مبلغ: {{ $cn(250000) }} ریال</div>
                <div class="d">بابت تسویه حساب کیف پول</div>
            </div>
        </div>

        <div class="checkout">
            <v-btn
                @click="openModal"
                color="accent"
                block
                rounded
                x-large>
                تسویه حساب
            </v-btn>
        </div>

    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'سوابق پورسانت من']);
    },
    data(){
        return{
            modal: false
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
.commission-wrapper{
    padding-bottom: 80px;
}
.commission{
    padding: 20px 20px 10px;
    border-radius: 10px;
}
.commission-summary{
    padding: 10px 10px 20px;
    margin: 0 -10px;
    border-bottom: 1px solid #eee;
}
.commission-summary .commission{
    border: 1px dashed;
    color: #33cf86;
    background-color: #effff8;
    box-shadow: 0 0 0 transparent;
}
.commission .sl{
    margin-bottom: 10px;
    width: 100%;
    display: inline-block;
}
.commission .sl div{
    display: inline-block;
}
.commission .sl .l{
    float: left;
}

.commission{
    border-radius: 10px;
    box-shadow: 0 3px 5px rgba(0,0,0,.15);
}
.commission .b{
    font-weight: 600;
}
.commission .d{
    margin-top: 10px;
    font-size: 12px;
    display: block !important;
}
.commission.err{
    background-color: #ffe9ee;
}
.commission.err .b{
    color: #f1224c;
}
.commission.war{
    background-color: #ffecd6;
}
.commission.war .b{
    color: #ff8900;
}
.commission.suc{
    background-color: #effff8;
}
.commission.suc .b{
    color: #5cd99f;
}
.checkout{
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 20px;
}

.shaba-info{
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 10px;
}
.btns-wrapper{
    display: inline-block;
    text-align: center;
}
.btns-wrapper.r{
    width: calc(70% - 3px);
}
.btns-wrapper.l{
    width: calc(30% - 3px);
}
</style>
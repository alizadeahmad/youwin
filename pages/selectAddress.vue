<template>
    <div class="address-wrapper w-100 h-100 d">

        <transition name="fade">
            <div class="modal" v-if="modal" @click="closeModal">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header fs-12 mb-10 fw-500">
                        یزد، خیابان مطهری، کوچه گلشن
                    </div>
                    <div class="modal-body">
                        <a-input
                            v-model="address"
                            label="تکمیل آدرس"
                            placeholder="در صورت تمایل آدرس را کامل نمایید"
                            required />
                        <a-input
                            v-model="addressName"
                            label="عنوان آدرس"
                            placeholder="عنوان آدرس منتخب"
                            required />
                    </div>
                    <div class="modal-footer">
                        <div class="mt-6">
                            <span class="btns-wrapper r">
                                <v-btn
                                    @click="registerAddress"
                                    color="secondary"
                                    elevation="1"
                                    rounded
                                    block
                                    x-large>
                                    تایید و ثبت آدرس منتخب
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

        <div class="map-wrapper">
            <!-- Maps Content -->
        </div>
        <div class="form-wrapper text-center">
            <div class="address-text">
                یزد، خیابان مطهری، کوچه گلشن
            </div>
            <v-btn
                @click="openModal"
                color="secondary"
                elevation="1"
                rounded
                block
                x-large>
                تایید آدرس منتخب
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'آدرس های من']);
    },
    data(){
        return{
            modal: false,
            address: '',
            addressName: ''
        }
    },
    methods:{
        openModal(){
            this.modal = true;
        },
        closeModal(){
            this.modal = false;
        },
        registerAddress(){
            this.closeModal();
        }
    }
};
</script>

<style scoped>
.d{ /* temp */
    background: url('/images/tmp/map.png');
    background-size: auto 100vh;
}
.address-wrapper{
    margin: -10px -10px -20px;
    width: calc(100% + 20px);
}
.map-wrapper{
    height: 100vh;
}
.form-wrapper{
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 20px;
    /*min-height: 15%;*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    /*background-color: #fff;*/
    /*border-radius: 25px 25px 0 0;*/
}
.address-text{
    background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    border-radius: 50px;
    padding: 15px;
    margin: 0 0 20px;
    font-size: 14px;
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
<template>
    <div class="primary w-100 h-100 d">

        <transition name="fade">
            <div class="modal" v-if="modal" @click="closeModal">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header"></div>
                    <div class="modal-body">
                        <a-input
                            v-model="address"
                            label="ورود آدرس کامل"
                            placeholder="آدرس کامل خود را وارد کنید"
                            required />
                        <a-input
                            v-model="addressName"
                            label="عنوان آدرس"
                            placeholder="عنوان آدرس منتخب"
                            required />
                        <v-btn
                            @click="registerAddress"
                            class="mt-10"
                            color="secondary"
                            elevation="1"
                            rounded
                            block
                            x-large>
                            تایید و ثبت آدرس منتخب
                        </v-btn>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </transition>

        <div class="map-wrapper">
            <!-- Maps Content -->
        </div>
        <div class="form-wrapper text-center">
            <div class="w-80 mx-auto">
                <v-btn
                    @click="openModal"
                    color="accent"
                    elevation="1"
                    rounded
                    block
                    x-large>
                    تایید محل پیشفرض
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            alert(`${this.addressName}: ${this.address}`);
            this.closeModal();
            this.$router.push('/home');
        }
    }
};
</script>

<style scoped>
.d{ /* temp */
    background: url('/images/tmp/map.png');
    background-size: auto 100vh;
}
.map-wrapper{
    height: 85%;
}
.form-wrapper{
    min-height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 25px 25px 0 0;
}
</style>
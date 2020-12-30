<template>
    <div class="primary w-100 h-100">
        <div class="logo-wrapper text-center">
            <img class="logo" src="~/assets/images/login/logo.png">
        </div>
        <div class="form-wrapper text-center">
            <div v-if="page1">
                <div class="logan--text fs-14 mb-15">لطفا شماره همراه خود را وارد کنید</div>
                <div class="w-80 mx-auto">
                    <a-input
                        v-model="mobile"
                        label="شماره همراه"
                        icon="phone_android"
                        required>
                    </a-input>
                    <div v-if="wrongMobile" class="red--text fs-12">شماره وارد شده اشتباه است</div>
                    <v-btn
                        @click="getPhone"
                        class="mt-10"
                        color="accent"
                        elevation="1"
                        rounded
                        block
                        x-large>
                        دریافت کد
                    </v-btn>
                </div>
            </div>
            <div v-if="page2">
                <div class="logan--text fs-14 mb-15" @click="goPage1">
                    ارسال کد به شماره
                    <span class="navy--text font-weight-bold">{{ mobile }}</span>
                    <i class="material-icons fs-16 red--text pos-abs px-1">edit</i>
                </div>
                <div class="w-80 mx-auto">
                    <a-input
                        v-model="verify"
                        label="ورود کد تاییدیه"
                        icon="lock"
                        required>
                    </a-input>
                    <div v-if="wrongCode" class="red--text fs-12">کد وارد شده اشتباه است</div>
                    <v-btn
                        @click="verifyMobile"
                        class="mt-10"
                        color="accent"
                        elevation="1"
                        rounded
                        block
                        x-large>
                        ارسال کد تاییدیه
                    </v-btn>
                    <div class="gray--text fs-12 mt-5">43 ثانیه</div>
                </div>
            </div>
            <div v-if="page3">
                <div class="logan--text fs-14 mb-15">اطلاعات خود را وارد کنید</div>
                <div class="w-80 mx-auto">
                    <a-input
                        v-model="firstname"
                        label="نام شما"
                        required>
                    </a-input>
                    <a-input
                        v-model="lastname"
                        label="نام خانوادگی"
                        required>
                    </a-input>
                    <a-input
                        v-model="reagentCode"
                        label="کد معرف"
                        required>
                    </a-input>
                    <v-btn
                        to="/map"
                        class="mt-10"
                        color="accent"
                        elevation="1"
                        rounded
                        block
                        x-large>
                        ورود به یووین
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            page1: true,
            page2: false,
            page3: false,
            mobile: '09123456789',
            verify: '',
            wrongMobile: false,
            wrongCode: false,
            firstname: '',
            lastname: '',
            reagentCode: '',
        }
    },
    methods:{
        getPhone(){
            let checkMobile = this.mobile.match(/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/);
            if(checkMobile){
                this.page1 = false;
                this.page2 = true;
                this.wrongMobile = false;
            }else{
                this.wrongMobile = true;
            }
        },
        goPage1(){
            this.page1 = true;
            this.page2 = false;
        },
        verifyMobile(){
            if(1){
                this.page2 = false;
                this.page3 = true;
                this.wrongCode = false;
            }else{
                this.wrongCode = true;
            }
        }
    }
};
</script>

<style scoped>
.logo-wrapper{
    height: 38%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo{
    width: 20%;
}
.form-wrapper{
    padding-top: 40px;
    background-color: #fff;
    min-height: 62%;
    border-radius: 25px 25px 0 0;
}
</style>
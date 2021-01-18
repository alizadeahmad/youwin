<template>
    <div class="profile-wrapper">
        <div class="profile-avatar">
            <div class="change-avatar">
                <v-btn
                    color="primary"
                    rounded>
                    تغییر تصویر
                </v-btn>
            </div>

            <img src="/images/account/avatar_f.png">
        </div>

        <div class="profile-info">
            <div class="nf">
                <a-input
                    v-model="vModel"
                    label="نام"
                    required />
                <a-input
                    v-model="vModel"
                    label="نام خانوادگی"
                    required />
            </div>
            <a-input
                v-model="vModel"
                label="کد ملی"
                required />
            <a-input
                v-model="vModel"
                label="شماره همراه"
                required />
            <a-input
                v-model="vModel"
                label="تاریخ تولد"
                required />
            <a-input
                class="shaba"
                v-model="vModel"
                label="شماره شبا"
                icon="IR"
                required />
            <div class="radio-wrapper">
                <div class="nfm mt-2">
                    <div class="fs-12">وضعیت تاهل:</div>
                    <div class="pa l-30">
                        <v-radio-group
                            v-model="mariage"
                            row>
                            <v-radio
                                label="متاهل"
                                value="mariage-1">
                            </v-radio>
                            <v-radio
                                label="مجرد"
                                value="mariage-2">
                            </v-radio>
                        </v-radio-group>
                    </div>
                </div>
                <div class="nfm mt-4">
                    <div class="fs-12">جنسیت:</div>
                    <div class="pa l-30">
                        <v-radio-group
                            v-model="gender"
                            row>
                            <v-radio
                                label="زن"
                                value="gender-1">
                            </v-radio>
                            <v-radio
                                label="مرد"
                                value="gender-2">
                            </v-radio>
                            <v-radio
                                label="سایر"
                                value="gender-3">
                            </v-radio>
                        </v-radio-group>
                    </div>
                </div>
            </div>
        </div>

        <div class="update-profile">
            <v-btn
                color="accent"
                block
                to="/account"
                rounded
                x-large>
                ثبت و ویرایش اطلاعات
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'پروفایل من']);
    },
    data(){
        return{
            vModel: '', // tmp
            mariage: null,
            gender: null,
        }
    }
};
</script>

<style scoped>
.profile-wrapper{
    padding-bottom: 60px;
}
.profile-avatar{
    position: relative;
    background-color: #f2f2f2;
    padding-bottom: 10px;
    margin: -10px -10px;
    text-align: center;
}
.change-avatar{
    position: absolute;
    left: 20px;
    bottom: 20px;
}
.profile-info{
    background-color: #fff;
    padding: 30px 20px;
    margin: -10px;
    border-radius: 20px 20px 0 0;
}
.profile-info .nf > div{
    display: inline-block;
    width: calc(50% - 3px);
}
.profile-info .nfm > div{
    display: inline-block;
}
.update-profile{
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 20px;
}
.radio-wrapper{
    border: 1px solid #cacaca;
    border-radius: 10px;
    padding: 10px 10px 15px;
}
.pa{
    position: absolute;
}
.l-30{
    left: 30px;
}
.v-input--selection-controls{
    margin-top: 0;
}
</style>
<style>
.profile-info .shaba .material-icons{
    font-family: "Roboto", sans-serif !important;
    font-size: 20px;
    margin: 3px;
    color: #000;
}
.profile-info .v-label{
    font-size: 14px !important;
}
</style>
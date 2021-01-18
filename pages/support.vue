<template>
    <div class="support-wrapper">

        <transition name="fade">
            <div class="modal align-items-end" v-if="modal" @click="closeModal">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header">
                        <div class="fs-12 text-center mt--10">برای شروع گفتگو اطلاعات زیر را وارد کنید</div>
                    </div>
                    <div class="modal-body">
                        <div class="mt-6 mb-2 fs-14 text-center">

                            <div class="a-select-wrapper mb-6">
                                <label>دپارتمان</label>
                                <select>
                                    <option>فنی</option>
                                    <option>فروش</option>
                                </select>
                                <i class="material-icons">keyboard_arrow_down</i>
                            </div>
                            <div class="a-select-wrapper mb-6">
                                <label>موضوع</label>
                                <select>
                                    <option>گزارش باگ</option>
                                    <option>دیر رسیدن سفارش</option>
                                </select>
                                <i class="material-icons">keyboard_arrow_down</i>
                            </div>
                            <a-input
                                v-model="vModel"
                                label="عنوان گفتگو"
                                required />
                            <v-btn
                                color="secondary"
                                block
                                to="/ticket"
                                rounded
                                x-large>
                                تایید و شروع گفتگو
                            </v-btn>
                        </div>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </transition>

        <div class="support-empty" v-if="!support">
            <div>
                <img src="/images/support/support.svg">
                <div class="mt-4 fs-14 gray--text">پیام های من در این قسمت ثبت و قابل پیگیری است</div>
            </div>
        </div>

        <div class="supports" v-if="support">
            <div class="support fs-14">
                <div>
                    <span>شماره تیکت: 133455</span>
                    <span class="float-left">تاریخ: 98/04/12</span>
                </div>
                <div class="mt-4">
                    <span>موضوع: پیشنهاد</span>
                    <span class="float-left">وضعیت: باز</span>
                </div>
                <div class="support-text">
                    سلام دنیا
                </div>
                <div class="mt-4">
                    <span>
                        <v-btn
                            color="primary"
                            rounded>
                            مشاهده جزییات
                        </v-btn>
                    </span>
                    <span class="fs-12 float-left mt-2">
                        آخرین تغییر: 98/04/11 - 20:30
                    </span>
                </div>
            </div>
        </div>

        <div class="add-support">
            <v-btn
                @click="openModal"
                color="accent"
                block
                rounded
                x-large>
                ارسال پیام به پشتیبانی
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'ارتباط با پشتیبانی']);
    },
    data(){
        return{
            vModel: '', // tmp
            modal: false,
            support: true
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
.support-wrapper{
    padding-bottom: 60px;
}
.support-empty{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: calc(50vh - 142px);
}
.support-empty img{
    width: 96px;
}
.support{
    padding: 15px 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 3px 4px rgba(0,0,0,.12);
}
.support-text{
    margin: 20px 0;
    background-color: #f4fca0;
    padding: 10px;
    border-radius: 10px;
    color: #5d5e5d;
    font-size: 12px;
}
.add-support{
    position: fixed;
    bottom: 0px;
    width: calc(100% - 20px);
    padding: 10px 20px;
}
</style>
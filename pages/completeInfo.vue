<template>
    <div class="cart-wrapper mt-6">

        <transition name="fade">
            <div class="modal align-items-end" v-if="timeModal" @click="closeModal">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header">
                        <div class="fs-14 gray--text text-center mt--10">انتخاب ساعت تحویل</div>
                    </div>
                    <div class="modal-body">
                        <div class="mt-6 mb-2 fs-14 text-center">
                            <span class="time" @click="timeSelect(1)">{{ $cn('12:00 - 14:00') }}</span>
                            <span class="time" @click="timeSelect(2)">{{ $cn('14:00 - 18:00') }}</span>
                            <span class="time" @click="timeSelect(3)">{{ $cn('18:00 - 22:00') }}</span>
                        </div>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </transition>

        <a-input
            v-model="vModel"
            label="نام دریافت کننده"
            required />
        <a-input
            v-model="vModel"
            label="نام خانوادگی"
            required />
        <div class="a-select-wrapper mb-6">
            <label>محل دریافت</label>
            <select>
                <option>خانه</option>
                <option>محل کار</option>
            </select>
            <i class="material-icons">keyboard_arrow_down</i>
        </div>
        <a-input
            v-model="vModel"
            label="توضیحات سفارش"
            required />

        <div class="mt-8">            
            <v-tabs
                v-model="tabSelected"
                background-color="transparent"
                color="basil"
                grow>
                <v-tab>امروز</v-tab>
                <v-tab>فردا</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tabSelected">
                <v-tab-item>
                    <v-card color="basil" flat>
                        <div class="delivery-types">
                            <div class="delivery-type" @click="deliveryTypeSelect(1)" :class="{selected: deliveryType==1}">
                                <div class="delivery-type-image"><img src="/images/cart/fast.svg" width="48"></div>
                                <div class="delivery-type-text">
                                    <div class="t">ارسال فوری</div>
                                    <div class="d">در سریع ترین زمان ممکن ارسال انجام میشود</div>
                                </div>
                            </div>
                            <div class="delivery-type" @click="deliveryTypeSelect(2)" :class="{selected: deliveryType==2}">
                                <div class="delivery-type-image"><img src="/images/cart/clock.svg" width="48"></div>
                                <div class="delivery-type-text">
                                    <div class="t">ارسال  با زمانبندی</div>
                                    <div class="d">زمان ارسال: <span class="h">{{ times[timeSelected] }}</span></div>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-tab-item>

                <v-tab-item>
                    <v-card color="basil" flat>
                        <div class="delivery-types">
                            <div class="delivery-type" @click="deliveryTypeSelect(3)" :class="{selected: deliveryType==3}">
                                <div class="delivery-type-image"><img src="/images/cart/clock.svg" width="48"></div>
                                <div class="delivery-type-text">
                                    <div class="t">ارسال  با زمانبندی</div>
                                    <div class="d">زمان ارسال: <span class="h">{{ times[timeSelected] }}</span></div>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </div>

        <div class="mt-10">
            <v-btn
                color="secondary"
                elevation="1"
                rounded
                block
                to="/invoice"
                x-large>
                تایید و ادامه
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'تکمیل اطلاعات']);
    },
    data(){
        return{
            vModel: '', // temp
            tabSelected: null,
            deliveryType: null,
            timeModal: false,
            timeSelected: 0,
            times:['انتخاب ساعت', '12:00 - 14:00', '14:00 - 18:00', '18:00 - 22:00']
        }
    },
    methods:{
        deliveryTypeSelect(i){
            this.timeSelected = 0;
            this.deliveryType = i;
            if(([2,3]).includes(i))
                this.timeModal = true;
        },
        timeSelect(i){
            this.timeSelected = i;
            this.timeModal = false;
        },
        closeModal(){
            this.timeModal = false;
        },
    }
};
</script>

<style scoped>
.delivery-type{
    display: flex;
    border: 1px solid #cfd2cc;
    border-radius: 10px;
    margin-top: 15px;
    padding: 20px 15px;
}
.delivery-type-image{
    width: 48px;
    height: 48px;
}
.delivery-type-text{
    padding: 0 15px;
}
.delivery-type .t{
    font-size: 14px;
    font-weight: 600;
}
.delivery-type .d{
    margin-top: 4px;
    font-size: 12px;
    color: gray;
    min-width: 200px;
}
.delivery-type .h{
    float: left;
}
/* SELECTED */
.delivery-type.selected{
    border-color: #33cf86;
    background-color: #effff8;
}
.delivery-type.selected .d{
    color: #33cf86;
}
.time{
    border: 1px solid #cfd2cc;
    border-radius: 100px;
    padding: 5px 10px;
}
</style>
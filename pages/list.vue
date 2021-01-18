<template>
    <div class="list-wrapper">

        <transition name="fade">
            <div class="modal" v-if="showListModal" @click="closeShowListModal">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header text-center gray--text mt--15 mb-2 fs-14">
                        لیست خرید خانه
                    </div>
                    <div class="modal-body">
                        <div class="products-item fs-14 fw-500">
                            <div class="sl" v-for="i in 5" :key="i">
                                <div class="product-name">
                                    <img src="/images/tmp/1.jpg">
                                    شیر پر چرب هراز حجم 1 لیتر
                                </div>
                                <div class="l"><img src="/images/list/3.png"></div>
                            </div>
                            <div class="sl">
                                <div class="product-name">
                                    <img src="/images/tmp/2.jpg">
                                    آبمیوه سیب موز سان استار
                                </div>
                                <div class="l"><img src="/images/list/3.png"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div class="modal" v-if="addListModal" @click="closeAddListModal">
                <div class="modal-wrapper pb-4" @click.stop>
                    <div class="modal-header"></div>
                    <div class="modal-body">
                        <a-input
                            v-model="vModel"
                            label="انتخاب نام لیست"
                            placeholder="مثلا: خرید منزل، خرید مهمانی و..."
                            required />
                        <v-btn
                            to="/listSelect"
                            class="mt-10"
                            color="secondary"
                            elevation="1"
                            rounded
                            block
                            x-large>
                            تایید و انتخاب اقلام
                        </v-btn>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </transition>

        <div class="list-empty" v-if="!list">
            <div>
                <img src="/images/list/list.svg">
                <div class="mt-4 fs-14 gray--text">لیست های خرید شما در این قسمت ثبت می شوند</div>
            </div>
        </div>

        <div class="lists" v-if="list">
            <div class="list">
                <span class="gray--text">لیست خرید خانه</span>
                <span class="list-action">
                    <img src="/images/list/1.png">
                    <img src="/images/list/2.png" @click="openShowList">
                    <img src="/images/list/3.png">
                </span>
            </div>
        </div>

        <div class="add-list gray--text">
            <div class="mt-4">
                <v-btn
                    @click="openAddListModal"
                    color="secondary"
                    elevation="1"
                    rounded
                    block
                    x-large>
                    افزودن لیست خرید جدید
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'home',
    mounted() {
        this.$store.commit('_HOME', ['wmenu', 4]);
    },
    data(){
        return{
            vModel: '', // temp
            list: true,
            addListModal: false,
            showListModal: false,
        }
    },
    methods:{
        openAddListModal(){
            this.addListModal = true;
            this.list = true;
        },
        closeAddListModal(){
            this.addListModal = false;
        },
        openShowList(){
            this.showListModal = true;
        },
        closeShowListModal(){
            this.showListModal = false;
        },
    }
};
</script>

<style scoped>
.list-wrapper{
    padding-bottom: 160px;
}
.list-empty{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: calc(50vh - 142px);
}
.list-empty img{
    width: 96px;
}
.add-list{
    position: fixed;
    bottom: 60px;
    width: calc(100% - 20px);
    padding: 20px;
}

.list{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    font-size: 14px;
}
.list-action{
    float: left;
    margin-top: -7px;
}
.list-action img{
    width: 36px;
    border-radius: 50%;
    /*vertical-align: middle;*/
}

.products-item{
    padding: 0;
}
.products-item .sl{
    padding: 10px;
    margin-bottom: 0;
    border-bottom: 1px solid #eee;
}
.products-item .sl:last-child{
    border-bottom: 0px;
}
.products-item .sl div{
    display: inline-block;
}
.product-name img{
    width: 48px;
    vertical-align: middle;
    margin-left: 10px;
}
.products-item .l{
    padding-top: 5px;
    float: left;
}
.products-item .l img{
    width: 36px;
    height: 36px;
    border-radius: 30%;
}
</style>
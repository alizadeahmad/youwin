<template>
    <div class="gift-wrapper">

        <div class="gift" v-for="i in 2">
            <span class="r fs-14 text-center">
                <div>کد تخفیف ویژه عید غدیر خم</div>
                <div class="b primary--text">GHDR6587</div>
                <div class="gray--text fs-10">مهلت استفاده تا 99/06/06</div>
            </span>
            <span class="l">
                <span class="copy-gift accent">
                    <img src="/images/gift/copy.svg">
                    کپی
                </span>
            </span>
        </div>

        <div class="gift expired">
            <span class="r fs-14 text-center">
                <div>کد تخفیف ویژه عید غدیر خم</div>
                <div class="b gray--text">GHDR6587</div>
                <div class="error--text fs-10">منقضی شده</div>
            </span>
            <span class="l">
                <span class="copy-gift gray">
                    <img src="/images/gift/copy.svg">
                    کپی
                </span>
            </span>
        </div>

    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'کدهای هدیه من']);
    }
};
</script>

<style scoped>
.gift{
    padding: 10px 0;
    border: 1px solid #eee;
    border-radius: 10px;
    margin: 10px 0;
}
.gift > span{
    vertical-align: middle;
}
.gift .r{
    padding: 5px;
    width: calc(65% - 3px);
    display: inline-block;
    border-left: 1px dotted #aaa;
}
.gift .r .b{
    border: 1px solid;
    padding: 10px 30px 5px;
    border-radius: 10px;
    margin: 5px 0;
    display: inline-block;
}
.gift .l{
    text-align: center;
    width: calc(35% - 3px);
    display: inline-block;
}
.copy-gift{
    border-radius: 10px;
    padding: 10px 20px;
    color: #fff;
    font-size: 12px;
    font-weight: 100;
}
.copy-gift img{
    width: 20px;
    vertical-align: middle;
}
</style>
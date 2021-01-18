<template>
    <div class="ticket-wrapper">

        <div class="messages">
            <div class="message" v-for="i in messages">
                <div class="text fs-14">{{ i.message }}</div>
                <div class="date fs-10 text-left mt-4">آخرین تغییر: {{ i.date }}</div>
            </div>
        </div>



        <div class="input-text">
            <input type="text" v-model="message" placeholder="متن پیام شما...">
            <img src="/images/support/send.png" @click="sendMessage">
        </div>

    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'عنوان تیکت: تشکر']);
    },
    data(){
        return{
            message: '',
            messages:[
                {message:'سلام، ممنون از برنامه خوبتون سلام، ممنون از برنامه خوبتون سلام، ممنون از برنامه خوبتون ', date:'98/04/16 - 23:45'}
            ]
        }
    },
    methods:{
        sendMessage(){
            this.messages.push({message: this.message, date:'الان'});
            this.message = '';
        }
    }
};
</script>

<style scoped>
.ticket-wrapper{
    padding-bottom: 60px;
}
.message{
    max-width: 75%;
    border-radius: 15px 0 15px 15px;
    padding: 15px 10px 10px;
    background-color: #f4fca0;
    margin: 10px 0;
}
.input-text{
    position: fixed;
    bottom: 0px;
    margin: -10px -10px 0;
    width: 100%;
    border-top: 2px solid #ddd;
}
.input-text input{
    width: 100%;
    padding: 15px;
    font-size: 14px;
}
.input-text input:active,
.input-text input:focus{
    border: 0;
    outline: 0;
}
.input-text img{
    position: absolute;
    left: 15px;
    top: 13px;
    width: 26px;
}
</style>
<template>
    <div class="faqs-wrapper">

        <div class="faq mb-12" v-for="faq in faqs">
            <div class="pr-4 fs-14 mt-4">{{ faq.title }}</div>
            <v-expansion-panels accordion>
                <v-expansion-panel v-for="i in faq.data" :key="`faq-${Math.random()}`">
                    <v-expansion-panel-header>{{ i.header }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ i.content }}
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>

    </div>
</template>

<script>
export default {
    layout: 'default-with-header',
    mounted(){
        this.$store.commit('_HOME', ['title', 'سوالات متداول']);
    },
    data(){
        return{
            faqs:[
                {
                    title:'یافتن محصول',
                    data:[
                        {header:'عنوان 1', content:'محتوا 1'},
                        {header:'عنوان 2', content:'محتوا 2'},
                        {header:'عنوان 3', content:'محتوا 3'},
                    ]
                },
                {
                    title:'نحوه خرید',
                    data:[
                        {header:'عنوان 1', content:'محتوا 1'},
                        {header:'عنوان 2', content:'محتوا 2'},
                        {header:'عنوان 3', content:'محتوا 3'},
                    ]
                },
                {
                    title:'بازاریابی',
                    data:[
                        {header:'عنوان 1', content:'محتوا 1'},
                        {header:'عنوان 2', content:'محتوا 2'},
                        {header:'عنوان 3', content:'محتوا 3'},
                    ]
                }
            ],
        }
    }
};
</script>

<style scoped>
.faq{
    margin: -10px;
}
.theme--light.v-expansion-panels .v-expansion-panel{
    color: #999;
}
.theme--light.v-expansion-panels .v-expansion-panel.v-expansion-panel--active.v-item--active .v-expansion-panel-header.v-expansion-panel-header--active{
    color: #000;
}
.v-expansion-panel::before{
    box-shadow: 0 0 0 transparent;
}
.v-expansion-panel:not(:first-child)::after{
    border-top: 0;
}
.theme--light.v-expansion-panels .v-expansion-panel{
    border-bottom: 1px solid #ddd;
}
</style>
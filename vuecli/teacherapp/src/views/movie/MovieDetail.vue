<template>
    <div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            dataList: [],
        };
    },
    created() {
        console.log(this.$route.params.id);
        this.getData(this.$route.params.id)
    },
    methods: {
        getData(id){
            axios.get("https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/subject/"+id).then((res)=>{
                dataList= res.data;
            })
        }
    },
}
</script>
<style scoped>

</style>


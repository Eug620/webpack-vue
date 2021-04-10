<template>
  <div @click="hello">{{title}}</div>
</template>

<script>
export default {
    data(){
        return {
            title:'good vue'
        }
    },
    methods:{
        hello() {
            alert('this is good vue!')
        }
    }
}
</script>

<style>

</style>
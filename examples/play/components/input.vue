<template>
  <el-input v-model="input" placeholder="请输入内容" @change="handlechange"></el-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    };
  },
  methods: {
    handlechange(value) {
      console.log(value)
    },
    // inputhandle(value){
    //   console.log(value)
    // }
  }
}
</script>

<style>

</style>
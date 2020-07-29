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
    handlechange(v) {
      console.log(v)
    }
  }
}
</script>

<style>

</style>
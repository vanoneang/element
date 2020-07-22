<template>
  <el-input placeholder="Please input" v-model="input" @change="changehandle"></el-input>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    };
  },
  methods: {
    changehandle(value) {
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
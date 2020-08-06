<template>
<div class="demo-input">
  <!-- <el-input placeholder="请选择日期" v-model="input3">
    <template v-slot:suffix>
      <i class="el-input__icon el-icon-date"></i>
    </template>
  </el-input>
  <el-input placeholder="请输入内容" v-model="input4">
    <template v-slot:prefix>
      <i class="el-input__icon el-icon-search"></i>
    </template>
  </el-input> -->
  <el-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="textarea1">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="textarea2">
</el-input>
</div>
</template>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
      // input1: '',
      // input2: '',
      // input3: '',
      // input4: ''
    };
  },
  methods: {
    handleInput(v) {
      console.log(v)
    },
    handlechange(v) {
      console.log('change', v)
    }
  }
}
</script>

<style scoped>
.demo-input .el-input {
  display: block;
  width: 180px;
}
.demo-input .el-textarea {
  display: block;
  width: 414px;
}
</style>

<template>
  <mavon-editor ref=md
                v-bind:value="value"
                v-on:change="change"
                v-on:imgAdd="imgAdd"
                placeholder="输入内容"
                :autofocus=false />
</template>
<script>
import axios from 'axios'
import FormData from 'form-data'
export default {
  props: ['value'],
  methods: {
    change (value, render) {
      this.$emit('input', value)
    },
    imgAdd (pos, $file) {
      var formdata = new FormData()
      formdata.append('image', $file)
      axios({
        url: 'admin/upload_image',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((response) => {
        if (!response.data.success) {
          this.$message.error(response.data.msg)
        } else {
          this.$refs.md.$img2Url(pos, response.data.file_path)
        }
      })
    }
  }
}
</script>
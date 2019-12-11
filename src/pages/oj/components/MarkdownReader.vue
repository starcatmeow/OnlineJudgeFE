<template>
  <mavon-editor id="md"
                :subfield=false
                defaultOpen="preview"
                :editable=false
                :toolbarsFlag=false
                :shortCut=false
                :autofocus=false
                placeholder="无"
                v-bind:value="value"
                :boxShadow=false
                previewBackground="transparent"
                />
</template>
<script>
export default {
  props: ['value']
}
</script>
<style scoped>
.v-note-wrapper{
  min-height: 10px;
  z-index: 500;
}
</style>
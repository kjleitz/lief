<template>
  <div class="lief-input-container">
    <input class="lief-input" type="text"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  
});
</script>

<style lang="sass" scoped>
@import "@/styles/mixins/_appearance-none.sass"

.lief-input-container
  .lief-input
    display: inline-block
    margin-bottom: 0.5em
    padding: 0 2em 0 1em
    width: 100%
    height: 1.5em
    line-height: 1.5em
    color: #606266
    outline: none
    background-color: white
    background-image: none
    border-radius: 4px
    border: 1px solid #DCDFE6
    @include appearance-none
    &:disabled
      background-color: #F5F7FA;
      border-color: #E4E7ED;
      color: #C0C4CC;
      cursor: not-allowed;
</style>

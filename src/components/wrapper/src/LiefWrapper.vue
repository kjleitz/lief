<template>
  <div class="lief-wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="sass">
@import "@/styles/mixins/_box-sizing.sass"
@import "@/styles/mixins/_prefix.sass"

.lief-wrapper
  +box-sizing
  font-family: Avenir, Helvetica Neue, Helvetica, sans-serif
  input,
  textarea,
  select
    display: inline-block
    color: #606266
    font-size: 1em
    font-weight: 400
    font-family: Avenir, Helvetica Neue, Helvetica, sans-serif
    outline: none
    background-color: white
    background-image: none
    border-radius: 0.25em
    border: 1px solid #DCDFE6
    +prefix(appearance, none)
    &:disabled
      background-color: #F5F7FA;
      border-color: #E4E7ED;
      color: #C0C4CC;
      cursor: not-allowed;
</style>

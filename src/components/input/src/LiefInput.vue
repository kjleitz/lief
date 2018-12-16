<template>
  <LiefWrapper class="lief-input-container">
    <input v-bind="$attrs" class="lief-input" type="text" v-on="$listeners" />
  </LiefWrapper>
</template>

<script lang="ts">
import Vue from 'vue';
import LiefWrapper from '@/components/wrapper';

export default Vue.extend({
  components: {
    LiefWrapper,
  },
});
</script>

<style lang="sass" scoped>
.lief-input-container
  .lief-input
    margin-bottom: 0.5em
    padding: 0 0.25em 0 0.25em
    text-indent: 0.5em
    min-width: 14em
    height: 2em
</style>

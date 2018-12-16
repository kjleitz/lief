<template>
  <LiefWrapper class="lief-layout-container">
    <div class="lief-layout">
      <header v-if="$slots.header" class="lief-header">
        <slot name="header"></slot>
      </header>
      <div class="lief-below-header">
        <aside v-if="$slots['sidebar-left']" class="lief-sidebar-left">
          <slot name="sidebar-left"></slot>
        </aside>
        <div class="lief-between-sidebars">
          <main class="lief-main">
            <slot></slot>
          </main>
          <footer v-if="$slots.footer" class="lief-footer">
            <slot name="footer"></slot>
          </footer>
        </div>
        <aside v-if="$slots['sidebar-right']" class="lief-sidebar-right">
          <slot name="sidebar-right"></slot>
        </aside>
      </div>
    </div>
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
.lief-layout-container
  .lief-layout
    display: flex
    flex-direction: column
    align-items: stretch
    .lief-header
      display: flex
      justify-content: space-around
      padding: 1em
      border: 1px solid blue
    .lief-below-header
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: stretch
      .lief-sidebar-left
        border: 1px solid green
        padding: 1em 1em 1em 3em
      .lief-sidebar-right
        border: 1px solid red
        padding: 1em 3em 1em 1em
      .lief-between-sidebars
        flex-grow: 1
        display: flex
        flex-direction: column
        align-items: stretch
        .lief-main
          flex-grow: 1
          padding: 1em 2em
          border: 2px solid gray
        .lief-footer
          display: flex
          justify-content: space-evenly
          align-items: flex-start
          padding: 1em 2em
          border: 1px solid purple
</style>

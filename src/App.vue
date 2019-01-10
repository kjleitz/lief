<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" /><br>
    <button class="toggle-header" @click="showHeader = !showHeader">
      toggle header
    </button>
    <button class="toggle-footer" @click="showFooter = !showFooter">
      toggle footer
    </button>
    <button class="toggle-left" @click="showLeft = !showLeft">
      toggle left
    </button>
    <button class="toggle-right" @click="showRight = !showRight">
      toggle right
    </button>
    <LiefLayout class="layout">
      <template v-if="showHeader" slot="header">
        <div class="logo">
          THIS IS MY LOGO
        </div>
        <div class="site-name">
          website name
        </div>
        <div class="navbar">
          <a href="#">
            guide
          </a>
          <a href="#">
            resources
          </a>
          <a href="#">
            api
          </a>
          <a href="#">
            log in
          </a>
          <a href="#">
            sign up
          </a>
        </div>
      </template>
      <div v-if="showLeft" slot="sidebar-left" class="left">
        left<br>
        left<br>
        left<br>
        left<br>
        left<br>
        left<br>
        left<br>
        left<br>
        left<br>
        left<br>
        left<br>
        left<br>
      </div>
      <div v-if="showRight" slot="sidebar-right" class="right">
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
        right<br>
      </div>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      main main main main main<br>
      <template v-if="showFooter" slot="footer">
        <div>
          footer footer footer<br>
          footer footer footer?????<br>
          footery foots
        </div>
        <div>
          bread and butter bread and butter<br>
          bread butter bread and butter!<br>
          bread and buttery foots
        </div>
        <div>
          <a href="#">
            corn and nachos
          </a><br>
          <a href="#">
            cream cheese, bacon
          </a><br>
          <a href="#">
            sour patch kids
          </a>
        </div>
      </template>
    </LiefLayout>
    <br>
    <br>
    <br>
    <LiefLayout>
      <div slot="header">
        here [is/are some] example component(s)
      </div>
      this is an input
      <LiefInput placeholder="foo" />
    </LiefLayout>
    <LiefLayout>
      <div slot="header">
        form and stuff
      </div>
    </LiefLayout>
    <form action="#">
      <LiefInput placeholder="foo" />
      <input type="text">
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LiefLayout from '@/components/layout';
import LiefInput from '@/components/input';

export default Vue.extend({
  components: {
    LiefLayout,
    LiefInput,
  },

  data() {
    return {
      showLeft: true,
      showRight: true,
      showHeader: true,
      showFooter: true,
    };
  },
});
</script>

<style lang="sass" scoped>
.navbar
  a + a
    display: inline-block
    padding-left: 0.5em
</style>

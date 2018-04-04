<template>
  <div id="app" class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
      <bottom></bottom>
    </div>

  </div>
</template>

<script>
import navbar from './components/navbar'
import sidebar from './components/sidebar'
import bottom from './components/bottom'
export default {
  name: 'App',
  data: function () {
    return {}
  },
  components: {
    navbar: navbar,
    sidebar: sidebar,
    bottom: bottom
  }
}
</script>

<style>
#app {
  @import "./styles/index.scss";
}
.app-wrapper {
  @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
}
</style>

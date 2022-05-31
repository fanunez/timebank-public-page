<template>
  <div id="app" style="overflow-x: clip;">
    <div class="container-fluid" :style="{backgroundImage, height: 'fit-content', width: '-webkit-fill-available', padding: '0px'}">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      backgroundImage: `url(${require('.//assets/background.png')})`
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

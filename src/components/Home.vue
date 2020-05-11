<template>
  <div>
    <div id="home">
      <Title></Title>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue'
export default {
  name: 'App',
  components: {
    Title,
  },

}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 97vh;
  z-index: 0;
  overflow: hidden;
}

</style>

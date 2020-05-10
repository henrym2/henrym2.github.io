<template>
  <div id="menu" class="menu-container">
    <a>HELLO THIS IS A TEST</a>
  </div>
</template>

<script>
export default {
    name: "Menu",
    data () {
        return {
        }
    },
}
</script>

<style>
#menu {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black; /* Black background with opacity */
  z-index: 1; /* Specify a stack order in case you're using a different order for other elements */
  color: white
}

.menu-container {
    display: flex;
    flex-direction: column;
}

</style>
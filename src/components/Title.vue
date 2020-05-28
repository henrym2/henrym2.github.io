<template>
  <div id="Title">
    <h1 class="typewriter">
      Matthew Henry
    </h1>
    <div class="sub-container">
      <h2>Software Engineer</h2>
      <ImageFloat :click=arrowClicked class="image-floating"></ImageFloat>
    </div>
  </div>
</template>

<script>
import ImageFloat from './ImageFloat.vue'
export default {
  name: 'Title',
  props: {
    next: Function
  },
  components: {
    ImageFloat
  },methods: {
    arrowClicked () {
      this.$emit("arrowClicked")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

h1 {
  color: white;
  margin: 0 0 0;
  font-size: 9vw;
  font-family: 'Playfair Display', serif;
}
h2 {
  color: #e43f5a;
  font-family: 'Poiret One', cursive;
  font-size: 5vw;
  margin: -2vw 0 0 16vw 
}

.scale-in-bottom {
  animation: scale-in-ver-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.image-floating {
  margin-left: 56vw;
  margin-top: 5vw;
}
.sub-container {
  display: flex;
  flex-direction: row;
  margin-left: 4vw
}
#Title {
  z-index: 1;
  display: flex;
  flex-direction:column;
  text-align: center;
  margin-right: 4vw;
  /* mix-blend-mode: difference; */
}

.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid black; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  /* margin: 0 auto; Gives that scrolling effect as the typing happens */
  letter-spacing: .025em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}

@keyframes scale-in-ver-bottom {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
    opacity: 1;
  }
}

</style>

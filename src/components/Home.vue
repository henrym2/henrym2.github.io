<template>
  <div>
    <div id="home">
      <transition name="slideleft">
        <Title v-show="page == 0" @arrowClicked=showProjects></Title>
      </transition>
    </div>
    <transition name="slideright">
      <Projects v-if="page == 1"></Projects>
    </transition>
    <transition name="slideright">
      <AboutMe v-if="page == 3"></AboutMe>
    </transition>
    <transition name="slideright">
      <Contact v-if="page == 2"></Contact>
    </transition>
  </div>
</template>

<script>
import Title from './Title.vue'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
export default {
  name: 'App',
  components: {
    Title,
    Projects,
    AboutMe,
    Contact
  },
  data () {
    return {
      // page: 0
    }
  },
  props: {
    page: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showProjects () {
      this.$emit("arrowClicked")
      // this.page = 1;
      // this.$emit("a")
    }
  }

}
</script>

<style>
#home {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 95vh;
  z-index: 0;
}

.slideleft-leave-active {
	-webkit-animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.slideleft-enter-active {
  animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both reverse;
}

.slideright-leave-active{
  -webkit-animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

.slideright-enter-active{
  -webkit-animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both reverse;
	animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both reverse;
}


@keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    /* opacity: 1; */
  }
  100% {
    -webkit-transform: translateX(-150vw);
            transform: translateX(-150vw);
    /* opacity: 0; */
  }
}

@keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    /* opacity: 1; */
  }
  100% {
    -webkit-transform: translateX(250vw);
            transform: translateX(250vw);
    /* opacity: 0; */
  }
}
</style>

<template>
  <div id="menu" class="menu-container">
    <div class="item-container">
        <div class="item" id="returnHome">
            <p>00
                <a href='#' @click="changePage(0)">
                    <span class="draw">Home</span>
                </a>
            </p>
        </div>
        <div class="item">
            <img id="halls" src="./../assets/halls.jpg">
        </div>
        <div class="item" id="projects">
            <p>01</p>
            <a href='#' @click="changePage(1)">
            <div class="flip-text">
                <div class="flip-text-inner">
                    <div class="flip-text-front">Projects</div>
                    <div class="flip-text-side">Projects</div>
                </div>
            </div>
            </a>
        </div>
        <div class="item" id="contact">
            <p>02</p>
            <a href='#' @click="changePage(2)">
            <div class="flip-text" id="draw">
                    <div class="flip-text-inner">
                        <div class="flip-text-front">Contact</div>
                        <div class="flip-text-side">Contact</div>
                    </div>
    
            </div>
            </a>
        </div>
        <div class="item" id="aboutMe">
            <p>03</p>
            <a href='#' @click="changePage(3)">
            <div class="flip-text">
                <div class="flip-text-inner">
                    <div class="flip-text-front">About Me</div>
                    <div class="flip-text-side">About Me</div>
                </div>
            </div>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Menu",
    props: {
        pageChange: Function
    },
    data () {
        return {
        }
    },
    methods: {
        changePage (page) {
            this.$emit('pageChange', page)
        }
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

#menu {
          overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
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

#returnHome {
    position: absolute;
    left: 13vw;
    top: 8vh;
    z-index: 3;
}

#projects {
    position: absolute;
    margin-left: 60vw;
    top: 25vh;
}

#contact {
    position: absolute;
    margin-left: 30vw;
    top:40vh
}

#halls {
    position: absolute;
    left: 5vw;
    top: 19vh;
    width: 35vw;
    z-index: 0;
}

#aboutMe {
    position: absolute;
    left: 55vw;
    top: 68vh;
    white-space: nowrap;
}

.draw {
    position: absolute;
    font-size: 6.5vw;
    font-family: 'Playfair Display', serif;
    margin-top: -3vh;
}

.item-container{
    display: flex;
    flex-direction: column;
    height: 100%
}

.item{
    display: flex;
}

.item a {
    color: white;
    text-decoration: none;
}

.item a:hover {
    color: inherit
}

.menu-container {
    display: flex;
    flex-direction: column;
}
.flip-text{
    background-color: transparent;
    perspective: 1000px;
    
}

.flip-text-inner {
  font-size: 6.5vw;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  /* transform: translateZ(-3vw) ; */
  text-decoration: underline;
}

.flip-text:hover .flip-text-inner {
    transform: rotateX(90deg) translateZ(2vw) ;
}


.flip-text:hover .flip-text-front {
    animation: fade-in 0.35s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.flip-text-front, .flip-text-side {
    position: absolute;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.flip-text-front {
    font-family: 'Poiret One', cursive;
}

.flip-text-side {
    font-family: 'Playfair Display', serif;
    transform: rotateX(-90deg)  translateZ(-2vw) translateY(10vh);
}



</style>
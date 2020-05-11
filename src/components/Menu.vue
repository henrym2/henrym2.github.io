<template>
  <div id="menu" class="menu-container">
    <div class="item-container">
        <div class="item">
            <img id="halls" src="./../assets/halls.jpg">
        </div>
        <div class="item" id="projects">
            <p>00</p>
            <div class="flip-text">
                <div class="flip-text-inner">
                    <div class="flip-text-front">Projects</div>
                    <div class="flip-text-side">Projects</div>
                </div>
            </div>
        </div>
        <div class="item" id="contact">
            <p>01</p>
            <div class="flip-text">
                <div class="flip-text-inner">
                    <div class="flip-text-front">Contact</div>
                    <div class="flip-text-side">Contact</div>
                </div>
            </div>
        </div>
        <div class="item" id="aboutMe">
            <p>10</p>
            <div class="flip-text">
                <div class="flip-text-inner">
                    <div class="flip-text-front">About Me</div>
                    <div class="flip-text-side">About Me</div>
                </div>
            </div>
        </div>
    </div>
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

#projects {
    position: absolute;
    margin-left: 27vw;
    top: 18vh;
}

#contact {
    position: absolute;
    margin-left: 35vw;
    top:40vh
}

#halls {
    position: absolute;
    left: 5vw;
    top: 25vh;
    width: 27vw;
}

#aboutMe {
    position: absolute;
    left: 55vw;
    top: 60vh;
    white-space: nowrap;
}

.item-container{
    display: flex;
    flex-direction: column;
    height: 100%
}

.item{
    display: flex;
}

.menu-container {
    display: flex;
    flex-direction: column;
}
.flip-text{
    font-size: 6.5vw;
    background-color: transparent;
    perspective: 1000px;
    
}

.flip-text-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: translateZ(-3vw);
}

.flip-text:hover .flip-text-inner {
    transform: rotateX(90deg) translateZ(-3vw) ;
}

.flip-text-front, .flip-text-side {
    position: absolute;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.flip-text-side {
    transform: rotateX(-90deg) translateZ(3vw) translateY(-3vh);
}



</style>
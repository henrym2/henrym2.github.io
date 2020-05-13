<template>
  <div id="contact" class="">
    <div class="flip-box" style="margin-right:5rem">
        <div class="flip-box-inner" >
            <div class="flip-box-front github-front">
                <i class="fa fa-github"></i>
                <p class="github-name">Github</p>
            </div>
            <div class="flip-box-back github-back">
              <i class="fa fa-external-link"></i>
                <a class="link" href="https://github.com/henrym2" target="_blank">See my projects</a>
            </div>
        </div>
    </div>
    <div class="flip-box" style="margin-right:5rem">
        <div class="flip-box-inner">
            <div class="flip-box-front linkedIn-front">
                <i class="fa fa-linkedin"></i>
                <p class="github-name">LinkedIn</p>
            </div>
            <div class="flip-box-back linkedIn-back">
                <i class="fa fa-external-link"></i>
                <a class="link" href="https://www.linkedin.com/in/matthew-henry-89a04b14b/" target="_blank">Join my network</a>
            </div>
        </div>
    </div>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front github-front">
                <p class="fa fa-envelope-o"></p>
                <p class="github-name">Email</p>
            </div>
            <div class="flip-box-back github-back">
                <i class="fa fa-envelope-open-o"></i>
                <a class="link" href="mailto:henrym2@tcd.ie">Get in touch</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
#contact {
    padding: 3vh;
    top: 20vh;
    left: -18vw;
    position: absolute;
    display: flex;
    flex-direction: row;
    /* background: white; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}

.github-name {
  color: white;
  margin-top: 2rem;
  font-size: 3rem;
}

.linkedIn-front {
  
  background-color: #2867B2
}

.link {
  margin-top: 3rem;
  text-decoration: none;
  color: white;
  font-size: 2.5rem;
}

.link:hover {
  color: inherit
}

.github-front {
  color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background-color: black;
    border-radius: 1rem;
}

.fa {
  font-size: 10rem;
  color: white;
  margin-top: 3rem;
}

.github-back {
  background-color: black;
  border-radius: 1rem;
}

.linkedIn-back {
  background-color: #2867B2
}
.flip-box {
  background-color: transparent;
  width: 20vw;
  height: 50vh;
  /* border: 1px solid #f1f1f1; */
  perspective: 1000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  /* background-color: #bbb; */
  /* color: black; */
}

.flip-box-back {
  /* background-color: dodgerblue; */
  /* color: white; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  transform: rotateY(180deg);
}
</style>
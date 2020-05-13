<template>
<div>
  <div id="aboutMe">
    <img id="me" src="../assets/meCat.jpg">
    <div id="about">
    <h6 id="hello"><span style="color: white">H</span>i, I'm Matthew</h6>
    <div class="about-body">
        <p >I'm a 21 year old Computer Science student in Trinity college Dublin.
          <br> I've been working in software engineering in some capacity since I was 17, at that time I started out as a Quality Assurance engineer in 
          <a href="https://corasystems.com/" target="_blank">Cora Systems</a>. From there I went on to work for a year
          <a href="https://telnyx.com/">Telnyx</a> as an Intern and later as a contractor.
        </p>
        <br>
        <p>Now, I'm working as an intern in the 
            <a href="https://www.youtube.com/jobs/engineering/" target="_blank">Youtube</a> 
            creator experience team based in Dublin, Ireland.
        </p>
    </div>
    <br>
    <div class="skill-body">
        <p>I'm proficient in <a>Golang</a>, <a>JavaScript</a>, <a>Java</a>, <a>Python</a> and a few associated frameworks and design systems.</p>
        <p>I've plenty learn in terms of Docker and DevOps practices but have a good deal of experience using both AWS and Azure services, 
            with a preference for AWS</p>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "AboutMe"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

#aboutMe {
    overflow: hidden;
    position: absolute;
    top: 6vh;
    left: 8vw;
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
}

.skill-body{
    color: white;
    mix-blend-mode: difference;
    /* margin-top: 6vh; */
    margin-left: 8vw;
    max-width: 39vw;
    white-space: normal;
    /* font-family: 'Poiret One', cursive; */
    font-family: 'Playfair Display', serif;

    /* font-weight: bold; */
    font-size: 2.4vh;
}

#about {
    display: flex;
    flex-flow: column wrap;
}

.about-body {
    color: white;
    mix-blend-mode: difference;
    margin-left: 5vw;
    max-width: 39vw;
    white-space: normal;
    /* font-family: 'Poiret One', cursive; */
    font-family: 'Playfair Display', serif;

    /* font-weight: bold; */
    font-size: 2.4vh;
}

#me {
    margin-top: 2rem;
    margin-right: -3.5vw;
    width: 26vw;
    height: 52vh
}

#hello {
    margin-top: 3rem;
    font-size: 4.6rem;
    /* font-family: 'Playfair Display', serif; */
    font-family: 'Poiret One', cursive;

    color: black;
    /* mix-blend-mode: difference; */
}
</style>
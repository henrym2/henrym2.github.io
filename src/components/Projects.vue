<template>
  <div id="projects">
      <div v-for="project in projects" :key=project.id 
      class="card project" :id="`${project.identifier}-card`">
        <div class="card-image">
          <figure v-if="project.image" class="image is-4by2" :id="`${project.identifier}-image`">
            <img :src="require(`../assets/${project.identifier}.png`)" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4" :id="`${project.identifier}-title`">{{project.title}}</p>
              <p class="subtitle is-6">{{project.subtitle}}</p>
            </div>
          </div>
          <div class="content">
            {{project.description}}
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              View on <a target="_blank" :href="project.repo">Github</a>
            </span>
          </p>
          <p v-if="project.link" class="card-footer-item">
            <span>
              See it in <a target="_blank" :href="project.link">Action</a>
            </span>
          </p>
        </footer>
      </div>
  </div>
</template>

<script>
export default {
name: 'Projects',
data () {
  return {
    projects: [
    {
      id: 0, identifier: "thermapoll",
      title: "ThermaPoll", subtitle: "Dyamic Climate control system for enterprise",
      image: true,
      description: "A system built as part of my Software Engineering module as a replacement for Microsofts Landsdown Road office. I was Product owner and Backend Team lead for the duration",
      repo: "https://github.com/henrym2/Sweng-11"
    },
    {
      id: 1, identifier: "gitvis",
      title: "GitVis", subtitle: "A Github account data visualizer",
      image: true,
      description: "A webapp written in VueJs, built to vizualize account data, organization data and repository information for github users",
      repo: "https://github.com/henrym2/github-SWENG-vis",
      link: "https://github-sweng-vis-three-teal.now.sh/"
    },
    {
      id: 3, identifier: "eviabi",
      title: "EVIABI", subtitle: "Electronic voting platform",
      image: false,
      description: `An E-voting platform bespokely built for the Trinity College Students Union as part of a 3 man team. Was deployed and used by almost 600 students with plans for expansion in the future.
      built using the MEVN stack and deployed on AWS through the use of Docker containers. Currently under active development`,
      repo: "https://github.com/cwwalsh/eviabi-frontend"
    },
    {
      id: 4, identifier: "githubtui",
      title: "GitHub TUI", subtitle: "A Terminal interface for a users github Repo",
      image: true,
      description: "A terminal user interface for github written in Python. Still in its early stages, uses github api tokens for authentication."
    }
    ]
  }
},
}

</script>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

#projects {
    /* overflow: scroll; */
    overflow: hidden;
    right: 4vw;
    top: 5vh;
    width: 90vw;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: auto;
}

@media(min-width: 600px) {
  #projects {
    grid-template-columns: auto auto;
  }
}


@media (min-width: 900px) {
  #projects {
    grid-template-columns: auto auto auto;
  }

  .project {
  max-width: 30vw;
}
}



.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

footer {
   display: flex;
   justify-self: end;
   
}

/* .project {
  color: white;
  background-color: black;
} */


.title, .subtitle {
  font-family: 'Playfair Display', serif;
}


#eviabi-title {
  font-size: 5vw;
  text-align: center;
  padding-bottom: 2vh;
}

.content {
  font-family: 'Poiret One', cursive;
  font-weight: bold;
}

::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}



#thermapoll-image {
  background-color: black;
  width: inherit;
}

#gitvis-image {
  width: inherit
}

#githubtui-image {
  width: inherit
}



</style>
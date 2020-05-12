<template>
    <div class="topBar">
        <h6 id="location">{{location}}</h6>
        <div id="hamburger">
            <button v-on:click="burgerClick()">
                <svg x="0" y="0" width="2.2vw" height="2.5vh" v-if="!showMenu">
                    <rect y="0vh" width="2vw" x="0" height="0.25vh"></rect>
                    <rect y="1vh" width="2vw" x="0" height="0.25vh"></rect>
                    <rect y="2vh" width="2vw" x="0" height="0.25vh"></rect>
                </svg>
                <svg x="0" y="0" width="2.2vw" height="2.5vh" v-if="showMenu">
                    <line x1="0" y1="0" x2="1.5vw" y2="2.3vh"
                    style="stroke:rgb(255,255,255);stroke-width:2"></line>
                    <line x1="1.5vw" y1="0" x2="0vw" y2="2.3vh"
                    style="stroke:rgb(255,255,255);stroke-width:2"></line>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopBar",
    data () {
        return {
            
        }
    },
    props: {
        showMenu: {
            type: Boolean,
            default: false,
        },
        location: {
            type: String,
            default: "Home"
        }
    },
    methods: {
        burgerClick () {
            this.$emit("menuTrigger")
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
.topBar{
    display: flex;
    position: absolute;
    flex-direction: row;
    width: 99%;
}

#location {
    margin-top: 1.8vh;
    margin-left: 1vw;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 2.5vh;
}

button {
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
    outline: inherit;

}
#hamburger {
    margin-top: 2vh;
    margin-left: auto;
    margin-right: 2vw;
        z-index: 3;
}
</style>
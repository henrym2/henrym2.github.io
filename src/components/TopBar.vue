<template>
    <div class="topBar">
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
            showMenu: false
        }
    },
    props: {
        menuClick: Function
    },
    methods: {
        burgerClick () {
            this.menuClick()
            this.showMenu = !this.showMenu
        }
    }
}
</script>

<style scoped>

.topBar{
    display: flex;
    position: absolute;
    flex-direction: row;
    width: 99%
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
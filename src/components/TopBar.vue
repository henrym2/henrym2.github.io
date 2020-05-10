<template>
    <div class="topBar">
        <div id="hamburger">
            <button>
                <svg x="0" y="0" width="2.2vw" height="2.5vh">
                    <rect y="0vh" width="2vw" x="0" height="0.25vh"></rect>
                    <rect y="1vh" width="2vw" x="0" height="0.25vh"></rect>
                    <rect y="2vh" width="2vw" x="0" height="0.25vh"></rect>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopBar"
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
}
</style>
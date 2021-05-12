<template>
<div class="menu shadow-maker">
    <button v-on:click="$emit('menu-button-click', 1)" class="buttonMenuRight border-style-thin border-style-buttonMenuRight " v-bind:class="{chosen: groupsScheduleChosen}">
        Розклад занять
    </button>
    <button v-on:click="$emit('menu-button-click', 2)" class="buttonMenuCenter border-style-buttonMenuCenter" v-bind:class="{chosen: sessionScheduleChosen}">
        Розклад сесії
    </button>

    <button v-on:click="$emit('menu-button-click', 3)" class="buttonMenuLeft border-style-buttonMenuLeft" v-bind:class="{chosen: teacherScheduleChosen}">
        Розклад занять
    </button>
</div>
</template>
<script>
    export default{
       props: {
       groupsScheduleChosen: Boolean,
       sessionScheduleChosen: Boolean,
       teacherScheduleChosen: Boolean,
       }
    }
</script>
<style>
.menu {
    text-align: center;
    display: flex;
    justify-content: center;
}

.buttonMenuLeft:hover {
    border-color: var(--light-blue-color);
    background-color: var(--light-blue-color);
    color: white;
}
.buttonMenuLeft:hover:after {
    border-color: var(--light-blue-color);
    background-color: var(--light-blue-color);
    color:white;
}
.buttonMenuLeft:active {
    transition: all 0.05s ease 0s;
}
.buttonMenuLeft {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--dark-blue-color);
    outline: none;
    background-color: white;
    color: var(--dark-blue-color);
    cursor: pointer;
    padding: 20px 25px;
    position: relative;
    font-family: Tomorrow, sans-serif;
    font-weight: bold;
    font-size: .85rem;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    z-index: 2;
}
.buttonMenuLeft, .buttonMenuLeft:after {

    clip-path: polygon(
            0 0%,
            10% 0,
            100% 0,
            100% 30%,
            100% 70%,
            90% 100%,
            0% 100%,
            0% 70%,
            0% 0%
    )

}
.border-style-buttonMenuLeft {
    background-color: var(--dark-blue-color);
}
.border-style-buttonMenuLeft:after {
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
}
.buttonMenuLeft:after {
    content: "Розклад викладачів";
    vertical-align: middle;
    position: absolute;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}
.buttonMenuLeft:active:after {
    border-color: var(--dark-blue-color);
    background-color: var(--dark-blue-color);
    color:white;
}




.buttonMenuCenter:hover {
    border-color: var(--light-blue-color);
    background-color: var(--light-blue-color);
}
.buttonMenuCenter:hover:after {
    border-color: var(--light-blue-color);
    background-color: var(--light-blue-color);
    color:white;
}
.buttonMenuCenter:active:after {
    border-color: var(--dark-blue-color);
    background-color: var(--dark-blue-color);
    color:white;
}
.buttonMenuCenter {
    display: flex;
    align-items: center;
    justify-content: center;
    border:  2px solid var(--dark-blue-color);
    outline: none;
    background-color: white;
    color: var(--dark-blue-color);
    cursor: pointer;
    padding: 20px 25px;
    position: relative;
    font-family: Tomorrow, sans-serif;
    font-weight: bold;
    font-size: .85rem;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    z-index: 2;
}
.border-style-buttonMenuCenter {
    background-color: var(--dark-blue-color);
}
.border-style-buttonMenuCenter:after {
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
}
.buttonMenuCenter:after {
    content: "Розклад сесії";
    vertical-align: middle;
    position: absolute;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.buttonMenuRight:hover {
    border-color: var(--light-blue-color);
    background-color: var(--light-blue-color);
    color: white;
}
.buttonMenuRight:hover:after {
    border-color: var(--light-blue-color);
    background-color: var(--light-blue-color);

}
.buttonMenuRight:active {
    transition: all 0.05s ease 0s;
}
.buttonMenuRight {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--dark-blue-color);
    outline: none;
    background-color: white;
    color: var(--dark-blue-color);
    cursor: pointer;
    padding: 20px 25px;
    position: relative;
    font-family: Tomorrow, sans-serif;
    font-weight: bold;
    font-size: .85rem;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    z-index: 2;
}
.buttonMenuRight:active:after {
    border-color: var(--dark-blue-color);
    background-color: var(--dark-blue-color);
    color:white;
}
.buttonMenuRight, .buttonMenuRight:after {

    clip-path: polygon(
            0 0%,
            10% 0,
            100% 0,
            100% 30%,
            100% 100%,
            90% 100%,
            10% 100%,
            0% 70%,
            0% 0%
    )

}
.border-style-buttonMenuRight {
    background-color: var(--dark-blue-color);
}
.border-style-buttonMenuRight:after {
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
}
.buttonMenuRight:after {
    content: "Розклад занять";
    vertical-align: middle;
    position: absolute;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.chosen:after{
    background-color: var(--dark-blue-color);
    color: white;
}
.chosen:hover:after{
    background-color: var(--light-blue-color);
}
.chosen:active:after{
    background-color: var(--dark-blue-color);
}
</style>
<template>
  <div id="app">
<div class="header shadow-maker">
    <img class="Logo" src="@/img/logo.gif">
    <p class="department">Департамент організації навчального процесу</p>
</div>
<MenuSection
    v-bind:groupsScheduleChosen="groupsScheduleChosen"
    v-bind:sessionScheduleChosen="sessionScheduleChosen"
    v-bind:teacherScheduleChosen="teacherScheduleChosen"
    v-on:menu-button-click="menuButtonClick"
/>
    <InputSection
        v-bind:inputSectionStrings="inputSectionStrings"
    />

  </div>
</template>

<script>
import MenuSection from '@/components/MenuSection'
import InputSection from '@/components/InputSection'

export default {
  name: 'App',
  data(){
  return{
    //Menu buttons states (true = chosen)
    groupsScheduleChosen: true,
    sessionScheduleChosen: false,
    teacherScheduleChosen: false,
    //Strings of input section widgets
    inputSectionStrings:{
    inputTextLabel: "Група",
    inputTextPrompt: "Введіть назву групи",
    buttonText: "Розклад занять"},

  }
  },
  components: {
    MenuSection,
    InputSection
  },
  methods:{
    menuButtonClick(buttonNumber){
      if(buttonNumber==1){
        //Menu buttons color changing
        this.groupsScheduleChosen = true
        this.sessionScheduleChosen = false
        this.teacherScheduleChosen = false

        //Changing the input section
        this.inputSectionStrings={
            inputTextLabel: "Група",
            inputTextPrompt: "Введіть назву групи",
            buttonText: "Розклад занять"}
      }
      if(buttonNumber==2){
        //Menu buttons color changing
        this.groupsScheduleChosen = false
        this.sessionScheduleChosen = true
        this.teacherScheduleChosen = false

        //Changing the input section
        this.inputSectionStrings={
          inputTextLabel: "Група",
          inputTextPrompt: "Введіть назву групи",
          buttonText: "Розклад сесії"}
      }
      if(buttonNumber==3){
        //Menu buttons color changing
        this.groupsScheduleChosen = false
        this.sessionScheduleChosen = false
        this.teacherScheduleChosen = true

        //Changing the input section
        this.inputSectionStrings={
          inputTextLabel: "Викладач",
          inputTextPrompt: "Прізвище Ім'я По-батькові",
          buttonText: "Розклад занять"}
      }
    }
  }
}
</script>

<style>
:root {
    --dark-blue-color: #285f8e;
    --light-blue-color: #448ecd;
    --group-color: white;
    --input-color: #525252;
    --group-background: #285f8e;
    --input-background: white;


}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.Logo {
    width: 160px;
    margin-top: 20px;
}

.header {
    width: 100%;
    height: 30%;
    background-color: var(--dark-blue-color);
    text-align: center;
    font-weight: bold;
    color: white;
    font-family: Ubuntu, Helvetica, Arial, sans-serif;

    font-size: .85rem;
    text-transform: uppercase;

    padding-bottom: 5px;
}

.department {
    margin-bottom: 5px;
}
.shadow-maker {
    filter: drop-shadow(-3px 14px 3px rgba(50, 50, 50, 0.5));
}
body {
    margin: 0;
}
</style>

<template>
  <div class="AllInputSection">
  <div class="wrap" style="z-index: 2">
    <div class="shadow-maker">
      <div class="form-group border-style-form-group">
        <span>{{inputSectionStrings.inputTextLabel}}</span>
        <input  v-model="search" class="form-field" type="text" :placeholder="inputSectionStrings.inputTextPrompt">
      </div>
      <div class="prompts-content" v-show="checkSearch()" >
        <div class="prompts-sub">
            <ul>
              <li v-for="group in filteredGroups" v-on:click="insertGroupName(group.name)" v-bind:key="group" class="promptListItem" >
                <a href="#" >{{group.name}}</a>
              </li>
            </ul>
          </div>
        <div class="cut-corner border-style-cut-corner"></div>
      </div>
    </div>

  </div>
  <div class="wrap">
 <span class="shadow-maker">
<button class="CutButton">
  {{inputSectionStrings.buttonText}}
</button>
  </span>
  </div>
  </div>
</template>

<script>
import json from './groupNames.json'
export default {
  name: "InputSection",
  data(){
    return{
      groupNames: json,
      search: '',
      showPrompt: false,


    }
  },
  props: {
    inputSectionStrings: Object,
  },
  computed:{
    /**
     * Функція фільтрує назви груп
     * @returns {array} відфільтрований список груп
     */
    filteredGroups: function (){
      return this.groupNames.filter((group) =>{
        if (!this.search){
          return false;
        }
        return group.name.slice(0, this.search.length) == this.search
      });
    }
  },
  methods:{
    /**
     * Функція вставляє назву групи, вибрану із пошукового фільтру, у поле для вводу
     * @param name chosen name from search filter
     */
    insertGroupName: function (name){
      this.search = name;
    },
    /**
     * Функція переверіє коли показувати пошуковий філтр
     * @returns {boolean} якщо поле для вводу або відфільтрований список пусті - повертається false
     */
    checkSearch: function (){
      if (!this.search || !this.filteredGroups.length){
        return false;
      }
      else{
        return true;
      }

    }
  },
  created() {

  }
}
</script>

<style >
.form-field {
  display: block;
  width: 100%;
  padding: 8px 16px;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  color: var(--input-color);
  border: 1px solid var(--dark-blue-color);
  background: var(--input-background);
  transition: border 0.3s ease;
  clip-path: polygon(0 0%, 10% 0, 95% 0, 100% 30%, 100% 100%, 90% 100%, 20% 100%, 0% 100%, 0% 0%);
}
.form-field::placeholder {
  color: var(--input-color);
}
.form-field:focus {
  outline: none;
}
.form-group, .form-group:after {
  margin-top: 30px;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  font-weight: bold;
  text-transform: uppercase;
  clip-path: polygon(0 0%, 10% 0, 96% 0, 100% 28%, 100% 100%, 90% 100%, 3.5% 100%, 0% 73%, 0% 0%);
}

.form-group:after {
  position: absolute;
}

.border-style-form-group {
  display: block;
  background-color: var(--dark-blue-color);
  border: 2px solid var(--dark-blue-color);


}

.border-style-form-group:after {
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
}

.form-group {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}

.form-group > span {
  text-align: center;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 25px;
  color: var(--group-color);
  background: var(--group-background);
  border: 1px solid var(--dark-blue-color);
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  clip-path: polygon(0 0%, 10% 0, 100% 0, 100% 30%, 100% 100%, 90% 100%, 20% 100%, 0% 70%, 0% 0%);
}
body .form-group {
  max-width: 460px;
}

.CutButton {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--dark-blue-color);
  outline: none;
  background-color: var(--dark-blue-color);
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 20px 25px;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  box-shadow: 29px 35px 23px rgba(1, 1, 17, 0.4);
  transition: all 0.3s ease 0s;
  margin-Top: 30px;
  z-index: 2;
}

.CutButton {
  clip-path: polygon(
      0 0%,
      10% 0,
      90% 0,
      100% 30%,
      100% 100%,
      90% 100%,
      10% 100%,
      0% 70%,
      0% 0%
  )
}

.wrap {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.CutButton:hover {
  transform: translateY(-7px);
}
.CutButton:hover {
  background-color: var(--light-blue-color);
  border: 2px solid var(--light-blue-color);
}
.CutButton:active {
  transform: scale(1.07) translateY(-7px);
  transition: all 0.05s ease 0s;
}
.container {
  width: 30rem;
  height: 20rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
}
.AllInputSection{
  margin-top: 3rem;
}

.prompts-content > .prompts-sub > ul > li{
  list-style-type: none;
}
.prompts-content > .prompts-sub > ul{
  padding: 0;
}
.prompts-content > .prompts-sub > ul > li > a{
  text-decoration: none;
  font-family: Tomorrow, sans-serif;
  color: var(--dark-blue-color);
  width: 100%;
  line-height: 40px;
  height: 40px;
  display: block;
}

a:hover{
  background-color: var(--light-blue-color);
  color: white;
}

.prompts-content{
  position: absolute;
  float: right;
  display: block;
  max-height: 0;
  overflow: hidden;
  width: 100%;
  padding-left: 16%;

  border-left: 3px solid rgba(0, 0, 0, 0);
  border-right: 3px solid rgba(0, 0, 0, 0);

}
.prompts-sub{
  float: left;
  width: 100%;
  max-height: 140px;
  overflow-y: scroll;
  background-color: white;
  display: block;
  border-left: 3px solid var(--dark-blue-color);
  border-right: 3px solid var(--dark-blue-color);
}
.cut-corner{
  clear:both;
  width: 100%;
  position: relative;
  background-color: white;
  border-left: 3px solid var(--dark-blue-color);
  height: 20px;
  display: block;

}


.cut-corner, .cut-corner:after {
  clip-path: polygon(
      0 0%,
      0% 0,
      100% 0,
      100% 100%,
      100% 100%,
      100% 100%,
      10% 100%,
      0% 0%,
      0% 0%
  )
}

.border-style-cut-corner {

  background-color: var(--dark-blue-color);
  border-bottom: 2px solid var(--dark-blue-color);

  border-left: 3px solid var(--dark-blue-color);
  border-right: 3px solid var(--dark-blue-color);

}
.border-style-cut-corner:after {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.cut-corner:after {
  content: "";
  outline: none;
  position: absolute;
  background: white;
}
.form-group:focus-within ~ .prompts-content{
  max-height: 200px;
  transition: max-height 0.4s ease-in;
}

.prompts-content:active{
  max-height: 200px;
}




/*.cut-corner {*/
/*  background-color: white;*/
/*  position: relative;*/
/*}*/

/*.cut-corner:after {*/
/*  content: "";*/
/*  position: absolute;*/
/*  background: white;*/
/*  display:block;*/
/*}*/

/*.cut-corner, .cut-corner:after {*/
/*  clip-path: polygon(*/
/*      0 0%,*/
/*      0% 0,*/
/*      100% 0,*/
/*      100% 30%,*/
/*      100% 100%,*/
/*      100% 100%,*/
/*      10% 100%,*/
/*      0% 0%,*/
/*      0% 0%*/
/*  )*/

/*}*/

/*.border-style-cut-corner {*/
/*  background-color: var(--dark-blue-color);*/
/*}*/

/*.border-style-cut-corner:after {*/
/*  top: 1px;*/
/*  left: 1px;*/
/*  right: 1px;*/
/*  bottom: 1px;*/
/*}*/

</style>
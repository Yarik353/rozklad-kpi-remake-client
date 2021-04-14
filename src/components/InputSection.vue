<template>
  <div class="AllInputSection">
  <div class="wrap">
    <div class="shadow-maker">
      <div class="form-group border-style-form-group">
        <span>{{inputSectionStrings.inputTextLabel}}</span>
        <input class="form-field" type="text" :placeholder="inputSectionStrings.inputTextPrompt">
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
export default {
  name: "InputSection",
  props: {
    inputSectionStrings: Object,
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
.form-group:focus-within > span{
  background: var(--light-blue-color);
  border-color: var(--light-blue-color);
}
.form-group:focus-within > .form-field{
  border-color: var(--light-blue-color);
}
.form-group:focus-within > .border-style-form-group{
  background-color: var(--light-blue-color);
  border-color: var(--light-blue-color);
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
</style>
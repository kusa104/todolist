<template>
  <div class="clac_form">
		<h1>계산기</h1>
		<div class="form">
			<input type="text" v-model="output" />
			<input type="button" class="clear" value="C" @click="clear()" />
			<input type="button" class="operator" value="/" @click="input('/')" />
			<input type="button" class="" value="1" @click="input(1)" />
			<input type="button" class="" value="2" @click="input(2)" />
			<input type="button" class="" value="3" @click="input(3)" />
			<input type="button" class="operator" value="*" @click="input('*')" />
			<input type="button" class="" value="4" @click="input(4)" />
			<input type="button" class="" value="5" @click="input(5)" />
			<input type="button" class="" value="6" @click="input(6)" />
			<input type="button" class="operator" value="+" @click="input('+')" />
			<input type="button" class="" value="7" @click="input(7)" />
			<input type="button" class="" value="8" @click="input(8)" />
			<input type="button" class="" value="9" @click="input(9)" />
			<input type="button" class="operator" value="-" @click="input('-')" />
			<input type="button" class="dot" value="." @click="input('.')" />
			<input type="button" class="" value="0" @click="input(0)" />
			<input type="button" class="operator result" value="=" @click="enter()" />
		</div>
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: function() {
	  return{
			output: '',
			return: false,
	  }
  },
	methods: {
		input: function(s){
			if(this.return) this.clear();
			this.output += String(s);
		},
		clear: function(){
			this.output = '';
			this.return = false;
		},
		enter: function(){
			this.output = eval(this.output);
			this.return = true;
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.clac_form {
		width: 287px;
		border: 1px solid #333;
		background-color: #ccc;
		padding: 5px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	.form {
		display: grid;
		grid-template-columns: repeat(4, 65px);
		grid-auto-rows: 65px;
		grid-gap: 5px;
	}
	.form input {
		border: 2px solid #333;
		cursor: pointer;
		font-size: 19px;
	}
	.form input:hover {
		box-shadow: 1px 1px 2px #333;
	}
	.form .clear {
		background-color: #ed4848;
	}
	.form .operator {
		background-color: orange;
	}
	.form .dot{
		background-color: yellowgreen;
	}
	.form input[type='text'] {
		grid-column: span 4;
	}
	.form .clear {
		grid-column: span 3;
	}
	.form .result {
		grid-column: span 2;
	}
</style>

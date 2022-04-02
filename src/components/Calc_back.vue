<template>
  <div class="clac_form">
		<h1>계산기</h1>
		<input type="text" v-model="num1" />&nbsp;&nbsp;
		<input type="text" v-model="num2" /><br><br>
		<button @click="plus"> + </button>&nbsp;&nbsp;
		<button @click="minus"> - </button>
		<h3 class="yellow">{{ result }}</h3>
		<ul v-for="item in history" :key="item.id">
			<li>{{ item }}</li>
		</ul>
		<!-- <ul v-for="idx in history" :key="idx">
			<li>{{ history[idx] }}</li>
		</ul> -->
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data: function() {
	  return{
    	num1: '',
			num2: '',
			result: '',
			history: [],
	  }
  },
	methods: {
		plus: function(){
			if(this.num1 != '' && this.num2 != ''){
				if(this.result!='') this.history.unshift(this.result)
				this.result = this.num1 + " + " + this.num2 + " = " + String(Number(this.num1) + Number(this.num2))
			}
		},
		minus: function(){
			if(this.num1 != '' && this.num2 != ''){
				if(this.result!='') this.history.unshift(this.result)
				this.result = this.num1 + " - " + this.num2 + " = " + String(Number(this.num1) - Number(this.num2))
			}
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
	.yellow {
		background-color: yellow;
	}
</style>
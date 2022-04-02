<template>
	<div>
		<p>{{prop}}</p>
		<button @click="emitCall">값 변경</button>
		<!--<input type="text" v-model="message" /><br>
		<p>{{reversedMessage}}</p>
		 <p v-if="seen">이제 나를 볼 수 있어요.</p>
		<div v-if="Math.random() > 0.5">
			이제 나를 볼 수 있어요.
		</div>
		<div v-else>
			이제 안보입니다.
		</div>
		<ul v-for="(item, idx) in items" :key="idx">
			<li>{{ idx }} : {{ item.name }}의 가격은 {{ item.price }}입니다.</li>
		</ul>
    <h1 :class="flag2" :href="url">{{ msg.substr(0,6) }}</h1>
    <p :align="align">{{ array[0] }}</p>
    <p v-bind:style="{background: bgcolor}">이름은 {{ object.name }}이고, 나이는 {{ object.age }}입니다.</p>
		<input type="text" v-model="msg" /><br>
		<input type="radio" v-model="radio_model" value="red" /> red
		<input type="radio" v-model="radio_model" value="blue" /> blue
		<input type="radio" v-model="radio_model" value="green" /> green<br>
		<input type="checkbox" v-model="check" value="red" /> red
		<input type="checkbox" v-model="check" value="blue" /> blue
		<input type="checkbox" v-model="check" value="green" /> green
		<p :class="msg">{{ msg }}</p>
    <h3 :class="radio_model">Installed CLI Plugins</h3>
    <h3>{{ check }}</h3>
		<h3 v-on:click="hi">반갑습니다.</h3>
		<h3 @click="hi">반갑습니다.</h3>
		<h3 v-show="flag">flag==true</h3>
		<h3 v-if="flag">flag==true</h3>
		<h3 v-else-if="flag2">flag==false && flag2==true</h3>
		<h3 v-else>flag==false && flag2 == false</h3> -->
  </div>
</template>

<script>
var code = {
	name : 'a',
	age : 1, 
}

export default {
  name: 'HelloWorld',
	props: ['prop'],
  data: function() {
	  return{
			// name: '한진희',
			// age : 10,
			// message: "안녕하세요! Vue.js!",
			// items: [
			// 	{ message: "Foo" },
			// 	{ message: "Bar" },
			// 	{ message: "Baz" },
			// ],
			// type: 'D',
			// seen: true,
			// msg: 'Vue.js입니다.',
			// array: ['커피', '홍차', '녹차'],
			// object: code,
			// url: 'https://www.naver.com',
			// align: 'right',
			// bgcolor: 'yellow',
			// flag: true,
			// flag2: false,
			// radio_model: '',
			// check: [],
			// items: [
			// 	{name: '피자', price: '23000'},
			// 	{name: '햄버거', price: '10000'},
			// 	{name: '떡볶이', price: '14000'},
			// ],
	  }
  },
	computed: {
		// flag3: function(){
		// 	if(this.flag) return 'name';
		// 	else '';
		// },
		// reversedMessage: function() {
		// 	return this.message.split('').reverse().join('');
		// }
	},
	methods: {
		hi: function(){
			alert('안녕하세요.')
		},
		bye: function(){
			alert('안녕히가세요.')
		},
		emitCall(){
			this.$emit('hello', "b");
		},
		// reverseMessage(){
		// 	this.message=this.message.split('').reverse().join('');
		// },
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
/* ul {
  list-style-type: none;
  padding: 0;
} */
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
	.name {
		background-color: red;
	}
	.red {
		background-color: red;
	}
	.blue {
		background-color: blue;
	}
	.green {
		background-color: green;
	}
</style>

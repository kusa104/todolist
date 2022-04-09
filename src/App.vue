<template>
  <div id="app">
    <!-- <Calc /> -->
    <!-- <HelloWorld :prop="hello" @hello="childCall"/> -->
		<Header />
		<Todolist />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Todolist from './components/Todolist.vue'
// import Calc from './components/Calc.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
		Header,
		Todolist,
		// Calc,
  },
	data: function(){
		return{
			hello:"a",
		}
	},
	methods: {
		childCall(val){
			this.hello = val;
			console.log(val);
		}
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
	/* display: flex;
	justify-content: center; */
}
</style>

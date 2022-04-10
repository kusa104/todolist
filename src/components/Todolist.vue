<template>
	<div>
		<div class="black-bg" v-if="modifyWindow">
			<main class="todo">
				<div class="container">
					<ul class="list_add">
						<li class="list_add_tit"><p>수정 하기</p></li>
						<li><p><input type="text" v-model="modifyInfo.todo">&nbsp;<input type="date" v-model="modifyInfo.deadline"></p></li>
						<button class="button1" @click="modifyTodo(modifyIdx)">수 정</button>&nbsp;&nbsp;<button class="button1" @click="modifyWindow=false">닫 기</button>
					</ul>
				</div>
			</main>
		</div>
		
		<TodoInput @addTodo="addTodo" />
		<main class="todo">
			<div class="container">
				<!-- ul.todo_list -->
				<ul class="todo_list">
					<li class="todo_list_tit"><p>할 일</p></li>
					<li class="todo_list_info"><p> {{remaining}} / {{todolist.length}} 건 완료 </p>&nbsp;&nbsp;&nbsp;<button class="button2" @click="cleanTodo">완료목록삭제</button></li>
					<li class="del_btn" v-for="(item, idx) in todolist" :key="idx">
						<p :class="[{doneStyle: item.done}, {deadlineStyle: chkDeadline(idx)}]"><input type="checkbox" name="check1" v-model="item.done">{{item.todo}} ({{item.deadline}})</p>
						<ul class="todo_list_btn">
								<li><button @click="modifyWindowOpen(idx)">수 정</button></li>
								<li><button @click="subTodo(idx)">삭 제</button></li>
						</ul>
					</li>
				</ul>
				<!--// ul.todo_list -->
			</div>
		</main>
		<!--// main.todo -->
	</div>
</template>

<script>
import TodoInput from './TodoInput.vue'
	
export default {
  name: 'Todolist',
  components: {
    TodoInput,
  },
  data: function() {
	  return{
			modifyWindow: false,
			modifyIdx: -1,
			modifyInfo: {done: false, todo: '', deadline: ''},
			todolist: [
				{done: false, todo: "Vue.js 공부하기", deadline: '2022-04-09'},
				{done: false, todo: "근무상황부 작성하기", deadline: '2022-04-20'},
				{done: false, todo: "독서하기 - 독후 과제 작성하기", deadline: '2022-04-20'},
				{done: false, todo: "아이와 놀아주기", deadline: '2022-04-20'},
				{done: false, todo: "서피스 펜 최저가 찾기", deadline: '2022-04-20'},
			],
	  }
  },
	computed: {
		remaining(){
			return this.todolist.filter(function(item){
				return item.done;
			}).length;
		},
	},
	methods: {
		addTodo(val){
			this.todolist.push(val);
		},
		subTodo(idx){
			if(confirm('삭제하시겠습니까?')){
				this.todolist.splice(idx, 1);
				alet('삭제하였습니다.')
			}
		},
		modifyWindowOpen(idx){
			this.modifyWindow = true;
			this.modifyIdx = idx;
			this.modifyInfo = JSON.parse(JSON.stringify(this.todolist[this.modifyIdx]));
		},
		modifyTodo(idx){
			if(confirm('수정하시겠습니까?')){
				this.todolist[this.modifyIdx].done = this.modifyInfo.done;
				this.todolist[this.modifyIdx].todo = this.modifyInfo.todo;
				this.todolist[this.modifyIdx].deadline = this.modifyInfo.deadline;
				alert('수정하였습니다.')
			}
			this.modifyWindow = false;
		},
		cleanTodo(){
			this.todolist = this.todolist.filter(function(item){
				return !item.done;
			})
		},
		chkDeadline(idx){
			const today = new Date();
			const todayString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2)+ '-' + ('0' + today.getDate()).slice(-2);
			return this.todolist[idx].deadline == todayString && !this.todolist[idx].done;
		},
	},
}
</script>
<style>
.doneStyle {
	text-decoration: line-through;
	color: lightgray;
}
.deadlineStyle {
	font-weight: bold;
	color: orangered;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 50px;
}
.button1 {
	margin-top: 20px;
	margin-bottom: 10px;
  box-sizing: border-box;
  width: 10%;
  padding: 4px 10px 2px 10px;
  color: #31a5c8;
  background-color: #fff;
  border: solid 1px #31a5c8;
  border-radius: 4px;
}
.button1:hover {
  color: #fff;
  background-color: #31a5c8;
  border: solid 1px #fff;
}
.button2 {
  box-sizing: border-box;
  width: 15%;
  padding: 4px 10px 2px 10px;
  color: #31a5c8;
  background-color: #fff;
  border: solid 1px #31a5c8;
  border-radius: 4px;
}
.button2:hover {
  color: #fff;
  background-color: #31a5c8;
  border: solid 1px #fff;
}
</style>

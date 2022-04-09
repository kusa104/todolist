<template>
	<div>
		<!-- main.todo -->
    <TodoInput @addTodo="addTodo" />
    <main class="todo">
        <div class="container">
            <!-- ul.todo_list -->
            <ul class="todo_list">
                <li class="todo_list_tit"><p>할 일</p></li>
                <li class="del_btn" v-for="(item, idx) in todolist" :key="idx">
                  <p :class="{doneStyle: item.done}"><input type="checkbox" name="check1" v-model="item.done">{{item.todo}} ({{item.deadline}})</p>
									<ul class="todo_list_btn">
											<li><button @click="modifyTodo(idx)">수 정</button></li>
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
			todolist: [
				{done: false, todo: "Vue.js 공부하기", deadline: '2022-04-20'},
				{done: false, todo: "근무상황부 작성하기", deadline: '2022-04-20'},
				{done: false, todo: "독서하기 - 독후 과제 작성하기", deadline: '2022-04-20'},
				{done: false, todo: "아이와 놀아주기", deadline: '2022-04-20'},
				{done: false, todo: "서피스 펜 최저가 찾기", deadline: '2022-04-20'},
			],
	  }
  },
	methods: {
		addTodo(val){
			this.todolist.push(val);
		},
		subTodo(idx){
			if(confirm('삭제하시겠습니까?')){
				this.todolist.splice(idx, 1);
			}
		},
		modifyTodo(idx){
			let inputText = prompt('입력받기', this.todolist[idx].todo);
			if(inputText === null || inputText.length == 0){
				alert('수정을 취소하였습니다.');
			}else{
				this.todolist[idx].todo = inputText;
			}
		},
	},
}
</script>
<style>
	.doneStyle {
		text-decoration: line-through;
		color: lightgray;
	}
</style>

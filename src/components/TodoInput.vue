<template>
	<div>
    <main class="todo">
        <div class="container">
          <h1>To - Do List</h1>
					<!-- ul.list_add -->
					<ul class="list_add">
							<li class="list_add_tit"><p>등록 하기</p></li>
							<li><p><input type="text" v-model="todoItem.todo">&nbsp;<input type="date" v-model="todoItem.deadline">&nbsp;&nbsp;<button @click="addTodo">등 록</button></p></li>
					</ul>
					<!--// ul.list_add -->
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data: function() {
	  return{
			todoItem: {done: false, todo: '', deadline: ''},
			// addText: '',
			// deadline: '',
	  }
  },
	methods: {
		addTodo(){
			if(this.todoItem.todo == ''){
				alert('내용을 입력하세요.');
			}else if(this.todoItem.deadline == ''){
				alert('종료일을 입력하세요.')
			}else{
			this.$emit("addTodo", this.todoItem);
			}
		},
	},
}
</script>
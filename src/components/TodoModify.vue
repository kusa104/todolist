<template>
	<div>
		<div class="black-bg" v-if="modifyInfo.window">
			<main class="todo">
				<div class="container">
					<ul class="list_add">
						<li class="list_add_tit"><p>수정 하기</p></li>
						<li><p><input type="text" v-model="modifyInfo.item.todo">&nbsp;<input type="date" v-model="modifyInfo.item.deadline"></p></li>
						<button class="button1" @click="modifyTodo">수 정</button>&nbsp;&nbsp;<button class="button1" @click="modifyInfo.window=false">닫 기</button>
					</ul>
				</div>
			</main>
		</div>
  </div>
</template>

<script>
export default {
  name: 'TodoModify',
	props: {
		modifyInfo: Object,
	},
	methods: {
		modifyTodo(){
			if(this.modifyInfo.item.todo == ''){
				alert('내용을 입력하세요.');
			}else if(this.modifyInfo.item.deadline == ''){
				alert('종료일을 입력하세요.')
			}else{
			this.$emit("modifyTodo", this.modifyInfo);
			}
		},
	},
}
</script>
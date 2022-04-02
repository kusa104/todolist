<template>
	<div>
		<!-- main.todo -->
    <main class="todo">
        <div class="container">
            <h1>To - Do List</h1>

            <!-- ul.list_add -->
            <ul class="list_add">
                <li class="list_add_tit"><p>등록 하기</p></li>
                <li><p><input type="text"><button>등 록</button></p></li>
            </ul>
            <!--// ul.list_add -->

            <!-- ul.todo_list -->
            <ul class="todo_list">
                <li class="todo_list_tit"><p>할 일</p></li>
                <li class="del_btn" v-for="(item, idx) in todolist" :key="idx">
                    <p><input type="checkbox" name="check1" value="">{{item.todo}}</p>
                </li>
            </ul>
            <!--// ul.todo_list -->

        </div>
    </main>
    <!--// main.todo -->
	</div>
</template>

<script>
export default {
  name: 'Todolist',
  data: function() {
	  return{
			todolist: [
				{todo: "Vue.js 공부하기"},
				{todo: "근무상황부 작성하기"},
				{todo: "독서하기 - 독후 과제 작성하기"},
				{todo: "아이와 놀아주기"},
				{todo: "서피스 펜 최저가 찾기"},
			],
	  }
  },
}
</script>

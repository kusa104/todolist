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



                <li class="del_btn">
                    <p>
                        <input type="checkbox" name="check1" value="">JS 공부하기
                    </p>
                    <ul class="todo_list_btn">
                        <li><button>수 정</button></li>
                        <li><button>삭 제</button></li>
                    </ul>
                </li>



                <li>
                    <p><input type="checkbox" name="check2" value="">웹 알아보기</p>
                    <p><span></span></p>
                </li>
                <li>
                    <p><input type="checkbox" name="check3" value="">책 읽기</p>
                    <p><span></span></p>
                </li>
                <li>
                    <p><input type="checkbox" name="check4" value="">거북이한테 전화하기</p>
                    <p><span></span></p>
                </li>
                <li>
                    <p><input type="checkbox" name="check5" value="">유리랑 소꿉놀이하기</p>
                    <p><span></span></p>
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
			
	  }
  },
}
</script>

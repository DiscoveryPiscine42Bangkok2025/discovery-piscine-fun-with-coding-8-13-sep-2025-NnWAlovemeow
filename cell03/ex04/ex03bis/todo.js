let TodoList = [];

    function createTodo(text) {
      const $element = $("<div>").addClass("todo");
      $element.append($("<p>").text(text));
      const $deleteBtn = $("<button>").text("Delete");

      $deleteBtn.on("click", function () {
        removeTodo(text);
      });

      $element.append($deleteBtn);
      return $element;
    }

    function render() {
      const $list = $("#ft_list");
      $list.empty();
      TodoList.forEach(item => {
        $list.append(createTodo(item));
      });

      // save todos in cookie
      document.cookie = "todos=" + JSON.stringify(TodoList) + ";path=/";
    }

    function newTodo() {
      const name = prompt("Name the todo.");
      if (name && name.trim().length > 0) {
        TodoList.unshift(name.trim());
        render();
      }
    }

    function removeTodo(text) {
      if (confirm("Are you sure to remove?")) {
        TodoList = TodoList.filter(item => item !== text);
        render();
      }
    }

    function getCookie(name) {
      const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) return match[2];
      return null;
    }

    $(document).ready(function () {
      // restore saved todos
      const save = getCookie("todos");
      if (save) {
        TodoList = JSON.parse(save);
        render();
      }

      // event for add button
      $("#newTodoBtn").on("click", newTodo);
});
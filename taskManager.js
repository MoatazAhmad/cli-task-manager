import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];
let history = [];

function showMenu() {
  console.log("\nTask Manager Menu:");
  console.log("1. Add Task");
  console.log("2. Remove Task");
  console.log("3. Mark Task as Done");
  console.log("4. View Tasks");
  console.log("5. Undo Last Action");
  console.log("6. Exit");

  rl.question("\nChoose an option (1-6): ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        removeTask();
        break;
      case "3":
        markTaskDone();
        break;
      case "4":
        viewTasks();
        break;
      case "5":
        undoLastAction();
        break;
      case "6":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice! Please select a valid option.");
        showMenu();
    }
  });
}

function addTask() {
  console.log("add task choosen");
}

function removeTask() {
  console.log("remove task choosen");
}

function markTaskDone() {
  console.log("mark task as done choosen");
}

function viewTasks() {
  console.log("viewTasks choosen");
}

function undoLastAction() {
  console.log("add task choosen");
}

console.log("Welcome to the CLI Task Manager!");
showMenu();

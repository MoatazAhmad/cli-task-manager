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
        viewTasksForUser();
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
  rl.question("Enter task description: ", (task) => {
    if (task.trim() === "") {
      console.log("task can't be empty");
    } else {
      tasks.push({ text: task, done: false });
      history.push({ action: "add", task });
      console.log(`Added: "${task}"`);
    }
    showMenu();
  });
}

function removeTask() {
  if (tasks.length == 0) {
    console.log("no tasks to remove");
    return showMenu();
  }
  viewTasksForFunc();
  rl.question("enter task number you want to remove", (num) => {
    num = parseInt(num) - 1;
    if (num >= 0 && num < tasks.length) {
      let removedTask = tasks.splice(num, 1)[0];
      history.push({ action: "remove", task: removeTask });
      console.log(`Removed: "${removedTask.text}"`);
    }
    showMenu();
  });
}

function markTaskDone() {
  // show the tasks avalibe , if not show no tasks avalible ,
  // and let user choose between them with index
  if (tasks.length === 0) {
    console.log("No tasks to mark as done!");
    return showMenu();
  }
  viewTasksForFunc();
  rl.question("enter task number to mark as done", (num) => {
    num = parseInt(num) - 1;
    if (num >= 0 && num < tasks.length && !tasks[num].done) {
      tasks[num].done = true;
      history.push({ action: "done", index: num });
      console.log(`Marked as done: "${tasks[num].text}"`);
    } else {
      console.log("Invalid task number or task already done!");
    }
    showMenu();
  });
}

function viewTasksForFunc() {
  console.log("\nTasks:");
  if (tasks.length == 0) {
    console.log("No tasks available.");
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.done ? "✔️" : "❌"}] ${task.text}`);
    });
  }
}
function viewTasksForUser() {
  viewTasksForFunc();
  showMenu();
}

function undoLastAction() {
  if (history.length == 0) {
    console.log("Nothing to undo!");
    return showMenu();
  }
  const lastAction = history.pop();
  switch (lastAction.action) {
    case "add":
      tasks.pop();
      console.log(`Undid adding task: "${lastAction.task}"`);
      break;
    case "remove":
      tasks.push(lastAction.task);
      console.log(`Undid removing task: "${lastAction.task.text}"`);
      break;
    case "done":
      tasks[lastAction.index].done = false;
      console.log(
        `Undid marking task as done: "${tasks[lastAction.index].text}"`
      );
      break;
  }
  showMenu();
}

console.log("Welcome to the CLI Task Manager!");
showMenu();

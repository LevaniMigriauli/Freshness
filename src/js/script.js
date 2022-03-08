"use strict";

const demo = () =>
  "Webpack Boilerplate v5.11.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.";

// eslint-disable-next-line no-console
console.log(demo());

const tasks = [
  "First task",
  "Second task",
  "Third task",
  "Fourth task",
  "Fifth task",
];

// const listContainer = document.getElementById("#todo-list");
// console.log(document.querySelector(".button-add"));

// document.querySelector(".button-add").addEventListener("click", function () {
//   const listItem = listContainer.createElement("li");
//   listItem.innerText = "Task";
// });

function renderList() {
  const listContainer = document.getElementById("todo-list ");

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.innerText = task;
    listContainer.append(listItem);
  });
}

renderList();

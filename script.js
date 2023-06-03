//parse url code
function getQueryParam(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to set the value of an input element
function setInputValue(selector, value) {
  const input = document.querySelector(selector);
  if (input) {
    input.value = value;
  }
}

// Retrieve the username from the URL query parameter and set the input value
const username = getQueryParam("username");
if (username) {
  setInputValue("#username", username);
}

preview();
function url() {
  if (!value("username"))
    document.querySelector("#username").value = "devagn_maniya";
  return (
    "https://leetcard.jacoblin.cool/" +
    encodeURIComponent(value("username")) +
    "?theme=" +
    encodeURIComponent(value("theme")) +
    "&font=" +
    encodeURIComponent(value("font")) +
    (value("extension")
      ? "&ext=" + encodeURIComponent(value("extension"))
      : "") +
    (value("site") === "cn" ? "&site=cn" : "")
  );
}
function preview() {
  document.querySelector("#preview").src = url();
}
function go() {
  // let win = window.open();
  // win.location = url();
  let win = "<embed src=" + url() + " >";
  prompt(" ", win);
}
function md() {
  let code = "![LeetCode Stats](" + url() + ")";
  prompt("Markdown Code: ", code);
}
function value(id) {
  return document.querySelector("#" + id).value.trim() || "";
}

const toggleButton = document.getElementById("dark-mode");
const body = document.body;
const container = document.querySelector(".container");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  container.classList.toggle("dark");
});

// window.onload = function() {
//     document.getElementById("submit-button").click();
// }
// function url() {
//     if (!document.querySelector("#username").value.trim())
//         document.querySelector("#username").value = "devagn_maniya";
//     return (
//         "https://leetcard.jacoblin.cool/" +
//         document.querySelector("#username").value.trim() +
//         "?theme=" +
//         document.querySelector("#theme").value +
//         "&font=" +
//         document.querySelector("#font").value +
//         "&extension=" +
//         document.querySelector("#extension").value
//     );
// }
// function preview() {
//     document.querySelector("#preview").src = url();
// }
// function go() {
//     let win = "<embed src="+ url() + " >";
//     prompt(" ",win);
//     // win.location = url();
// }
// function md() {
//     let code = "![LeetCode Stats](" + url() + ")";
//     prompt("Markdown Code: ", code);
// }

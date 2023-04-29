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

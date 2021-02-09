window.queue = window.queue || [];

while (window.queue.length > 0) {
  console.log("processing queue");

  const name = window.queue.shift();
  realGreet(name);
}

function realGreet(name) {
  console.log(`%c${name}`, "background-color: tomato; font-size: 24px;");
}

window.greet = realGreet;

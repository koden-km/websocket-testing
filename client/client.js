let socket;
let logger;
let inputForm;
let inputField;

const CMD_BAR = "bar";

window.addEventListener("load", (event) => {
  init();
  log("Client started");
  connect("ws://localhost:8080");
})

function init () {
  logger = document.getElementById("log");
  inputForm = document.getElementById("input-form");
  inputField = document.getElementById("input-field");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!socket) {
      log("Cannot send messages because connection is closed.");
      return;
    }

    const message = inputField.value
    if (message) {
      log("Sending: ", message);
      socket.send(message);
      inputField.value = ""
    }
  })

  inputField.focus();
}

function log (...args) {
  console.log(...args);
  logger.textContent += args.map((arg) => {
    if (typeof arg === "object") {
      return JSON.stringify(arg);
    } else {
      return arg;
    }
  }).join(" ") + "\n";
}

function send (message) {
  log("Sending: ", message);
  socket.send(message);
}

function connect (server) {
  log("Connecting to server...");
  socket = new WebSocket(server);

  socket.addEventListener("error", (event) => {
    log("WebSocket error: ", event);
  });

  socket.addEventListener("open", (event) => {
    log("Connection opened!");
    send("Hello Server!");
  });

  socket.addEventListener("close", (event) => {
    log("Connection closed!");
    socket = undefined;
  });

  socket.addEventListener("message", (event) => {
    const message = event.data;
    log("Received: ", message);

    if (message === CMD_BAR) {
      send("FOOBAR!");
    }
  });
}

import { WebSocketServer } from "ws";

console.log("Server started, waiting for clients to connect...");

const CMD_PING = "ping";
const CMD_FOO = "foo";
const CMD_BAR = "bar";

const server = new WebSocketServer({ port: 8080 });

server.on("connection", function connection (socket) {
  console.log("Client connected!");

  function send (message) {
    console.log("Sending: ", message);
    socket.send(message);
  }

  socket.on("error", console.error);

  socket.on("close", function close (data) {
    console.log("Connection closed!");
  })

  socket.on("message", function message (data) {
    const message = `${data}`
    console.log("Received: ", message);

    switch (message) {
      case CMD_PING: {
        send('pong!');
        return;
      }
      case CMD_FOO: {
        send(CMD_BAR);
        return;
      }
    }
  });

  send("Hello Client!");
});

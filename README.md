# WebSocket Testing

A simple test of client/sever WebSocket connections.

## Server

```shell
$ cd server
$ npm install
$ npm start
```

Once started the server will wait for clients to connect.

### Example Output

```
Server started, waiting for clients to connect...
Client connected!
Sending:  Hello Client!
Received:  Hello Server!
Received:  test
Received:  ping
Sending:  pong!
Received:  foo
Sending:  bar
Received:  FOOBAR!
```

## Client

```shell
$ cd client
$ open index.html
```

Once connected type a message in the box and send it to the server.

If the message to the server is the _command_ string `ping`, then the server
will respond with a `pong!` message.

If the message to the server is the _command_ string `foo`, then the server will
respond by sending a _command_ string of `bar` back to the client. If the client
receives the _command_ string of `bar` it will send back a message string of
`FOOBAR!`.

### Example Output

```
Client started
Connecting to server...
Connection opened!
Sending:  Hello Server!
Received:  Hello Client!
Sending:  test
Sending:  ping
Received:  pong!
Sending:  foo
Received:  bar
Sending:  FOOBAR!
```

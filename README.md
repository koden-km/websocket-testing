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
Received:  foo
Sending:  bar
Received:  OK!
```

## Client

```shell
$ cd client
$ open index.html
```

Once connected type a message in the box and send it to the server. If the
message is the _command_ string `foo`, then the server will respond by sending a
_command_ string of `bar` back to the client. If the client gets a _command_
string of `bar` it will send back a message string of `OK!`.

### Example Output

```
Client started
Connecting to server...
Connection opened!
Sending:  Hello Server!
Received:  Hello Client!
Sending:  test
Sending:  foo
Received:  bar
Sending:  OK!
```

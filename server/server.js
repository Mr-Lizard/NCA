const path = require('path');
const port = process.env.PORT || 3000;
const http = require('http');

const express = require('Express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
//console.log(__dirname + '/../public');
console.log("- public path: " + publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
   console.log ('S - new user connected!');

   socket.on('createMessage', (message) => {
       console.log('S - createMessage rxed', message);

       io.emit('newMessage', {
             from:  message.from,
             text:  message.text,
             createdAt:  new Date().getTime()
       });
   });

//    socket.on('newEmail', (newEmail) => {
//       console.log('S - newEmail', newEmail);
//   });

  socket.on('disconnect', () => {
      console.log("S - disconnected from server");
      });

});

server.listen(port, () => console.log(`START:  Listening on port ${port}`));


//  EOF.
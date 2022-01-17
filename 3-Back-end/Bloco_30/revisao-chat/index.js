const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io')

const app = express();
const PORT = 3000;
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (_req, res) => {
  // res.status(400).json({ message: 'funcionou'})
  res.sendFile(path.join(__dirname + '/index.html'));
})

io.on('connection', (socket) => {
  console.log(`usuário ${socket.id} conectado`);

  socket.on('chat message', (msg) => {
    io.emit('chat message', `${socket.id}: ${msg}`);
    console.log(`${socket.id}: ${msg}`)
  })

  socket.on('disconnect', () => {
    console.log(`usuário ${socket.id} desconectou`);
  })
})

server.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function updateGameboard(callback) {
  socket.on('updateGameboard', (slots) => {
    console.log('updateGameboard')
    callback(null, slots)
  })
}

function pushGameboard(slots){
  console.log('pushGameboard', slots)
  socket.emit('pushGameboard', slots);
}

export { updateGameboard, pushGameboard };
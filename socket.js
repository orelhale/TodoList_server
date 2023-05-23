let { Server } = require("socket.io")
let { servic_editTask } = require("./BL/tasksServic")

function createSocket(server) {

   let io = new Server(server, {
      cors: {
         origin: "*"
      }
   })

   io.on('connection', (socket) => {

      socket.on('editTask', (editTask) => {
         console.log('data = ',editTask);
          servic_editTask(editTask, editTask.id)
         socket.emit("getBack", editTask)
      });

      socket.on('disconnect', () => {
         console.log('**************   ***');
      });
   });
}

module.exports = createSocket
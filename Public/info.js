const socket =io.connect(); 
function toserver(name,colleage,mark,time){
  socket.emit('info',{name:name, colleage:colleage, mark:mark , time:time })
}

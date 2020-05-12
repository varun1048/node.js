const port = 3000
const fs = require('fs')
const express = require("express")
const app = express()


const server = app.listen(port,()=>console.log(`localhost: ${port}`))
const io = require("socket.io")(server)

app.set("view engine","ejs")
app.use(express.static('public'))

var Numberofconnection=0;

app.get('/',(req,res)=>{
    res.render("index")
})
var topper =[]
function output(){
    topper.sort((x,y)=>y.time - x.time)
    topper.sort((x,y)=>y.mark - x.mark)

    console.log(topper)
}
io.on('connection',(socket)=>{
    console.log("number of connction: "+ ++Numberofconnection)
    socket.on('info',(data)=>{
        topper.push(data)
        output()
    })
})





 
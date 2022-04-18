// write file
var r=require("readline-sync")
var a=r.question("eneter")
var k=require('fs')
k.writeFile("./file/.file.txt","my name is sajan.",(err)=>{
    console.log("file")
})



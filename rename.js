// rename file
var fs=require("fs")
fs.rename("./file/.file.txt","./file/.filesystem.txt",(err)=>{
    console.log("file done")
})



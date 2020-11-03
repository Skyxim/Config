let url=$request.url
const redirectHost="raw.staticdn.net"

let path=url.replace(/https?:\/\/github\.com/,"")
let userAndRepository=path.substring(0,path.indexOf("raw"))
let folderAndFile=path.substring(path.indexOf("raw")+4,path.length)
let newUrl= "https://"+redirectHost+userAndRepository+folderAndFile

console.log(newUrl)
$done({newUrl})

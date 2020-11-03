let url=request.url
const redirectHost=raw.staticdn.net
function redirect(){
    let path=url.replace(/https?:\/\/github\.com/,"")
    let userAndRepository=path.substring(0,path.indexOf("raw"))
    let folderAndFile=path.substring(path.indexOf("raw")+4,path.length)
    return "https://"+redirectHost+userAndRepository+folderAndFile
}
$done({redirect()})

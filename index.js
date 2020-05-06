const root=document.getElementById("root")
function fetchJSON(url, cb){
    const xhr= new XMLHttpRequest();
    xhr.open("GET",url)
    xhr.responseType="json"
    xhr.onload=()=>{
        if(xhr.status>200 && xhr.status<=300){
            cb(undefined,xhr.response)
        }else{
        cb(new Error(`it is an error : ${xhr.status} - ${xhr.statusText}`))
        }
    }
    xhr.send()
}
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
function main(url){
    createAndAppend("h3",root,{ text:"HYF repositories"})
    fetchJSON(url,(error,response)=>{
        if(error){
            createAndAppend("div",root,{text:error.message,class:'alert-error'});
            return;
        }
        const ul = createAndAppend("ul",root)
        response.sort((curRepo,nextRepo)=>{
            curRepo.name.localCompare(nextRepo.name)
        })
        .forEach(repo=>repoDetails(repo,ul));
            
        })
    
    
}
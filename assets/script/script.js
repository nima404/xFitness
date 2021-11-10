


let timClick = document.querySelector("#timNameClick").addEventListener("click" , function(){
    document.querySelector(".shHid").classList.replace("shHid" , "showHiddenClick");
    document.querySelector(".shHidTim").classList.replace( "shHidTim" ,"shHidTimdis");
    })
    

    let HomeClick = document.querySelector("#homeClick").addEventListener("click" , function(){
        document.querySelector(".shHid").classList.replace("showHiddenClick" , "disShow");
        document.querySelector(".shHidTim").classList.replace( "shHidTimdis" ,"disShow");
        })
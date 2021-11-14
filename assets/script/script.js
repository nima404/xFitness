function timNameClick() {
    document.getElementById("shHidTim").style.display = "block";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
}
function homeClick() {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "block";
}
let LearnClick = document.querySelector("#videoClick").addEventListener("click" , function(){
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "block";
    document.getElementById("shHid").style.display = "none";
})
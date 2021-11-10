

function timNameClick() {
    document.querySelector("#shHid").classList.replace("shHid", "showHiddenClick");
    document.querySelector(".shHid").classList.replace("shHidTim", "shHidTimdis");
}
function homeClick() {
    document.querySelector(".showHiddenClick").classList.replace("showHiddenClick", "disShow");
    document.querySelector(".shHidTimdis").classList.replace("shHidTimdis", "disShow");
    document.getElementById("dissh").style.display = 'none';
}
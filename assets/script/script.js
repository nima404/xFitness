function timNameClick() {
    document.getElementById("shHidTim").style.display = "block";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("service").style.display = "none";
}
function homeClick() {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "block";
}
let LearnClick = document.querySelector("#videoClick").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("learnDis").style.display = "block";
    document.getElementById("shHid").style.display = "none";
})

let page1 = document.getElementById("page1").addEventListener("click" , function(){
    document.getElementById("mokamel1").style.display = 'block';
})
let page2 = document.getElementById("page2").addEventListener("click" , function(){
    document.getElementById("mokamel1").style.display = 'none';
})
setTimeout(function () {
    confirm("برای خرید مکمل به قسمت خدمات رجوع کنید..!")
}, 4000);


consoleText(['x Fitness', 'Crossfit', 'Trx'], 'text', ['white', 'white', 'white']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function vayDelBtn() {
    document.getElementById("vay").style.display = "none";
    document.getElementById("vayDelBtn").style.display = "none";
}
function gainerDelBtn() {
    document.getElementById("gainer").style.display = "none";
    document.getElementById("gainerDelBtn").style.display = "none";
}
function aminoApexDelBtn() {
    document.getElementById("aminoApex").style.display = "none";
    document.getElementById("aminoApexDelBtn").style.display = "none";
}
function aminoSupperDelBtn() {
    document.getElementById("aminoSupper").style.display = "none";
    document.getElementById("aminoSupperDelBtn").style.display = "none";
}
function cratineDelBtn() {
    document.getElementById("cratine").style.display = "none";
    document.getElementById("cratineDelBtn").style.display = "none";
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let srviceCLick = document.getElementById("ServicesClick").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("service").style.display = "block";
    // alert("1- توجه داشته باشید که بعد از انتخاب مکمل مورد نظر در سبد خرید کالاهای مورد نظر خود را با دکمه ی مربوطه کپی و از طریق دکمه ی اتمام سفارش در جای مناسب جای گذاری کنید")
})
var vaysr = ["وی", "مکمل وی", "وی دوبیس", "مکمل وی دوبیس", "vay", "dobis", "vay dobis", "vaydobis"];


//   copy

function copyBtn() {
    var copyText = document.getElementById("inputVal");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

}



var searchINput = document.getElementById("searchInput");
var vssss = "وی";
console.log(searchINput.value);
function searchBtn() {
    if (searchINput === vssss) {
        alert("hi");
    }
}



// add to cart function's
function vayClicked() {
    document.getElementById("vay").innerText = "مکمل وی دوبیس به تعداد " + vayDobisNumber + "عدد و به قیمت " + vayDobisPrice + "هزار تومان.";
    document.getElementById("vay").style.display = "block";
    document.getElementById("vayDelBtn").style.display = "block";
}
function gainerClicked() {
    document.getElementById("gainer").innerText = "مکمل گینر دوبیس به تعداد " + GainerDobisNumber + "عدد و به قیمت " + GainerDobisPrice + "هزار تومان.";
    document.getElementById("gainer").style.display = "block";
    document.getElementById("gainerDelBtn").style.display = "block";
}
function aminoSuperClicked() {
    document.getElementById("aminoSupper").innerText = "مکمل آمینو گلد 350عددی به تعداد " + AminoGoldSuppNumber + "عدد و به قیمت " + AminoGoldSuppPrice + "هزار تومان.";
    document.getElementById("aminoSupper").style.display = "block";
    document.getElementById("aminoSupperDelBtn").style.display = "block";
}
function aminpGold() {
    document.getElementById("aminoApex").innerText = "قرص سوپر آمینو به تعداد  (apex)" + AminoApexNumber + "عدد و به قیمت " + AminoApexPrice + "هزار تومان.";
    document.getElementById("aminoApex").style.display = "block";
    document.getElementById("aminoApexDelBtn").style.display = "block";
}
function cratinClicked() {
    document.getElementById("cratine").innerText = "مکمل کراتین به تعداد " + CratinFarmaNumber + "عدد و به قیمت " + CratinFarmaPrice + "هزار تومان.";
    document.getElementById("cratine").style.display = "block";
    document.getElementById("cratineDelBtn").style.display = "block";
}
// function vayClicked(){
//     document.getElementById("vay").innerText = "مکمل وی دوبیس به تعداد " + vayDobisNumber + "عدد و به قیمت " + vayDobisPrice + "هزار تومان.";
// }
// function vayClicked(){
//     document.getElementById("vay").innerText = "مکمل وی دوبیس به تعداد " + vayDobisNumber + "عدد و به قیمت " + vayDobisPrice + "هزار تومان.";
// }

//   





// number and price of kala
let vayDobisNumber = 1;
let vayDobisPrice = 195000;
let plus = document.querySelector("#plus").addEventListener("click", function () {
    if (vayDobisNumber == 10) {
        vayDobisNumber = 10;
        vayDobisPrice = 1950000;
    } else {
        ++vayDobisNumber;
        vayDobisPrice = vayDobisPrice + 195000;
    }

    document.querySelector("#number").innerHTML = vayDobisNumber;
    document.querySelector("#price").innerHTML = 'قیمت کلی : ' + vayDobisPrice;
})
let min = document.querySelector("#min").addEventListener("click", function () {
    if (vayDobisNumber == 1) {
        vayDobisNumber = 1;
        vayDobisPrice = 195000;
    } else {
        --vayDobisNumber;
        vayDobisPrice = vayDobisPrice - 195000;
    }

    document.querySelector("#number").innerHTML = vayDobisNumber;
    document.querySelector("#price").innerHTML = 'قیمت کلی : ' + vayDobisPrice;
})


let GainerDobisNumber = 1;
let GainerDobisPrice = 230000;
let plusGainer = document.querySelector("#plusGainer").addEventListener("click", function () {
    if (GainerDobisNumber == 10) {
        GainerDobisNumber = 10;
        GainerDobisPrice = 2300000;
    } else {
        ++GainerDobisNumber;
        GainerDobisPrice = GainerDobisPrice + 230000;
    }

    document.querySelector("#numberGainer").innerHTML = GainerDobisNumber;
    document.querySelector("#priceGainer").innerHTML = 'قیمت کلی : ' + GainerDobisPrice;
});
let minGainer = document.querySelector("#minGainer").addEventListener("click", function () {
    if (GainerDobisNumber == 1) {
        GainerDobisNumber = 1;
        GainerDobisPrice = 230000;
    } else {
        --GainerDobisNumber;
        GainerDobisPrice = GainerDobisPrice - 230000;
    }

    document.querySelector("#numberGainer").innerHTML = GainerDobisNumber;
    document.querySelector("#priceGainer").innerHTML = 'قیمت کلی : ' + GainerDobisPrice;
});


let AminoApexNumber = 1;
let AminoApexPrice = 140000;
let plusAminoPex = document.querySelector("#plusAminoPex").addEventListener("click", function () {
    if (AminoApexNumber == 10) {
        AminoApexNumber = 10;
        AminoApexPrice = 1400000;
    } else {
        ++AminoApexNumber;
        AminoApexPrice = AminoApexPrice + 140000;
    }

    document.querySelector("#numberAminoPex").innerHTML = AminoApexNumber;
    document.querySelector("#priceAminoPex").innerHTML = 'قیمت کلی : ' + AminoApexPrice;
});
let minAminoPex = document.querySelector("#minAminoPex").addEventListener("click", function () {
    if (AminoApexNumber == 1) {
        AminoApexNumber = 1;
        GainerDobisPrice = 140000;
    } else {
        --AminoApexNumber;
        AminoApexPrice = AminoApexPrice - 140000;
    }

    document.querySelector("#numberAminoPex").innerHTML = AminoApexNumber;
    document.querySelector("#priceAminoPex").innerHTML = 'قیمت کلی : ' + AminoApexPrice;
});


let AminoGoldSuppNumber = 1;
let AminoGoldSuppPrice = 695000;
let plusAminoGoldSupp = document.querySelector("#plusAminoGoldSupp").addEventListener("click", function () {
    if (AminoGoldSuppNumber == 10) {
        AminoGoldSuppNumber = 10;
        AminoGoldSuppPrice = 6950000;
    } else {
        ++AminoGoldSuppNumber;
        AminoGoldSuppPrice = AminoGoldSuppPrice + 695000;
    }

    document.querySelector("#numberAminoGoldSupp").innerHTML = AminoGoldSuppNumber;
    document.querySelector("#priceAminoGoldSupp").innerHTML = 'قیمت کلی : ' + AminoGoldSuppPrice;
});
let minAminoGoldSupp = document.querySelector("#minAminoGoldSupp").addEventListener("click", function () {
    if (AminoGoldSuppNumber == 1) {
        AminoGoldSuppNumber = 1;
        GainerDobisPrice = 695000;
    } else {
        --AminoGoldSuppNumber;
        AminoGoldSuppPrice = AminoGoldSuppPrice - 695000;
    }

    document.querySelector("#numberAminoGoldSupp").innerHTML = AminoGoldSuppNumber;
    document.querySelector("#priceAminoGoldSupp").innerHTML = 'قیمت کلی : ' + AminoGoldSuppPrice;
});


let CratinFarmaNumber = 1;
let CratinFarmaPrice = 380000;
let plusCratinFarma = document.querySelector("#plusCratinFarma").addEventListener("click", function () {
    if (CratinFarmaNumber == 10) {
        CratinFarmaNumber = 10;
        CratinFarmaPrice = 3800000;
    } else {
        ++CratinFarmaNumber;
        CratinFarmaPrice = CratinFarmaPrice + 380000;
    }

    document.querySelector("#numberCratinFarma").innerHTML = CratinFarmaNumber;
    document.querySelector("#priceCratinFarma").innerHTML = 'قیمت کلی : ' + CratinFarmaPrice;
});
let minCratinFarma = document.querySelector("#minAminoGoldSupp").addEventListener("click", function () {
    if (CratinFarmaNumber == 1) {
        CratinFarmaNumber = 1;
        GainerDobisPrice = 380000;
    } else {
        --CratinFarmaNumber;
        CratinFarmaPrice = CratinFarmaPrice - 380000;
    }

    document.querySelector("#numberCratinFarma").innerHTML = CratinFarmaNumber;
    document.querySelector("#priceCratinFarma").innerHTML = 'قیمت کلی : ' + CratinFarmaPrice;
});
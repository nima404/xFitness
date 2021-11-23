function timNameClick() {
    document.getElementById("shHidTim").style.display = "block";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
}
function homeClick() {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "block";
}
let LearnClick = document.querySelector("#videoClick").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("learnDis").style.display = "block";
    document.getElementById("shHid").style.display = "none";
})

let page1 = document.getElementById("page1").addEventListener("click", function () {
    document.getElementById("mokamel1").style.display = 'block';
    document.getElementById("mokamel2").style.display = 'none';

    window.scroll({
        top: 0,
        behavior: 'smooth'
      });
})
let page2 = document.getElementById("page2").addEventListener("click", function () {
    document.getElementById("mokamel1").style.display = 'none';
    document.getElementById("mokamel2").style.display = 'block';

    window.scroll({
        top: 0,
        behavior: 'smooth'
      });
})

// setTimeout(function () {
//     confirm("برای خرید مکمل به قسمت خدمات رجوع کنید..!")
// }, 4000);
function preveClick() {
    document.getElementById("listNameSecond").style.display = "block";
    document.getElementById("preve").style.display = "none";
    document.getElementById("next").style.display = "block";
}
function nextClick() {
    document.getElementById("listNameSecond").style.display = "none";
    document.getElementById("preve").style.display = "block";
    document.getElementById("next").style.display = "none";
}

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
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("service").style.display = "block";
})
let ServicesTshirtClick = document.getElementById("ServicesTshirtClick").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "block";
})

let BMICal = document.getElementById("BMICal").addEventListener("click" , function(){
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("BMICalc").style.display = "block";
})







function BMIFunc(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var heightOrg = height/100;
    var BMIFirst = Number(weight) / Number(heightOrg) / Number(heightOrg);
    var totalBMI = BMIFirst.toFixed(2);
    document.getElementById("BMIResponse").innerHTML = " شاخص توده بدنی شما " + totalBMI + " است ";
}






// function handleCopy(className) {
//     // debugger
//     const r = document.createRange();
//     var divsClass = document.getElementsByClassName("modalBody").value;
//     r.selectNode(divsClass);
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(r);
//     document.execCommand("copy");
//     window.getSelection().removeAllRanges();
//     alert("کپی شد");
// }



// Copies a string to the clipboard. Must be called from within an event handler such as click.
// May return false if it failed, but this is not always
// possible. Browser support for Chrome 43+, Firefox 42+, Edge and IE 10+.
// No Safari support, as of (Nov. 2015). Returns false.
// IE: The clipboard feature may be disabled by an adminstrator. By default a prompt is
// shown the first time the clipboard is used (per session).
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return clipboardData.setData("Text", text);
  
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }
  
  document.querySelector("#copyBtn").onclick = function() {
    var result = copyToClipboard(document.getElementById("vay").toString());
    console.log("copied?", result);
  };
  



var searchINput = document.getElementById("searchInput");
// var servicSearch = document.getElementById("service");

// function searchBtn() {

//     if (searchINput.value === "وی" || "vay" || "مکمل وی" || "وی دوبیس" || "vay dobis" || "vaydobis" || "vey") {
//         window.scrollTo({ top: 350, behavior: 'smooth' });
//     };

//     if (searchINput.value === "گینر" || "gainer" || "مکمل گینر" || "گینر دوبیس" || "gainer dobis" || "gainerdobis" || "geiner") {
//         window.scrollTo({ top: 550, behavior: 'smooth' });
//     };

//     if(searchINput.value === "امینو" || "amino" || "مکمل امینو" || "سوپر امینو" || "super amino" || "apex" || "Amino" || "superAmino" || "Aminosuper" || "aminosuper" || "superamino" || "آمینو"){
//         window.scrollTo({ top: 710, behavior: 'smooth' });
//     };

//     if(searchINput.value === "امینوگلد" || "suppland" || "ساپلند" || "aminogold" || "Aminogold"){
//         window.scrollTo({ top: 920, behavior: 'smooth' });
//     };

    // if(searchINput.value === "کراتین" || "cratin" || "مکمل کراتین" || "کراتین فارما پلاس" || "cratin farma plus" || "farma" || "plus" || "farmaplus"){
    //     window.scrollTo({ top: 1000, behavior: 'smooth' });
    // }

    // if(searchINput.value === ""){
    //     document.getElementById("searchNo").innerHTML = "نتیجه ای یافت نشد...";
    // }

    // else{
    //     window.scrollTo({ top: 0});
    //     document.getElementById("searchNo").innerHTML = "نتیجه ای یافت نشد...";
    // }





// add to cart function's

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
let minCratinFarma = document.querySelector("#minCratinFarma").addEventListener("click", function () {
    if (CratinFarmaNumber == 1) {
        CratinFarmaNumber = 1;
        CratinFarmaPrice = 380000;
    } else {
        --CratinFarmaNumber;
        CratinFarmaPrice = CratinFarmaPrice - 380000;
    }

    document.querySelector("#numberCratinFarma").innerHTML = CratinFarmaNumber;
    document.querySelector("#priceCratinFarma").innerHTML = 'قیمت کلی : ' + CratinFarmaPrice;
});


let VitaminCNumber = 1;
let VitaminCPrice = 97600;
let plusVitaminC = document.querySelector("#plusVitaminC").addEventListener("click", function () {
    if (VitaminCNumber == 10) {
        VitaminCNumber = 10;
        VitaminCPrice = 976000;
    } else {
        ++VitaminCNumber;
        VitaminCPrice = VitaminCPrice + 97600;
    }

    document.querySelector("#numberVitaminC").innerHTML = VitaminCNumber;
    document.querySelector("#priceVitaminC").innerHTML = 'قیمت کلی : ' + VitaminCPrice;
});
let minVitaminC = document.querySelector("#minVitaminC").addEventListener("click", function () {
    if (VitaminCNumber == 1) {
        VitaminCNumber = 1;
        VitaminCPrice = 97600;
    } else {
        --VitaminCNumber;
        VitaminCPrice = VitaminCPrice - 97600;
    }

    document.querySelector("#numberVitaminC").innerHTML = VitaminCNumber;
    document.querySelector("#priceVitaminC").innerHTML = 'قیمت کلی : ' + VitaminCPrice;
});


let HairVitNumber = 1;
let HairVitPrice = 76000;
let plusHairVit = document.querySelector("#plusHairVit").addEventListener("click", function () {
    if (HairVitNumber == 10) {
        HairVitNumber = 10;
        HairVitPrice = 760000;
    } else {
        ++HairVitNumber;
        HairVitPrice = HairVitPrice + 76000;
    }

    document.querySelector("#numberHairVit").innerHTML = HairVitNumber;
    document.querySelector("#priceHairVit").innerHTML = 'قیمت کلی : ' + HairVitPrice;
});
let minHairVit = document.querySelector("#minHairVit").addEventListener("click", function () {
    if (HairVitNumber == 1) {
        HairVitNumber = 1;
        HairVitPrice = 76000;
    } else {
        --HairVitNumber;
        HairVitPrice = HairVitPrice - 76000;
    }

    document.querySelector("#numberHairVit").innerHTML = HairVitNumber;
    document.querySelector("#priceHairVit").innerHTML = 'قیمت کلی : ' + HairVitPrice;
});


let DayVitNumber = 1;
let DayVitPrice = 86000;
let plusDayVit = document.querySelector("#plusDayVit").addEventListener("click", function () {
    if (DayVitNumber == 10) {
        DayVitNumber = 10;
        DayVitPrice = 860000;
    } else {
        ++DayVitNumber;
        DayVitPrice = DayVitPrice + 86000;
    }

    document.querySelector("#numberDayVit").innerHTML = DayVitNumber;
    document.querySelector("#priceDayVit").innerHTML = 'قیمت کلی : ' + DayVitPrice;
});
let minDayvit = document.querySelector("#minDayVit").addEventListener("click", function () {
    if (DayVitNumber == 1) {
        DayVitNumber = 1;
        DayVitPrice = 86000;
    } else {
        --DayVitNumber;
        DayVitPrice = DayVitPrice - 86000;
    }

    document.querySelector("#numberDayVit").innerHTML = DayVitNumber;
    document.querySelector("#priceDayVit").innerHTML = 'قیمت کلی : ' + DayVitPrice;
}); 


let OsteoPlusNumber = 1;
let OsteoPlusPrice = 186000;
let plusOsteoPlus = document.querySelector("#plusOsteoPlus").addEventListener("click", function () {
    if (OsteoPlusNumber == 10) {
        OsteoPlusNumber = 10;
        OsteoPlusPrice = 1860000;
    } else {
        ++OsteoPlusNumber;
        OsteoPlusPrice = OsteoPlusPrice + 186000;
    }

    document.querySelector("#numberOsteoPlus").innerHTML = OsteoPlusNumber;
    document.querySelector("#priceOsteoPlus").innerHTML = 'قیمت کلی : ' + OsteoPlusPrice;
});
let minOsteoPlus = document.querySelector("#minOsteoPlus").addEventListener("click", function () {
    if (OsteoPlusNumber == 1) {
        OsteoPlusNumber = 1;
        OsteoPlusPrice = 186000;
    } else {
        --OsteoPlusNumber;
        OsteoPlusPrice = OsteoPlusPrice - 186000;
    }

    document.querySelector("#numberOsteoPlus").innerHTML = OsteoPlusNumber;
    document.querySelector("#priceOsteoPlus").innerHTML = 'قیمت کلی : ' + OsteoPlusPrice;
}); 


let FastRunNumber = 1;
let FastRunPrice = 56000;
let plusFastRun = document.querySelector("#plusFastRun").addEventListener("click", function () {
    if (FastRunNumber == 10) {
        FastRunNumber = 10;
        FastRunPrice = 560000;
    } else {
        ++FastRunNumber;
        FastRunPrice = FastRunPrice + 56000;
    }

    document.querySelector("#numberFastRun").innerHTML = FastRunNumber;
    document.querySelector("#priceFastRun").innerHTML = 'قیمت کلی : ' + FastRunPrice;
});
let minFastRun = document.querySelector("#minFastRun").addEventListener("click", function () {
    if (FastRunNumber == 1) {
        FastRunNumber = 1;
        FastRunPrice = 56000;
    } else {
        --FastRunNumber;
        FastRunPrice = FastRunPrice - 56000;
    }

    document.querySelector("#numberFastRun").innerHTML = FastRunNumber;
    document.querySelector("#priceFastRun").innerHTML = 'قیمت کلی : ' + FastRunPrice;
}); 


let CollagenPowderNumber = 1;
let CollagenPowderPrice = 326000;
let plusCollagenPowder = document.querySelector("#plusCollagenPowder").addEventListener("click", function () {
    if (CollagenPowderNumber == 10) {
        CollagenPowderNumber = 10;
        CollagenPowderPrice = 3260000;
    } else {
        ++CollagenPowderNumber;
        CollagenPowderPrice = CollagenPowderPrice + 326000;
    }

    document.querySelector("#numberCollagenPowder").innerHTML = CollagenPowderNumber;
    document.querySelector("#priceCollagenPowder").innerHTML = 'قیمت کلی : ' + CollagenPowderPrice;
});
let minCollagenPowder = document.querySelector("#minCollagenPowder").addEventListener("click", function () {
    if (CollagenPowderNumber == 1) {
        CollagenPowderNumber = 1;
        CollagenPowderPrice = 326000;
    } else {
        --CollagenPowderNumber;
        CollagenPowderPrice = CollagenPowderPrice - 326000;
    }

    document.querySelector("#numberCollagenPowder").innerHTML = CollagenPowderNumber;
    document.querySelector("#priceCollagenPowder").innerHTML = 'قیمت کلی : ' + CollagenPowderPrice;
}); 


let OmegaHNumber = 1;
let OmegaHPrice = 154000;
let plusOmegaH = document.querySelector("#plusOmegaH").addEventListener("click", function () {
    if (OmegaHNumber == 10) {
        OmegaHNumber = 10;
        OmegaHPrice = 1540000;
    } else {
        ++OmegaHNumber;
        OmegaHPrice = OmegaHPrice + 154000;
    }

    document.querySelector("#numberOmegaH").innerHTML = OmegaHNumber;
    document.querySelector("#priceOmegaH").innerHTML = 'قیمت کلی : ' + OmegaHPrice;
});
let minOmegaH = document.querySelector("#minOmegaH").addEventListener("click", function () {
    if (OmegaHNumber == 1) {
        OmegaHNumber = 1;
        OmegaHPrice = 154000;
    } else {
        --OmegaHNumber;
        OmegaHPrice = OmegaHPrice - 154000;
    }

    document.querySelector("#numberOmegaH").innerHTML = OmegaHNumber;
    document.querySelector("#priceOmegaH").innerHTML = 'قیمت کلی : ' + OmegaHPrice;
}); 


let FefolNumber = 1;
let FefolPrice = 66000;
let plusFefol = document.querySelector("#plusFefol").addEventListener("click", function () {
    if (FefolNumber == 10) {
        FefolNumber = 10;
        FefolPrice = 660000;
    } else {
        ++FefolNumber;
        FefolPrice = FefolPrice + 66000;
    }

    document.querySelector("#numberFefol").innerHTML = FefolNumber;
    document.querySelector("#priceFefol").innerHTML = 'قیمت کلی : ' + FefolPrice;
});
let minFefol = document.querySelector("#minFefol").addEventListener("click", function () {
    if (FefolNumber == 1) {
        FefolNumber = 1;
        FefolPrice = 66000;
    } else {
        --FefolNumber;
        FefolPrice = FefolPrice - 66000;
    }

    document.querySelector("#numberFefol").innerHTML = FefolNumber;
    document.querySelector("#priceFefol").innerHTML = 'قیمت کلی : ' + FefolPrice;
}); 


let OsteoOneNumber = 1;
let OsteoOnePrice = 165000;
let plusOsteoOne = document.querySelector("#plusOsteoOne").addEventListener("click", function () {
    if (OsteoOneNumber == 10) {
        OsteoOneNumber = 10;
        OsteoOnePrice = 1650000;
    } else {
        ++OsteoOneNumber;
        OsteoOnePrice = OsteoOnePrice + 165000;
    }

    document.querySelector("#numberOsteoOne").innerHTML = OsteoOneNumber;
    document.querySelector("#priceOsteoOne").innerHTML = 'قیمت کلی : ' + OsteoOnePrice;
});
let minOsteoOne = document.querySelector("#minOsteoOne").addEventListener("click", function () {
    if (OsteoOneNumber == 1) {
        OsteoOneNumber = 1;
        OsteoOnePrice = 165000;
    } else {
        --OsteoOneNumber;
        OsteoOnePrice = OsteoOnePrice - 165000;
    }

    document.querySelector("#numberOsteoOne").innerHTML = OsteoOneNumber;
    document.querySelector("#priceOsteoOne").innerHTML = 'قیمت کلی : ' + OsteoOnePrice;
}); 


let HerbalOmegaNumber = 1;
let HerbalOmegaPrice = 52000;
let plusHerbalOmega = document.querySelector("#plusHerbalOmega").addEventListener("click", function () {
    if (HerbalOmegaNumber == 10) {
        HerbalOmegaNumber = 10;
        HerbalOmegaPrice = 520000;
    } else {
        ++HerbalOmegaNumber;
        HerbalOmegaPrice = HerbalOmegaPrice + 52000;
    }

    document.querySelector("#numberHerbalOmega").innerHTML = HerbalOmegaNumber;
    document.querySelector("#priceHerbalOmega").innerHTML = 'قیمت کلی : ' + HerbalOmegaPrice;
});
let minHerbalOmega = document.querySelector("#minHerbalOmega").addEventListener("click", function () {
    if (HerbalOmegaNumber == 1) {
        HerbalOmegaNumber = 1;
        HerbalOmegaPrice = 52000;
    } else {
        --HerbalOmegaNumber;
        HerbalOmegaPrice = HerbalOmegaPrice - 52000;
    }

    document.querySelector("#numberHerbalOmega").innerHTML = HerbalOmegaNumber;
    document.querySelector("#priceHerbalOmega").innerHTML = 'قیمت کلی : ' + HerbalOmegaPrice;
}); 




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
function vitaminCDelBtn() {
    document.getElementById("vitaminC").style.display = "none";
    document.getElementById("vitaminCDelBtn").style.display = "none";
}
function HairVitDelBtn() {
    document.getElementById("HairVit").style.display = "none";
    document.getElementById("HairVitDelBtn").style.display = "none";
}
function DayVitDelBtn() {
    document.getElementById("DayVit").style.display = "none";
    document.getElementById("DayVitDelBtn").style.display = "none";
}
function OsteoPlusDelBtn() {
    document.getElementById("OsteoPlus").style.display = "none";
    document.getElementById("OsteoPlusDelBtn").style.display = "none";
}
function FastRunDelBtn() {
    document.getElementById("FastRun").style.display = "none";
    document.getElementById("FastRunDelBtn").style.display = "none";
}
function CollagenPowderDelBtn() {
    document.getElementById("CollagenPowder").style.display = "none";
    document.getElementById("CollagenPowderDelBtn").style.display = "none";
}
function OmegaHDelBtn() {
    document.getElementById("OmegaH").style.display = "none";
    document.getElementById("OmegaHDelBtn").style.display = "none";
}
function FefolDelBtn() {
    document.getElementById("Fefol").style.display = "none";
    document.getElementById("FefolDelBtn").style.display = "none";
}
function FefolDelBtn() {
    document.getElementById("OsteoOne").style.display = "none";
    document.getElementById("OsteoOneDelBtn").style.display = "none";
}
function HerbalOmegaDelBtn() {
    document.getElementById("HerbalOmega").style.display = "none";
    document.getElementById("HerbalOmegaDelBtn").style.display = "none";
}











function vayClicked() {
    document.getElementById("vay").innerText = "مکمل وی دوبیس به تعداد " + vayDobisNumber + "عدد و به قیمت " + vayDobisPrice + "هزار تومان.";
    document.getElementById("vay").style.display = "block";
    document.getElementById("vayDelBtn").style.display = "block";
    document.getElementById("vayBuyFinished").style.display = "block";
    document.getElementById("vayBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("vayBuyFinished").style.display = "none";
}, 1000);
}
function gainerClicked() {
    document.getElementById("gainer").innerText = "مکمل گینر دوبیس به تعداد " + GainerDobisNumber + "عدد و به قیمت " + GainerDobisPrice + "هزار تومان.";
    document.getElementById("gainer").style.display = "block";
    document.getElementById("gainerDelBtn").style.display = "block";
    document.getElementById("gainerBuyFinished").style.display = "block";
    document.getElementById("gainerBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("gainerBuyFinished").style.display = "none";
}, 1000);
}
function aminoSuperClicked() {
    document.getElementById("aminoSupper").innerText = "مکمل آمینو گلد 350عددی به تعداد " + AminoGoldSuppNumber + "عدد و به قیمت " + AminoGoldSuppPrice + "هزار تومان.";
    document.getElementById("aminoSupper").style.display = "block";
    document.getElementById("aminoSupperDelBtn").style.display = "block";
    document.getElementById("AminoPexBuyFinished").style.display = "block";
    document.getElementById("AminoPexBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("AminoPexBuyFinished").style.display = "none";
}, 1000);
}
function aminpGold() {
    document.getElementById("aminoApex").innerText = "قرص سوپر آمینو به تعداد  (apex)" + AminoApexNumber + "عدد و به قیمت " + AminoApexPrice + "هزار تومان.";
    document.getElementById("aminoApex").style.display = "block";
    document.getElementById("aminoApexDelBtn").style.display = "block";
    document.getElementById("aminpGoldBuyFinished").style.display = "block";
    document.getElementById("aminpGoldBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("aminpGoldBuyFinished").style.display = "none";
}, 1000);
}
function cratinClicked() {
    document.getElementById("cratine").innerText = "مکمل کراتین به تعداد " + CratinFarmaNumber + "عدد و به قیمت " + CratinFarmaPrice + "هزار تومان.";
    document.getElementById("cratine").style.display = "block";
    document.getElementById("cratineDelBtn").style.display = "block";
    document.getElementById("cratinBuyFinished").style.display = "block";
    document.getElementById("cratinBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("cratinBuyFinished").style.display = "none";
}, 1000);
}
function vitaminCClicked() {
    document.getElementById("vitaminC").innerText = "ویتامین سی به تعداد " + VitaminCNumber + "عدد و به قیمت " + VitaminCPrice + "هزار تومان.";
    document.getElementById("vitaminC").style.display = "block";
    document.getElementById("vitaminCDelBtn").style.display = "block";
    document.getElementById("VitaminCBuyFinished").style.display = "block";
    document.getElementById("VitaminCBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("VitaminCBuyFinished").style.display = "none";
}, 1000);
}
function HairVitClicked() {
    document.getElementById("HairVit").innerText = " ویتامین مو | Hair-vit به تعداد " + HairVitNumber + "عدد و به قیمت " + HairVitPrice + "هزار تومان.";
    document.getElementById("HairVit").style.display = "block";
    document.getElementById("HairVitDelBtn").style.display = "block";
    document.getElementById("HairVitBuyFinished").style.display = "block";
    document.getElementById("HairVitBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("HairVitBuyFinished").style.display = "none";
}, 1000);
}
function DayVitClicked() {
    document.getElementById("DayVit").innerText = "  مولتی ویتامین | Day-vit به تعداد " + DayVitNumber + "عدد و به قیمت " + DayVitPrice + "هزار تومان.";
    document.getElementById("DayVit").style.display = "block";
    document.getElementById("DayVitDelBtn").style.display = "block";
    document.getElementById("DayVitBuyFinished").style.display = "block";
    document.getElementById("DayVitBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("DayVitBuyFinished").style.display = "none";
}, 1000);
}
function OsteoPlusClicked() {
    document.getElementById("OsteoPlus").innerText = "  قرص استئوپلاس  | OsteaPlus به تعداد " + OsteoPlusNumber + "عدد و به قیمت " + OsteoPlusPrice + "هزار تومان.";
    document.getElementById("OsteoPlus").style.display = "block";
    document.getElementById("OsteoPlusDelBtn").style.display = "block";
    document.getElementById("OsteoPlusBuyFinished").style.display = "block";
    document.getElementById("OsteoPlusBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("OsteoPlusBuyFinished").style.display = "none";
}, 1000);
}
function FastRunClicked() {
    document.getElementById("FastRun").innerText = "  کپسول فست ران  | FastRun به تعداد " + FastRunNumber + "عدد و به قیمت " + FastRunPrice + "هزار تومان.";
    document.getElementById("FastRun").style.display = "block";
    document.getElementById("FastRunDelBtn").style.display = "block";
    document.getElementById("FastRunBuyFinished").style.display = "block";
    document.getElementById("FastRunBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("FastRunBuyFinished").style.display = "none";
}, 1000);
}
function CollagenPowderClicked() {
    document.getElementById("CollagenPowder").innerText = "  پودر کلاژن  | Collagen-Powder به تعداد " + CollagenPowderNumber + "عدد و به قیمت " + CollagenPowderPrice + "هزار تومان.";
    document.getElementById("CollagenPowder").style.display = "block";
    document.getElementById("CollagenPowderDelBtn").style.display = "block";
    document.getElementById("CollagenPowderBuyFinished").style.display = "block";
    document.getElementById("CollagenPowderBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("CollagenPowderBuyFinished").style.display = "none";
}, 1000);
}
function OmegaHClicked() {
    document.getElementById("OmegaH").innerText = "  قرص امگا اچ 3  | Omega-H3 به تعداد " + OmegaHNumber + "عدد و به قیمت " + OmegaHPrice + "هزار تومان.";
    document.getElementById("OmegaH").style.display = "block";
    document.getElementById("OmegaHDelBtn").style.display = "block";
    document.getElementById("OmegaHBuyFinished").style.display = "block";
    document.getElementById("OmegaHBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("OmegaHBuyFinished").style.display = "none";
}, 1000);
}
function FefolClicked() {
    document.getElementById("Fefol").innerText = "  کپسول ففول  | Fefol به تعداد " + FefolNumber + "عدد و به قیمت " + FefolPrice + "هزار تومان.";
    document.getElementById("Fefol").style.display = "block";
    document.getElementById("FefolDelBtn").style.display = "block";
    document.getElementById("FefolBuyFinished").style.display = "block";
    document.getElementById("FefolBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("FefolBuyFinished").style.display = "none";
}, 1000);
}
function OsteoOneClicked() {
    document.getElementById("OsteoOne").innerText = "  قرص استئوکینون  | Osteo Quinone به تعداد " + OsteoOneNumber + "عدد و به قیمت " + OsteoOnePrice + "هزار تومان.";
    document.getElementById("OsteoOne").style.display = "block";
    document.getElementById("OsteoOneDelBtn").style.display = "block";
    document.getElementById("OsteoOneBuyFinished").style.display = "block";
    document.getElementById("OsteoOneBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("OsteoOneBuyFinished").style.display = "none";
}, 1000);
}
function HerbalOmegaClicked() {
    document.getElementById("HerbalOmega").innerText = "  کپسول هربال امگا 3  | Herbal Omega 3 به تعداد " + HerbalOmegaNumber + "عدد و به قیمت " + HerbalOmegaPrice + "هزار تومان.";
    document.getElementById("HerbalOmega").style.display = "block";
    document.getElementById("HerbalOmegaDelBtn").style.display = "block";
    document.getElementById("HerbalOmegaBuyFinished").style.display = "block";
    document.getElementById("HerbalOmegaBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("HerbalOmegaBuyFinished").style.display = "none";
}, 1000);
}
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
    document.getElementById("mokamel3").style.display = 'none';

    document.getElementById("page1").classList.add("activePagintion");
    document.getElementById("page2").classList.remove("activePagintion");
    document.getElementById("page3").classList.remove("activePagintion");

    window.scroll({
        top: 0,
        behavior: 'smooth'
      });
})
let page2 = document.getElementById("page2").addEventListener("click", function () {
    document.getElementById("mokamel1").style.display = 'none';
    document.getElementById("mokamel3").style.display = 'none';
    document.getElementById("mokamel2").style.display = 'block';
    document.getElementById("page2").classList.add("activePagintion");
    document.getElementById("page1").classList.remove("activePagintion");
    document.getElementById("page3").classList.remove("activePagintion");

    window.scroll({
        top: 0,
        behavior: 'smooth'
      });
})
let page3 = document.getElementById("page3").addEventListener("click", function () {
    document.getElementById("mokamel1").style.display = 'none';
    document.getElementById("mokamel2").style.display = 'none';
    document.getElementById("mokamel3").style.display = 'block';
    document.getElementById("page2").classList.remove("activePagintion");
    document.getElementById("page1").classList.remove("activePagintion");
    document.getElementById("page3").classList.add("activePagintion");

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
let vayDobisPrice = 1380000;
let plus = document.querySelector("#plus").addEventListener("click", function () {
    if (vayDobisNumber == 10) {
        vayDobisNumber = 10;
        vayDobisPrice = 13800000;
    } else {
        ++vayDobisNumber;
        vayDobisPrice = vayDobisPrice + 1380000;
    }

    document.querySelector("#number").innerHTML = vayDobisNumber;
    document.querySelector("#price").innerHTML = 'قیمت کلی : ' + vayDobisPrice;
})
let min = document.querySelector("#min").addEventListener("click", function () {
    if (vayDobisNumber == 1) {
        vayDobisNumber = 1;
        vayDobisPrice = 1380000;
    } else {
        --vayDobisNumber;
        vayDobisPrice = vayDobisPrice - 1380000;
    }

    document.querySelector("#number").innerHTML = vayDobisNumber;
    document.querySelector("#price").innerHTML = 'قیمت کلی : ' + vayDobisPrice;
})


let GainerDobisNumber = 1;
let GainerDobisPrice = 577000;
let plusGainer = document.querySelector("#plusGainer").addEventListener("click", function () {
    if (GainerDobisNumber == 10) {
        GainerDobisNumber = 10;
        GainerDobisPrice = 5770000;
    } else {
        ++GainerDobisNumber;
        GainerDobisPrice = GainerDobisPrice + 577000;
    }

    document.querySelector("#numberGainer").innerHTML = GainerDobisNumber;
    document.querySelector("#priceGainer").innerHTML = 'قیمت کلی : ' + GainerDobisPrice;
});
let minGainer = document.querySelector("#minGainer").addEventListener("click", function () {
    if (GainerDobisNumber == 1) {
        GainerDobisNumber = 1;
        GainerDobisPrice = 577000;
    } else {
        --GainerDobisNumber;
        GainerDobisPrice = GainerDobisPrice - 577000;
    }

    document.querySelector("#numberGainer").innerHTML = GainerDobisNumber;
    document.querySelector("#priceGainer").innerHTML = 'قیمت کلی : ' + GainerDobisPrice;
});


let AminoApexNumber = 1;
let AminoApexPrice = 618000;
let plusAminoPex = document.querySelector("#plusAminoPex").addEventListener("click", function () {
    if (AminoApexNumber == 10) {
        AminoApexNumber = 10;
        AminoApexPrice = 6180000;
    } else {
        ++AminoApexNumber;
        AminoApexPrice = AminoApexPrice + 618000;
    }

    document.querySelector("#numberAminoPex").innerHTML = AminoApexNumber;
    document.querySelector("#priceAminoPex").innerHTML = 'قیمت کلی : ' + AminoApexPrice;
});
let minAminoPex = document.querySelector("#minAminoPex").addEventListener("click", function () {
    if (AminoApexNumber == 1) {
        AminoApexNumber = 1;
        GainerDobisPrice = 618000;
    } else {
        --AminoApexNumber;
        AminoApexPrice = AminoApexPrice - 618000;
    }

    document.querySelector("#numberAminoPex").innerHTML = AminoApexNumber;
    document.querySelector("#priceAminoPex").innerHTML = 'قیمت کلی : ' + AminoApexPrice;
});


let AminoGoldSuppNumber = 1;
let AminoGoldSuppPrice = 766000;
let plusAminoGoldSupp = document.querySelector("#plusAminoGoldSupp").addEventListener("click", function () {
    if (AminoGoldSuppNumber == 10) {
        AminoGoldSuppNumber = 10;
        AminoGoldSuppPrice = 7660000;
    } else {
        ++AminoGoldSuppNumber;
        AminoGoldSuppPrice = AminoGoldSuppPrice + 766000;
    }

    document.querySelector("#numberAminoGoldSupp").innerHTML = AminoGoldSuppNumber;
    document.querySelector("#priceAminoGoldSupp").innerHTML = 'قیمت کلی : ' + AminoGoldSuppPrice;
});
let minAminoGoldSupp = document.querySelector("#minAminoGoldSupp").addEventListener("click", function () {
    if (AminoGoldSuppNumber == 1) {
        AminoGoldSuppNumber = 1;
        GainerDobisPrice = 766000;
    } else {
        --AminoGoldSuppNumber;
        AminoGoldSuppPrice = AminoGoldSuppPrice - 766000;
    }

    document.querySelector("#numberAminoGoldSupp").innerHTML = AminoGoldSuppNumber;
    document.querySelector("#priceAminoGoldSupp").innerHTML = 'قیمت کلی : ' + AminoGoldSuppPrice;
});


let CratinFarmaNumber = 1;
let CratinFarmaPrice = 382000;
let plusCratinFarma = document.querySelector("#plusCratinFarma").addEventListener("click", function () {
    if (CratinFarmaNumber == 10) {
        CratinFarmaNumber = 10;
        CratinFarmaPrice = 3820000;
    } else {
        ++CratinFarmaNumber;
        CratinFarmaPrice = CratinFarmaPrice + 382000;
    }

    document.querySelector("#numberCratinFarma").innerHTML = CratinFarmaNumber;
    document.querySelector("#priceCratinFarma").innerHTML = 'قیمت کلی : ' + CratinFarmaPrice;
});
let minCratinFarma = document.querySelector("#minCratinFarma").addEventListener("click", function () {
    if (CratinFarmaNumber == 1) {
        CratinFarmaNumber = 1;
        CratinFarmaPrice = 382000;
    } else {
        --CratinFarmaNumber;
        CratinFarmaPrice = CratinFarmaPrice - 382000;
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


let XovitNumber = 1;
let XovitPrice = 107000;
let plusXovit = document.querySelector("#plusXovit").addEventListener("click", function () {
    if (XovitNumber == 10) {
        XovitNumber = 10;
        XovitPrice = 1070000;
    } else {
        ++XovitNumber;
        XovitPrice = XovitPrice + 107000;
    }

    document.querySelector("#numberXovit").innerHTML = XovitNumber;
    document.querySelector("#priceXovit").innerHTML = 'قیمت کلی : ' + XovitPrice;
});
let minXovit = document.querySelector("#minXovit").addEventListener("click", function () {
    if (XovitNumber == 1) {
        XovitNumber = 1;
        XovitPrice = 107000;
    } else {
        --XovitNumber;
        XovitPrice = XovitPrice - 107000;
    }

    document.querySelector("#numberXovit").innerHTML = XovitNumber;
    document.querySelector("#priceXovit").innerHTML = 'قیمت کلی : ' + XovitPrice;
}); 


let GumfiNumber = 1;
let GumfiPrice = 74000;
let plusGumfi = document.querySelector("#plusGumfi").addEventListener("click", function () {
    if (GumfiNumber == 10) {
        GumfiNumber = 10;
        GumfiPrice = 740000;
    } else {
        ++GumfiNumber;
        GumfiPrice = GumfiPrice + 74000;
    }

    document.querySelector("#numberGumfi").innerHTML = GumfiNumber;
    document.querySelector("#priceGumfi").innerHTML = 'قیمت کلی : ' + GumfiPrice;
});
let minGumfi = document.querySelector("#minGumfi").addEventListener("click", function () {
    if (GumfiNumber == 1) {
        GumfiNumber = 1;
        GumfiPrice = 74000;
    } else {
        --GumfiNumber;
        GumfiPrice = GumfiPrice - 74000;
    }

    document.querySelector("#numberGumfi").innerHTML = GumfiNumber;
    document.querySelector("#priceGumfi").innerHTML = 'قیمت کلی : ' + GumfiPrice;
}); 


let ZincPlusNumber = 1;
let ZincPlusPrice = 105000;
let plusZincPlus = document.querySelector("#plusZincPlus").addEventListener("click", function () {
    if (ZincPlusNumber == 10) {
        ZincPlusNumber = 10;
        ZincPlusPrice = 1050000;
    } else {
        ++ZincPlusNumber;
        ZincPlusPrice = ZincPlusPrice + 105000;
    }

    document.querySelector("#numberZincPlus").innerHTML = ZincPlusNumber;
    document.querySelector("#priceZincPlus").innerHTML = 'قیمت کلی : ' + ZincPlusPrice;
});
let minZincPlus = document.querySelector("#minZincPlus").addEventListener("click", function () {
    if (ZincPlusNumber == 1) {
        ZincPlusNumber = 1;
        ZincPlusPrice = 105000;
    } else {
        --ZincPlusNumber;
        ZincPlusPrice = ZincPlusPrice - 105000;
    }

    document.querySelector("#numberZincPlus").innerHTML = ZincPlusNumber;
    document.querySelector("#priceZincPlus").innerHTML = 'قیمت کلی : ' + ZincPlusPrice;
}); 


let ZincPlus5Number = 1;
let ZincPlus5Price = 93000;
let plusZincPlus5 = document.querySelector("#plusZincPlus5").addEventListener("click", function () {
    if (ZincPlus5Number == 10) {
        ZincPlus5Number = 10;
        ZincPlus5Price = 930000;
    } else {
        ++ZincPlus5Number;
        ZincPlus5Price = ZincPlus5Price + 93000;
    }

    document.querySelector("#numberZincPlus5").innerHTML = ZincPlus5Number;
    document.querySelector("#priceZincPlus5").innerHTML = 'قیمت کلی : ' + ZincPlus5Price;
});
let minZincPlus5 = document.querySelector("#minZincPlus5").addEventListener("click", function () {
    if (ZincPlus5Number == 1) {
        ZincPlus5Number = 1;
        ZincPlus5Price = 93000;
    } else {
        --ZincPlus5Number;
        ZincPlus5Price = ZincPlus5Price - 93000;
    }

    document.querySelector("#numberZincPlus5").innerHTML = ZincPlus5Number;
    document.querySelector("#priceZincPlus5").innerHTML = 'قیمت کلی : ' + ZincPlus5Price;
}); 


let WominaVitNumber = 1;
let WominaVitPrice = 125000;
let plusWominaVit = document.querySelector("#plusWominaVit").addEventListener("click", function () {
    if (WominaVitNumber == 10) {
        WominaVitNumber = 10;
        WominaVitPrice = 1250000;
    } else {
        ++WominaVitNumber;
        WominaVitPrice = WominaVitPrice + 125000;
    }

    document.querySelector("#numberWominaVit").innerHTML = WominaVitNumber;
    document.querySelector("#priceWominaVit").innerHTML = 'قیمت کلی : ' + WominaVitPrice;
});
let minWominaVit = document.querySelector("#minWominaVit").addEventListener("click", function () {
    if (WominaVitNumber == 1) {
        WominaVitNumber = 1;
        WominaVitPrice = 125000;
    } else {
        --WominaVitNumber;
        WominaVitPrice = WominaVitPrice - 125000;
    }

    document.querySelector("#numberWominaVit").innerHTML = WominaVitNumber;
    document.querySelector("#priceWominaVit").innerHTML = 'قیمت کلی : ' + WominaVitPrice;
}); 

let VitavisionNumber = 1;
let VitavisionPrice = 465000;
let plusVitavision = document.querySelector("#plusVitavision").addEventListener("click", function () {
    if (VitavisionNumber == 10) {
        VitavisionNumber = 10;
        VitavisionPrice = 4650000;
    } else {
        ++VitavisionNumber;
        VitavisionPrice = VitavisionPrice + 465000;
    }

    document.querySelector("#numberVitavision").innerHTML = VitavisionNumber;
    document.querySelector("#priceVitavision").innerHTML = 'قیمت کلی : ' + VitavisionPrice;
});
let minVitavision = document.querySelector("#minVitavision").addEventListener("click", function () {
    if (VitavisionNumber == 1) {
        VitavisionNumber = 1;
        VitavisionPrice = 465000;
    } else {
        --VitavisionNumber;
        VitavisionPrice = VitavisionPrice - 465000;
    }

    document.querySelector("#numberVitavision").innerHTML = VitavisionNumber;
    document.querySelector("#priceVitavision").innerHTML = 'قیمت کلی : ' + VitavisionPrice;
}); 


let SelenPlusNumber = 1;
let SelenPlusPrice = 165000;
let plusSelenPlus = document.querySelector("#plusSelenPlus").addEventListener("click", function () {
    if (SelenPlusNumber == 10) {
        SelenPlusNumber = 10;
        SelenPlusPrice = 1650000;
    } else {
        ++SelenPlusNumber;
        SelenPlusPrice = SelenPlusPrice + 165000;
    }

    document.querySelector("#numberSelenPlus").innerHTML = SelenPlusNumber;
    document.querySelector("#priceSelenPlus").innerHTML = 'قیمت کلی : ' + SelenPlusPrice;
});
let minSelenPlus = document.querySelector("#minSelenPlus").addEventListener("click", function () {
    if (SelenPlusNumber == 1) {
        SelenPlusNumber = 1;
        SelenPlusPrice = 165000;
    } else {
        --SelenPlusNumber;
        SelenPlusPrice = SelenPlusPrice - 165000;
    }

    document.querySelector("#numberSelenPlus").innerHTML = SelenPlusNumber;
    document.querySelector("#priceSelenPlus").innerHTML = 'قیمت کلی : ' + SelenPlusPrice;
}); 


let SideralForteNumber = 1;
let SideralFortePrice = 244000;
let plusSideralForte = document.querySelector("#plusSideralForte").addEventListener("click", function () {
    if (SideralForteNumber == 10) {
        SideralForteNumber = 10;
        SideralFortePrice = 2440000;
    } else {
        ++SideralForteNumber;
        SideralFortePrice = SideralFortePrice + 244000;
    }

    document.querySelector("#numberSideralForte").innerHTML = SideralForteNumber;
    document.querySelector("#priceSideralForte").innerHTML = 'قیمت کلی : ' + SideralFortePrice;
});
let minSideralForte = document.querySelector("#minSideralForte").addEventListener("click", function () {
    if (SideralForteNumber == 1) {
        SideralForteNumber = 1;
        SideralFortePrice = 244000;
    } else {
        --SideralForteNumber;
        SideralFortePrice = SideralFortePrice - 244000;
    }

    document.querySelector("#numberSideralForte").innerHTML = SideralForteNumber;
    document.querySelector("#priceSideralForte").innerHTML = 'قیمت کلی : ' + SideralFortePrice;
}); 


let SideralNumber = 1;
let SideralPrice = 122000;
let plusSideral = document.querySelector("#plusSideral").addEventListener("click", function () {
    if (SideralNumber == 10) {
        SideralNumber = 10;
        SideralPrice = 1220000;
    } else {
        ++SideralNumber;
        SideralPrice = SideralPrice + 122000;
    }

    document.querySelector("#numberSideral").innerHTML = SideralNumber;
    document.querySelector("#priceSideral").innerHTML = 'قیمت کلی : ' + SideralPrice;
});
let minSideral = document.querySelector("#minSideral").addEventListener("click", function () {
    if (SideralNumber == 1) {
        SideralNumber = 1;
        SideralPrice = 122000;
    } else {
        --SideralNumber;
        SideralPrice = SideralPrice - 122000;
    }

    document.querySelector("#numberSideral").innerHTML = SideralNumber;
    document.querySelector("#priceSideral").innerHTML = 'قیمت کلی : ' + SideralPrice;
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
function XovitDelBtn() {
    document.getElementById("Xovit").style.display = "none";
    document.getElementById("XovitDelBtn").style.display = "none";
}
function GumfiDelBtn() {
    document.getElementById("Gumfi").style.display = "none";
    document.getElementById("GumfiDelBtn").style.display = "none";
}
function ZincPlusDelBtn() {
    document.getElementById("ZincPlus").style.display = "none";
    document.getElementById("ZincPlusDelBtn").style.display = "none";
}
function ZincPlus5DelBtn() {
    document.getElementById("ZincPlus5").style.display = "none";
    document.getElementById("ZincPlus5DelBtn").style.display = "none";
}
function WominaVitDelBtn() {
    document.getElementById("WominaVit").style.display = "none";
    document.getElementById("WominaVitDelBtn").style.display = "none";
}
function VitavisionDelBtn() {
    document.getElementById("Vitavision").style.display = "none";
    document.getElementById("VitavisionDelBtn").style.display = "none";
}
function SelenPlusDelBtn() {
    document.getElementById("SelenPlus").style.display = "none";
    document.getElementById("SelenPlusDelBtn").style.display = "none";
}
function SideralForteDelBtn() {
    document.getElementById("SideralForte").style.display = "none";
    document.getElementById("SideralForteDelBtn").style.display = "none";
}
function SideralDelBtn() {
    document.getElementById("Sideral").style.display = "none";
    document.getElementById("SideralDelBtn").style.display = "none";
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
function XovitClicked() {
    document.getElementById("Xovit").innerText = "  قرص ایکسوویت فورت هلث اید  | Xovit Forte به تعداد " + XovitNumber + "عدد و به قیمت " + XovitPrice + "هزار تومان.";
    document.getElementById("Xovit").style.display = "block";
    document.getElementById("XovitDelBtn").style.display = "block";
    document.getElementById("XovitBuyFinished").style.display = "block";
    document.getElementById("XovitBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("XovitBuyFinished").style.display = "none";
}, 1000);
}
function GumfiClicked() {
    document.getElementById("Gumfi").innerText = "  پاستیل مولتی ویتامین دکتر گامفی  | Dr.Gumfi به تعداد " + GumfiNumber + "عدد و به قیمت " + GumfiPrice + "هزار تومان.";
    document.getElementById("Gumfi").style.display = "block";
    document.getElementById("GumfiDelBtn").style.display = "block";
    document.getElementById("GumfiBuyFinished").style.display = "block";
    document.getElementById("GumfiBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("GumfiBuyFinished").style.display = "none";
}, 1000);
}
function ZincPlusClicked() {
    document.getElementById("ZincPlus").innerText = "  کپسول زینک پلاس 10 میلی گرمی ب کمپلکس  | Zinc-PLus 10mg به تعداد " + ZincPlusNumber + "عدد و به قیمت " + ZincPlusPrice + "هزار تومان.";
    document.getElementById("ZincPlus").style.display = "block";
    document.getElementById("ZincPlusDelBtn").style.display = "block";
    document.getElementById("ZincPlusBuyFinished").style.display = "block";
    document.getElementById("ZincPlusBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("ZincPlusBuyFinished").style.display = "none";
}, 1000);
}
function ZincPlus5Clicked() {
    document.getElementById("ZincPlus5").innerText = "  کپسول زینک پلاس 5 میلی گرمی ب کمپلکس  | Zinc-PLus 5mg به تعداد " + ZincPlus5Number + "عدد و به قیمت " + ZincPlus5Price + "هزار تومان.";
    document.getElementById("ZincPlus5").style.display = "block";
    document.getElementById("ZincPlus5DelBtn").style.display = "block";
    document.getElementById("ZincPlus5BuyFinished").style.display = "block";
    document.getElementById("ZincPlus5BuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("ZincPlus5BuyFinished").style.display = "none";
}, 1000);
}
function WominaVitClicked() {
    document.getElementById("WominaVit").innerText = "  سافت ژل وومیناویت  | Womina-Vit به تعداد " + WominaVitNumber + "عدد و به قیمت " + WominaVitPrice + "هزار تومان.";
    document.getElementById("WominaVit").style.display = "block";
    document.getElementById("WominaVitDelBtn").style.display = "block";
    document.getElementById("WominaVitBuyFinished").style.display = "block";
    document.getElementById("WominaVitBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("WominaVitBuyFinished").style.display = "none";
}, 1000);
}
function VitavisionClicked() {
    document.getElementById("Vitavision").innerText = "  کپسول ویتاویژن فورت  | Vitavision Forte به تعداد " + VitavisionNumber + "عدد و به قیمت " + VitavisionPrice + "هزار تومان.";
    document.getElementById("Vitavision").style.display = "block";
    document.getElementById("VitavisionDelBtn").style.display = "block";
    document.getElementById("VitavisionBuyFinished").style.display = "block";
    document.getElementById("VitavisionBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("VitavisionBuyFinished").style.display = "none";
}, 1000);
}
function SelenPlusClicked() {
    document.getElementById("SelenPlus").innerText = "  کپسول سلن پلاس یوروویتال  | Selen Plus به تعداد " + SelenPlusNumber + "عدد و به قیمت " + SelenPlusPrice + "هزار تومان.";
    document.getElementById("SelenPlus").style.display = "block";
    document.getElementById("SelenPlusDelBtn").style.display = "block";
    document.getElementById("SelenPlusBuyFinished").style.display = "block";
    document.getElementById("SelenPlusBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("SelenPlusBuyFinished").style.display = "none";
}, 1000);
}
function SideralForteClicked() {
    document.getElementById("SideralForte").innerText = "  کپسول سیدرال فورت  | Sideral Forte به تعداد " + SideralForteNumber + "عدد و به قیمت " + SideralFortePrice + "هزار تومان.";
    document.getElementById("SideralForte").style.display = "block";
    document.getElementById("SideralForteDelBtn").style.display = "block";
    document.getElementById("SideralForteBuyFinished").style.display = "block";
    document.getElementById("SideralForteBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("SideralForteBuyFinished").style.display = "none";
}, 1000);
}
function SideralClicked() {
    document.getElementById("Sideral").innerText = "  کپسول سیدرال   | Sideral  به تعداد " + SideralNumber + "عدد و به قیمت " + SideralPrice + "هزار تومان.";
    document.getElementById("Sideral").style.display = "block";
    document.getElementById("SideralDelBtn").style.display = "block";
    document.getElementById("SideralBuyFinished").style.display = "block";
    document.getElementById("SideralBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("SideralBuyFinished").style.display = "none";
}, 1000);
}
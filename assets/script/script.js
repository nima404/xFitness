
// golden
function copyToClipboard(element) {
    var fname = document.getElementById("fname").value;
    var sexuality = document.getElementById("sexuality").value;
    var old = document.getElementById("old").value;
    var heightWG = document.getElementById("heightWG").value;
    var wheighttWG = document.getElementById("wheighttWG").value;
    var bloodtype = document.getElementById("bloodtype").value;
    var Armcircumference = document.getElementById("Armcircumference").value;
    var Traininghistory = document.getElementById("Traininghistory").value;
    var Aroundtheabdomen = document.getElementById("Aroundtheabdomen").value;
    var Roundleg = document.getElementById("Roundleg").value;
    var Roundforearm = document.getElementById("Roundforearm").value;
    var Hipcircumference = document.getElementById("Hipcircumference").value;
    var Roundthigh = document.getElementById("Roundthigh").value;

    document.getElementById("past").innerHTML =  "دوره افزایش وزن حرفه ای (طلایی)" + " " + "<br>" + fname + " " + "<br>" + "جنسیت :" + " " + String(sexuality) + " " + "<br>" + "سن :" + " " + Number(old) + " " + "<br>" + "قد :" + " " + Number(heightWG) + " " + "<br>" +
        "وزن :" + " " + Number(wheighttWG) + " " + "<br>" + "گروه خونی :" + " " + String(bloodtype) + " " + "<br>" + "دور بازو :" + " " + Number(Armcircumference) + " " + "<br>" +
        "سابقه تمرینی :" + " " + Number(Traininghistory) + " " + "<br>" + "دور شکم :" + " " + Number(Aroundtheabdomen) + " " + "<br>" + "دور ساق : " + " " + Number(Roundleg) + " " + "<br>" +
        "دور ساعد : " + " " + Number(Roundforearm) + " " + "<br>" + "دور باسن :" + " " + Number(Hipcircumference) + " " + "<br>" + "دور ران :" + " " + Number(Roundthigh)
        ;

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    document.getElementById("saveCorrect").innerHTML = "اطلاعات شما در کلیپ بورد شما ذخیره شد ، در صورت صحیح بودن اطلاعات روی دکمه ثبت سفارش کلیک نمایید و سپس پیام کپی شده را انجا جای گذاری کنید."
}

function copyToClipboardWeghtLoss(element) {
    var fname = document.getElementById("fname").value;
    var sexuality = document.getElementById("sexuality").value;
    var old = document.getElementById("old").value;
    var heightWG = document.getElementById("heightWG").value;
    var wheighttWG = document.getElementById("wheighttWG").value;
    var bloodtype = document.getElementById("bloodtype").value;
    var Armcircumference = document.getElementById("Armcircumference").value;
    var Traininghistory = document.getElementById("Traininghistory").value;
    var Aroundtheabdomen = document.getElementById("Aroundtheabdomen").value;
    var Roundleg = document.getElementById("Roundleg").value;
    var Roundforearm = document.getElementById("Roundforearm").value;
    var Hipcircumference = document.getElementById("Hipcircumference").value;
    var Roundthigh = document.getElementById("Roundthigh").value;

    document.getElementById("pastWeghtLoss").innerHTML = "دوره کاهش وزن حرفه ای (طلایی)" + " " + "<br>" + fname + " " + "<br>" + "جنسیت :" + " " + String(sexuality) + " " + "<br>" + "سن :" + " " + Number(old) + " " + "<br>" + "قد :" + " " + Number(heightWG) + " " + "<br>" +
        "وزن :" + " " + Number(wheighttWG) + " " + "<br>" + "گروه خونی :" + " " + String(bloodtype) + " " + "<br>" + "دور بازو :" + " " + Number(Armcircumference) + " " + "<br>" +
        "سابقه تمرینی :" + " " + Number(Traininghistory) + " " + "<br>" + "دور شکم :" + " " + Number(Aroundtheabdomen) + " " + "<br>" + "دور ساق : " + " " + Number(Roundleg) + " " + "<br>" +
        "دور ساعد : " + " " + Number(Roundforearm) + " " + "<br>" + "دور باسن :" + " " + Number(Hipcircumference) + " " + "<br>" + "دور ران :" + " " + Number(Roundthigh)
        ;

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    document.getElementById("saveCorrect").innerHTML = "اطلاعات شما در کلیپ بورد شما ذخیره شد ، در صورت صحیح بودن اطلاعات روی دکمه ثبت سفارش کلیک نمایید و سپس پیام کپی شده را انجا جای گذاری کنید."
}

// silver
function copyToClipboardpastSilver(element) {
    var fname = document.getElementById("fname").value;
    var sexuality = document.getElementById("sexuality").value;
    var old = document.getElementById("old").value;
    var heightWG = document.getElementById("heightWG").value;
    var wheighttWG = document.getElementById("wheighttWG").value;
    var bloodtype = document.getElementById("bloodtype").value;
    var Armcircumference = document.getElementById("Armcircumference").value;
    var Aroundtheabdomen = document.getElementById("Aroundtheabdomen").value;
    var Roundleg = document.getElementById("Roundleg").value;
    var Roundforearm = document.getElementById("Roundforearm").value;
    var Hipcircumference = document.getElementById("Hipcircumference").value;
    var Roundthigh = document.getElementById("Roundthigh").value;

    document.getElementById("pastSilver").innerHTML =  "دوره افزایش وزن مبتدی (نقره ای)" + " " + "<br>" + fname + " " + "<br>" + "جنسیت :" + " " + String(sexuality) + " " + "<br>" + "سن :" + " " + Number(old) + " " + "<br>" + "قد :" + " " + Number(heightWG) + " " + "<br>" +
        "وزن :" + " " + Number(wheighttWG) + " " + "<br>" + "گروه خونی :" + " " + String(bloodtype) + " " + "<br>" + "دور بازو :" + " " + Number(Armcircumference) + " " + "<br>"  + "دور شکم :" + " " + Number(Aroundtheabdomen) + " " + "<br>" + "دور ساق : " + " " + Number(Roundleg) + " " + "<br>" +
        "دور ساعد : " + " " + Number(Roundforearm) + " " + "<br>" + "دور باسن :" + " " + Number(Hipcircumference) + " " + "<br>" + "دور ران :" + " " + Number(Roundthigh)
        ;

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    document.getElementById("saveCorrect").innerHTML = "اطلاعات شما در کلیپ بورد شما ذخیره شد ، در صورت صحیح بودن اطلاعات روی دکمه ثبت سفارش کلیک نمایید و سپس پیام کپی شده را انجا جای گذاری کنید."
}

function copyToClipboardpastLossSilver(element) {
    var fname = document.getElementById("fname").value;
    var sexuality = document.getElementById("sexuality").value;
    var old = document.getElementById("old").value;
    var heightWG = document.getElementById("heightWG").value;
    var wheighttWG = document.getElementById("wheighttWG").value;
    var bloodtype = document.getElementById("bloodtype").value;
    var Armcircumference = document.getElementById("Armcircumference").value;
    var Aroundtheabdomen = document.getElementById("Aroundtheabdomen").value;
    var Roundleg = document.getElementById("Roundleg").value;
    var Roundforearm = document.getElementById("Roundforearm").value;
    var Hipcircumference = document.getElementById("Hipcircumference").value;
    var Roundthigh = document.getElementById("Roundthigh").value;

    document.getElementById("pastLossSilver").innerHTML =  "دوره کاهش وزن مبتدی (نقره ای)" + " " + "<br>" + fname + " " + "<br>" + "جنسیت :" + " " + String(sexuality) + " " + "<br>" + "سن :" + " " + Number(old) + " " + "<br>" + "قد :" + " " + Number(heightWG) + " " + "<br>" +
        "وزن :" + " " + Number(wheighttWG) + " " + "<br>" + "گروه خونی :" + " " + String(bloodtype) + " " + "<br>" + "دور بازو :" + " " + Number(Armcircumference) + " " + "<br>"  + "دور شکم :" + " " + Number(Aroundtheabdomen) + " " + "<br>" + "دور ساق : " + " " + Number(Roundleg) + " " + "<br>" +
        "دور ساعد : " + " " + Number(Roundforearm) + " " + "<br>" + "دور باسن :" + " " + Number(Hipcircumference) + " " + "<br>" + "دور ران :" + " " + Number(Roundthigh)
        ;

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    document.getElementById("saveCorrect").innerHTML = "اطلاعات شما در کلیپ بورد شما ذخیره شد ، در صورت صحیح بودن اطلاعات روی دکمه ثبت سفارش کلیک نمایید و سپس پیام کپی شده را انجا جای گذاری کنید."
}

// exercise
function copyToClipboardexercise(element){
    var fname = document.getElementById("fname").value;
    var sexuality = document.getElementById("sexuality").value;
    var old = document.getElementById("old").value;
    var heightWG = document.getElementById("heightWG").value;
    var wheighttWG = document.getElementById("wheighttWG").value;
    var phoneNumber = document.getElementById("phoneNum").value;

    document.getElementById("pastLossSilver").innerHTML =  "دوره کاهش وزن مبتدی (نقره ای)" + " " + "<br>" + fname + " " + "<br>" + "شماره همراه :" + " " + Number(phoneNumber) + " " + "<br>" + "سن :" + " " + Number(old) + " " + "<br>" + "قد :" + " " + Number(heightWG) + " " + "<br>" +
        "وزن :" + " " + Number(wheighttWG)
        ;

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    document.getElementById("saveCorrect").innerHTML = "اطلاعات شما در کلیپ بورد شما ذخیره شد ، در صورت صحیح بودن اطلاعات روی دکمه ثبت سفارش کلیک نمایید و سپس پیام کپی شده را انجا جای گذاری کنید."
}





$(document).ready(function(){
    $("#toggleWG").click(function(event){
        event.preventDefault();
      $("#tableWG").toggle();
    });
  });
  
  $(document).ready(function(){
    $("#exerciseToggle").click(function(event){
        event.preventDefault();
      $("#exerciseTable").toggle();
    });
  });










// نوبار کلیک

function timNameClick() {
    document.getElementById("shHidTim").style.display = "block";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("exercise").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("DietCode").style.display = "none";

}
function homeClick() {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("DietCode").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("exercise").style.display = "none";
    document.getElementById("shHid").style.display = "block";
}
let LearnClick = document.querySelector("#videoClick").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("DietCode").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("learnDis").style.display = "block";
    document.getElementById("exercise").style.display = "none";
    document.getElementById("shHid").style.display = "none";
})


// click List

let srviceCLick = document.getElementById("ServicesClick").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("exercise").style.display = "none";
    document.getElementById("DietCode").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("service").style.display = "block";
})
let ServicesTshirtClick = document.getElementById("ServicesTshirtClick").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("exercise").style.display = "none";
    document.getElementById("DietCode").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "block";
})
let BMICal = document.getElementById("BMICal").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("DietCode").style.display = "none";
    document.getElementById("exercise").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("BMICalc").style.display = "block";
})
let Diet = document.getElementById("Diet").addEventListener("click", function () {
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("exercise").style.display = "none";
    document.getElementById("DietCode").style.display = "block";
})
let exercise = document.getElementById("exerciseClick").addEventListener("click" , function(){
    document.getElementById("shHidTim").style.display = "none";
    document.getElementById("learnDis").style.display = "none";
    document.getElementById("shHid").style.display = "none";
    document.getElementById("serviceTshirt").style.display = "none";
    document.getElementById("service").style.display = "none";
    document.getElementById("BMICalc").style.display = "none";
    document.getElementById("exercise").style.display = "block";
    document.getElementById("DietCode").style.display = "none";
})


// تغییر لیست مکمل ها در صفحه های یک دو سه چهار

let page1 = document.getElementById("page1").addEventListener("click", function () {
    document.getElementById("mokamel1").style.display = 'inline-flex';
    document.getElementById("mokamel2").style.display = 'none';
    document.getElementById("mokamel4").style.display = 'none';
    document.getElementById("mokamel3").style.display = 'none';

    document.getElementById("page1").classList.add("activePagintion");
    document.getElementById("page2").classList.remove("activePagintion");
    document.getElementById("page3").classList.remove("activePagintion");
    document.getElementById("page4").classList.remove("activePagintion");

    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})
let page2 = document.getElementById("page2").addEventListener("click", function () {
    document.getElementById("mokamel1").style.display = 'none';
    document.getElementById("mokamel3").style.display = 'none';
    document.getElementById("mokamel4").style.display = 'none';
    document.getElementById("mokamel2").style.display = 'inline-flex';
    document.getElementById("page2").classList.add("activePagintion");
    document.getElementById("page1").classList.remove("activePagintion");
    document.getElementById("page3").classList.remove("activePagintion");
    document.getElementById("page4").classList.remove("activePagintion");

    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})
let page3 = document.getElementById("page3").addEventListener("click", function () {
    document.getElementById("mokamel1").style.display = 'none';
    document.getElementById("mokamel2").style.display = 'none';
    document.getElementById("mokamel4").style.display = 'none';
    document.getElementById("mokamel3").style.display = 'inline-flex';
    document.getElementById("page2").classList.remove("activePagintion");
    document.getElementById("page1").classList.remove("activePagintion");
    document.getElementById("page4").classList.remove("activePagintion");
    document.getElementById("page3").classList.add("activePagintion");

    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})
let page4 = document.getElementById("page4").addEventListener("click", function () {
    document.getElementById("mokamel1").style.display = 'none';
    document.getElementById("mokamel2").style.display = 'none';
    document.getElementById("mokamel3").style.display = 'none';
    document.getElementById("mokamel4").style.display = 'inline-flex';
    document.getElementById("page2").classList.remove("activePagintion");
    document.getElementById("page1").classList.remove("activePagintion");
    document.getElementById("page3").classList.remove("activePagintion");
    document.getElementById("page4").classList.add("activePagintion");

    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})

// الرت بعد از لود صفحه برای خرید مکمل

// setTimeout(function () {
//     confirm("برای خرید مکمل به قسمت خدمات رجوع کنید..!")
// }, 4000);


// BMI
function BMIFunc() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var heightOrg = height / 100;
    var BMIFirst = Number(weight) / Number(heightOrg) / Number(heightOrg);
    var totalBMI = BMIFirst.toFixed(2);
    document.getElementById("BMIResponse").innerHTML = " شاخص توده بدنی شما " + totalBMI + " است ";
}


// اسامی تیم (بیشتر و کمتر)
function preveClick() {
    document.getElementById("listNameSecond").style.display = "block";
    document.getElementById("preve").style.display = "none";
    document.getElementById("next").style.display = "block";
}
function nextClick() {
    document.getElementById("listNameSecond").style.display = "none";
    document.getElementById("preve").style.display = "block";
    document.getElementById("next").style.display = "none";

    window.scroll({
        top: 340,
        behavior: 'smooth'
    });
}



// افکت کلمات تایپ شونده روی عکس
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



// منو ی کشویی نوبار
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


// تعداد و قیمت محصول

let vayDobisNumber = 1;
let vayDobisPrice = 1219000;
let plus = document.querySelector("#plus").addEventListener("click", function () {
    if (vayDobisNumber == 10) {
        vayDobisNumber = 10;
        vayDobisPrice = 12190000;
    } else {
        ++vayDobisNumber;
        vayDobisPrice = vayDobisPrice + 1219000;
    }

    document.querySelector("#number").innerHTML = vayDobisNumber;
    document.querySelector("#price").innerHTML = 'قیمت کلی : ' + vayDobisPrice;
})
let min = document.querySelector("#min").addEventListener("click", function () {
    if (vayDobisNumber == 1) {
        vayDobisNumber = 1;
        vayDobisPrice = 1219000;
    } else {
        --vayDobisNumber;
        vayDobisPrice = vayDobisPrice - 1219000;
    }

    document.querySelector("#number").innerHTML = vayDobisNumber;
    document.querySelector("#price").innerHTML = 'قیمت کلی : ' + vayDobisPrice;
})


let GainerDobisNumber = 1;
let GainerDobisPrice = 366000;
let plusGainer = document.querySelector("#plusGainer").addEventListener("click", function () {
    if (GainerDobisNumber == 10) {
        GainerDobisNumber = 10;
        GainerDobisPrice = 3660000;
    } else {
        ++GainerDobisNumber;
        GainerDobisPrice = GainerDobisPrice + 366000;
    }

    document.querySelector("#numberGainer").innerHTML = GainerDobisNumber;
    document.querySelector("#priceGainer").innerHTML = 'قیمت کلی : ' + GainerDobisPrice;
});
let minGainer = document.querySelector("#minGainer").addEventListener("click", function () {
    if (GainerDobisNumber == 1) {
        GainerDobisNumber = 1;
        GainerDobisPrice = 366000;
    } else {
        --GainerDobisNumber;
        GainerDobisPrice = GainerDobisPrice - 366000;
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


let AsmaVitNumber = 1;
let AsmaVitPrice = 77000;
let plusAsmaVit = document.querySelector("#plusAsmaVit").addEventListener("click", function () {
    if (AsmaVitNumber == 10) {
        AsmaVitNumber = 10;
        AsmaVitPrice = 770000;
    } else {
        ++AsmaVitNumber;
        AsmaVitPrice = AsmaVitPrice + 77000;
    }

    document.querySelector("#numberAsmaVit").innerHTML = AsmaVitNumber;
    document.querySelector("#priceAsmaVit").innerHTML = 'قیمت کلی : ' + AsmaVitPrice;
});
let minAsmaVit = document.querySelector("#minAsmaVit").addEventListener("click", function () {
    if (AsmaVitNumber == 1) {
        AsmaVitNumber = 1;
        AsmaVitPrice = 77000;
    } else {
        --AsmaVitNumber;
        AsmaVitPrice = AsmaVitPrice - 77000;
    }

    document.querySelector("#numberAsmaVit").innerHTML = AsmaVitNumber;
    document.querySelector("#priceAsmaVit").innerHTML = 'قیمت کلی : ' + AsmaVitPrice;
});


let IrofixNumber = 1;
let IrofixPrice = 99000;
let plusIrofix = document.querySelector("#plusIrofix").addEventListener("click", function () {
    if (IrofixNumber == 10) {
        IrofixNumber = 10;
        IrofixPrice = 990000;
    } else {
        ++IrofixNumber;
        IrofixPrice = IrofixPrice + 99000;
    }

    document.querySelector("#numberIrofix").innerHTML = IrofixNumber;
    document.querySelector("#priceIrofix").innerHTML = 'قیمت کلی : ' + IrofixPrice;
});
let minIrofix = document.querySelector("#minIrofix").addEventListener("click", function () {
    if (IrofixNumber == 1) {
        IrofixNumber = 1;
        IrofixPrice = 99000;
    } else {
        --IrofixNumber;
        IrofixPrice = IrofixPrice - 99000;
    }

    document.querySelector("#numberIrofix").innerHTML = IrofixNumber;
    document.querySelector("#priceIrofix").innerHTML = 'قیمت کلی : ' + IrofixPrice;
});


let IMMUNACENumber = 1;
let IMMUNACEPrice = 86000;
let plusIMMUNACE = document.querySelector("#plusIMMUNACE").addEventListener("click", function () {
    if (IMMUNACENumber == 10) {
        IMMUNACENumber = 10;
        IMMUNACEPrice = 860000;
    } else {
        ++IMMUNACENumber;
        IMMUNACEPrice = IMMUNACEPrice + 86000;
    }

    document.querySelector("#numberIMMUNACE").innerHTML = IMMUNACENumber;
    document.querySelector("#priceIMMUNACE").innerHTML = 'قیمت کلی : ' + IMMUNACEPrice;
});
let minIMMUNACE = document.querySelector("#minIMMUNACE").addEventListener("click", function () {
    if (IMMUNACENumber == 1) {
        IMMUNACENumber = 1;
        IMMUNACEPrice = 86000;
    } else {
        --IMMUNACENumber;
        IMMUNACEPrice = IMMUNACEPrice - 86000;
    }

    document.querySelector("#numberIMMUNACE").innerHTML = IMMUNACENumber;
    document.querySelector("#priceIMMUNACE").innerHTML = 'قیمت کلی : ' + IMMUNACEPrice;
});


let FeroglobinNumber = 1;
let FeroglobinPrice = 69000;
let plusFeroglobin = document.querySelector("#plusFeroglobin").addEventListener("click", function () {
    if (FeroglobinNumber == 10) {
        FeroglobinNumber = 10;
        FeroglobinPrice = 690000;
    } else {
        ++FeroglobinNumber;
        FeroglobinPrice = FeroglobinPrice + 69000;
    }

    document.querySelector("#numberFeroglobin").innerHTML = FeroglobinNumber;
    document.querySelector("#priceFeroglobin").innerHTML = 'قیمت کلی : ' + FeroglobinPrice;
});
let minFeroglobin = document.querySelector("#minFeroglobin").addEventListener("click", function () {
    if (FeroglobinNumber == 1) {
        FeroglobinNumber = 1;
        FeroglobinPrice = 69000;
    } else {
        --FeroglobinNumber;
        FeroglobinPrice = FeroglobinPrice - 69000;
    }

    document.querySelector("#numberFeroglobin").innerHTML = FeroglobinNumber;
    document.querySelector("#priceFeroglobin").innerHTML = 'قیمت کلی : ' + FeroglobinPrice;
});


let EnergeXNumber = 1;
let EnergeXPrice = 188000;
let plusEnergeX = document.querySelector("#plusEnergeX").addEventListener("click", function () {
    if (EnergeXNumber == 10) {
        EnergeXNumber = 10;
        EnergeXPrice = 1880000;
    } else {
        ++EnergeXNumber;
        EnergeXPrice = EnergeXPrice + 188000;
    }

    document.querySelector("#numberEnergeX").innerHTML = EnergeXNumber;
    document.querySelector("#priceEnergeX").innerHTML = 'قیمت کلی : ' + EnergeXPrice;
});
let minEnergeX = document.querySelector("#minEnergeX").addEventListener("click", function () {
    if (EnergeXNumber == 1) {
        EnergeXNumber = 1;
        EnergeXPrice = 188000;
    } else {
        --EnergeXNumber;
        EnergeXPrice = EnergeXPrice - 188000;
    }

    document.querySelector("#numberEnergeX").innerHTML = EnergeXNumber;
    document.querySelector("#priceEnergeX").innerHTML = 'قیمت کلی : ' + EnergeXPrice;
});


let Magnesium400Number = 1;
let Magnesium400Price = 109000;
let plusMagnesium400 = document.querySelector("#plusMagnesium400").addEventListener("click", function () {
    if (Magnesium400Number == 10) {
        Magnesium400Number = 10;
        Magnesium400Price = 1090000;
    } else {
        ++Magnesium400Number;
        Magnesium400Price = Magnesium400Price + 109000;
    }

    document.querySelector("#numberMagnesium400").innerHTML = Magnesium400Number;
    document.querySelector("#priceMagnesium400").innerHTML = 'قیمت کلی : ' + Magnesium400Price;
});
let minMagnesium400 = document.querySelector("#minMagnesium400").addEventListener("click", function () {
    if (Magnesium400Number == 1) {
        Magnesium400Number = 1;
        Magnesium400Price = 109000;
    } else {
        --Magnesium400Number;
        Magnesium400Price = Magnesium400Price - 109000;
    }

    document.querySelector("#numberMagnesium400").innerHTML = Magnesium400Number;
    document.querySelector("#priceMagnesium400").innerHTML = 'قیمت کلی : ' + Magnesium400Price;
});


let ZincB6Number = 1;
let ZincB6Price = 84000;
let plusZincB6 = document.querySelector("#plusZincB6").addEventListener("click", function () {
    if (ZincB6Number == 10) {
        ZincB6Number = 10;
        ZincB6Price = 840000;
    } else {
        ++ZincB6Number;
        ZincB6Price = ZincB6Price + 84000;
    }

    document.querySelector("#numberZincB6").innerHTML = ZincB6Number;
    document.querySelector("#priceZincB6").innerHTML = 'قیمت کلی : ' + ZincB6Price;
});
let minZincB6 = document.querySelector("#minZincB6").addEventListener("click", function () {
    if (ZincB6Number == 1) {
        ZincB6Number = 1;
        ZincB6Price = 84000;
    } else {
        --ZincB6Number;
        ZincB6Price = ZincB6Price - 84000;
    }

    document.querySelector("#numberZincB6").innerHTML = ZincB6Number;
    document.querySelector("#priceZincB6").innerHTML = 'قیمت کلی : ' + ZincB6Price;
});


let CalciPowerNumber = 1;
let CalciPowerPrice = 78000;
let plusCalciPower = document.querySelector("#plusCalciPower").addEventListener("click", function () {
    if (CalciPowerNumber == 10) {
        CalciPowerNumber = 10;
        CalciPowerPrice = 780000;
    } else {
        ++CalciPowerNumber;
        CalciPowerPrice = CalciPowerPrice + 78000;
    }

    document.querySelector("#numberCalciPower").innerHTML = CalciPowerNumber;
    document.querySelector("#priceCalciPower").innerHTML = 'قیمت کلی : ' + CalciPowerPrice;
});
let minCalciPower = document.querySelector("#minCalciPower").addEventListener("click", function () {
    if (CalciPowerNumber == 1) {
        CalciPowerNumber = 1;
        CalciPowerPrice = 78000;
    } else {
        --CalciPowerNumber;
        CalciPowerPrice = CalciPowerPrice - 78000;
    }

    document.querySelector("#numberCalciPower").innerHTML = CalciPowerNumber;
    document.querySelector("#priceCalciPower").innerHTML = 'قیمت کلی : ' + CalciPowerPrice;
});


let Calcium600Number = 1;
let Calcium600Price = 119000;
let plusCalcium600 = document.querySelector("#plusCalcium600").addEventListener("click", function () {
    if (Calcium600Number == 10) {
        Calcium600Number = 10;
        Calcium600Price = 1190000;
    } else {
        ++Calcium600Number;
        Calcium600Price = Calcium600Price + 119000;
    }

    document.querySelector("#numberCalcium600").innerHTML = Calcium600Number;
    document.querySelector("#priceCalcium600").innerHTML = 'قیمت کلی : ' + Calcium600Price;
});
let minCalcium600 = document.querySelector("#minCalcium600").addEventListener("click", function () {
    if (Calcium600Number == 1) {
        Calcium600Number = 1;
        Calcium600Price = 119000;
    } else {
        --Calcium600Number;
        Calcium600Price = Calcium600Price - 119000;
    }

    document.querySelector("#numberCalcium600").innerHTML = Calcium600Number;
    document.querySelector("#priceCalcium600").innerHTML = 'قیمت کلی : ' + Calcium600Price;
});


let AvodinNumber = 1;
let AvodinPrice = 133000;
let plusAvodin = document.querySelector("#plusAvodin").addEventListener("click", function () {
    if (AvodinNumber == 10) {
        AvodinNumber = 10;
        AvodinPrice = 1330000;
    } else {
        ++AvodinNumber;
        AvodinPrice = AvodinPrice + 133000;
    }

    document.querySelector("#numberAvodin").innerHTML = AvodinNumber;
    document.querySelector("#priceAvodin").innerHTML = 'قیمت کلی : ' + AvodinPrice;
});
let minAvodin = document.querySelector("#minAvodin").addEventListener("click", function () {
    if (AvodinNumber == 1) {
        AvodinNumber = 1;
        AvodinPrice = 133000;
    } else {
        --AvodinNumber;
        AvodinPrice = AvodinPrice - 133000;
    }

    document.querySelector("#numberAvodin").innerHTML = AvodinNumber;
    document.querySelector("#priceAvodin").innerHTML = 'قیمت کلی : ' + AvodinPrice;
});


let CaffeineNumber = 1;
let CaffeinePrice = 113000;
let plusCaffeine = document.querySelector("#plusCaffeine").addEventListener("click", function () {
    if (CaffeineNumber == 10) {
        CaffeineNumber = 10;
        CaffeinePrice = 1130000;
    } else {
        ++CaffeineNumber;
        CaffeinePrice = CaffeinePrice + 113000;
    }

    document.querySelector("#numberCaffeine").innerHTML = CaffeineNumber;
    document.querySelector("#priceCaffeine").innerHTML = 'قیمت کلی : ' + CaffeinePrice;
});
let minCaffeine = document.querySelector("#minCaffeine").addEventListener("click", function () {
    if (CaffeineNumber == 1) {
        CaffeineNumber = 1;
        CaffeinePrice = 113000;
    } else {
        --CaffeineNumber;
        CaffeinePrice = CaffeinePrice - 113000;
    }

    document.querySelector("#numberCaffeine").innerHTML = CaffeineNumber;
    document.querySelector("#priceCaffeine").innerHTML = 'قیمت کلی : ' + CaffeinePrice;
});




// حذف محصول در سبد خرید


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
function SideralDelBtn() {
    document.getElementById("AsmaVit").style.display = "none";
    document.getElementById("AsmaVitDelBtn").style.display = "none";
}
function IrofixDelBtn() {
    document.getElementById("Irofix").style.display = "none";
    document.getElementById("IrofixDelBtn").style.display = "none";
}
function IMMUNACEDelBtn() {
    document.getElementById("IMMUNACE").style.display = "none";
    document.getElementById("IMMUNACEDelBtn").style.display = "none";
}
function FeroglobinDelBtn() {
    document.getElementById("Feroglobin").style.display = "none";
    document.getElementById("FeroglobinDelBtn").style.display = "none";
}
function EnergeXDelBtn() {
    document.getElementById("EnergeX").style.display = "none";
    document.getElementById("EnergeXDelBtn").style.display = "none";
}
function Magnesium400DelBtn() {
    document.getElementById("Magnesium400").style.display = "none";
    document.getElementById("Magnesium400DelBtn").style.display = "none";
}
function ZincB6DelBtn() {
    document.getElementById("ZincB6").style.display = "none";
    document.getElementById("ZincB6DelBtn").style.display = "none";
}
function CalciPowerDelBtn() {
    document.getElementById("CalciPower").style.display = "none";
    document.getElementById("CalciPowerDelBtn").style.display = "none";
}
function Calcium600DelBtn() {
    document.getElementById("Calcium600").style.display = "none";
    document.getElementById("Calcium600DelBtn").style.display = "none";
}
function AvodinDelBtn() {
    document.getElementById("Avodin").style.display = "none";
    document.getElementById("AvodinDelBtn").style.display = "none";
}
function CaffeineDelBtn() {
    document.getElementById("Caffeine").style.display = "none";
    document.getElementById("CaffeineDelBtn").style.display = "none";
}







// اطلاعات سبد خرید


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
function AsmaVitClicked() {
    document.getElementById("AsmaVit").innerText = "  شربت آسماویت ویتابیوتیکس ۲۰۰ میلی لیتر   | AsmaVit  به تعداد " + AsmaVitNumber + "عدد و به قیمت " + AsmaVitPrice + "هزار تومان.";
    document.getElementById("AsmaVit").style.display = "block";
    document.getElementById("AsmaVitDelBtn").style.display = "block";
    document.getElementById("AsmaVitBuyFinished").style.display = "block";
    document.getElementById("AsmaVitBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("AsmaVitBuyFinished").style.display = "none";
    }, 1000);
}
function IrofixClicked() {
    document.getElementById("Irofix").innerText = "  قطره آیروفیکس دایونیکس فارما   | Irofix  به تعداد " + IrofixNumber + "عدد و به قیمت " + IrofixPrice + "هزار تومان.";
    document.getElementById("Irofix").style.display = "block";
    document.getElementById("IrofixDelBtn").style.display = "block";
    document.getElementById("IrofixBuyFinished").style.display = "block";
    document.getElementById("IrofixBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("IrofixBuyFinished").style.display = "none";
    }, 1000);
}
function IMMUNACEClicked() {
    document.getElementById("IMMUNACE").innerText = "  شربت ایمیونیس ویتابیوتیکس 200 میلی لیتر   | VITABIOTICS IMMUNACE  به تعداد " + IMMUNACENumber + "عدد و به قیمت " + IMMUNACEPrice + "هزار تومان.";
    document.getElementById("IMMUNACE").style.display = "block";
    document.getElementById("IMMUNACEDelBtn").style.display = "block";
    document.getElementById("IMMUNACEBuyFinished").style.display = "block";
    document.getElementById("IMMUNACEBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("IMMUNACEBuyFinished").style.display = "none";
    }, 1000);
}
function FeroglobinClicked() {
    document.getElementById("Feroglobin").innerText = "  شربت فروگلوبین B12 ویتابیوتیکس ۲۰۰ میلی لیتر   | Feroglobin B12  به تعداد " + FeroglobinNumber + "عدد و به قیمت " + FeroglobinPrice + "هزار تومان.";
    document.getElementById("Feroglobin").style.display = "block";
    document.getElementById("FeroglobinDelBtn").style.display = "block";
    document.getElementById("FeroglobinBuyFinished").style.display = "block";
    document.getElementById("FeroglobinBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("FeroglobinBuyFinished").style.display = "none";
    }, 1000);
}
function EnergeXClicked() {
    document.getElementById("EnergeX").innerText = "  قرص انرژکس گلدن لایف   | Energe-X  به تعداد " + EnergeXNumber + "عدد و به قیمت " + EnergeXPrice + "هزار تومان.";
    document.getElementById("EnergeX").style.display = "block";
    document.getElementById("EnergeXDelBtn").style.display = "block";
    document.getElementById("EnergeXBuyFinished").style.display = "block";
    document.getElementById("EnergeXBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("EnergeXBuyFinished").style.display = "none";
    }, 1000);
}
function Magnesium400Clicked() {
    document.getElementById("Magnesium400").innerText = "  ساشه منیزیم 400 یوروویتال   | Magnesium 400  به تعداد " + Magnesium400Number + "عدد و به قیمت " + Magnesium400Price + "هزار تومان.";
    document.getElementById("Magnesium400").style.display = "block";
    document.getElementById("Magnesium400DelBtn").style.display = "block";
    document.getElementById("Magnesium400BuyFinished").style.display = "block";
    document.getElementById("Magnesium400BuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("Magnesium400BuyFinished").style.display = "none";
    }, 1000);
}
function ZincB6Clicked() {
    document.getElementById("ZincB6").innerText = "  قرص سیستین B6 زینک رازک   | Cystine B6 Zinc  به تعداد " + ZincB6Number + "عدد و به قیمت " + ZincB6Price + "هزار تومان.";
    document.getElementById("ZincB6").style.display = "block";
    document.getElementById("ZincB6DelBtn").style.display = "block";
    document.getElementById("ZincB6BuyFinished").style.display = "block";
    document.getElementById("ZincB6BuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("ZincB6BuyFinished").style.display = "none";
    }, 1000);
}
function CalciPowerClicked() {
    document.getElementById("CalciPower").innerText = "  قرص کلسی پاور هولیستیکا   | Calci Power  به تعداد " + CalciPowerNumber + "عدد و به قیمت " + CalciPowerPrice + "هزار تومان.";
    document.getElementById("CalciPower").style.display = "block";
    document.getElementById("CalciPowerDelBtn").style.display = "block";
    document.getElementById("CalciPowerBuyFinished").style.display = "block";
    document.getElementById("CalciPowerBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("CalciPowerBuyFinished").style.display = "none";
    }, 1000);
}
function Calcium600Clicked() {
    document.getElementById("Calcium600").innerText = "  قرص کلسیم 600 و ویتامین D آلفا   | Calcium 600+D  به تعداد " + Calcium600Number + "عدد و به قیمت " + Calcium600Price + "هزار تومان.";
    document.getElementById("Calcium600").style.display = "block";
    document.getElementById("Calcium600DelBtn").style.display = "block";
    document.getElementById("Calcium600BuyFinished").style.display = "block";
    document.getElementById("Calcium600BuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("Calcium600BuyFinished").style.display = "none";
    }, 1000);
}
function AvodinClicked() {
    document.getElementById("Avodin").innerText = "  کپسول آوودین هولیستیکا   | Avodin  به تعداد " + AvodinNumber + "عدد و به قیمت " + AvodinPrice + "هزار تومان.";
    document.getElementById("Avodin").style.display = "block";
    document.getElementById("AvodinDelBtn").style.display = "block";
    document.getElementById("AvodinBuyFinished").style.display = "block";
    document.getElementById("AvodinBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("AvodinBuyFinished").style.display = "none";
    }, 1000);
}
function CaffeineClicked() {
    document.getElementById("Caffeine").innerText = "  قرص کافئین کارن   | Caffeine 200mg caren  به تعداد " + CaffeineNumber + "عدد و به قیمت " + CaffeinePrice + "هزار تومان.";
    document.getElementById("Caffeine").style.display = "block";
    document.getElementById("CaffeineDelBtn").style.display = "block";
    document.getElementById("CaffeineBuyFinished").style.display = "block";
    document.getElementById("CaffeineBuyFinished").innerHTML = "به سبد خرید افزوده شد";
    setInterval(function () {
        document.getElementById("CaffeineBuyFinished").style.display = "none";
    }, 1000);
}
let theInputName = document.querySelector("#input-name")
let theInputPassword = document.querySelector("#input-password");
let theAlert = document.querySelector(".alert");
let spanAlert = document.querySelector(".alert span");

let btnLogin = document.querySelector("#btn-click");


let n = false, p = false;
function loginClick() {
  spanAlert.innerHTML = "Name";
  if (theInputName.value == "") {
    theAlert.classList.add("alert-show");
    setTimeout(() => {
      theAlert.classList.remove("alert-show");
    } , 2000)
  }
  else {
    n = true;
  }
  if (theInputPassword.value == "") {
    spanAlert.innerHTML = "Password";
    theAlert.classList.add("alert-show");
    setTimeout(() => {
      theAlert.classList.remove("alert-show");
    }, 2000);
  }
  else {
    p = true;
  }

  if (n == true && p == true) {
    theAlert.innerHTML = "Successfully logged in";
    theAlert.classList.add("alert-show");

    theAlert.classList.remove("alert-danger");

    theAlert.classList.add("alert-success");
    setTimeout(() => {
      theAlert.classList.remove("alert-show");
      theAlert.classList.remove("alert-success");
      theAlert.classList.add("alert-danger");

      theAlert.innerHTML = "Please Enter You <span>Name</span>!";

    }, 2000);
    document.querySelector("#btn-close").click();

    btnLogin.remove()
    document.querySelector(".welcomeHello").style.display = "block";
    document.querySelector(".welcomeHello span").innerHTML = theInputName.value;
  }
};


document.querySelector(".input-prodect span").addEventListener("click", () => {
  document.querySelector(".input-prodect input").focus();
});

let allTranding = document.querySelectorAll(
  ".trending .container .box .content-tranding"
);

let right = document.querySelector(".right")
let left = document.querySelector(".left")

let countTranding = allTranding.length;
let num = 0;

allTranding.forEach((e, index) => {
  e.setAttribute("data-count", index);
});

checkClick(countTranding);

function ClickRight() {

  num++;
  checkClick(countTranding);

  allTranding.forEach((e , index) => {
    // console.log(e.getAttribute("data-count"));

  allTranding.forEach((el) => {
    el.classList.add("hidden");
    el.classList.remove("visible");
  });

  allTranding.forEach((e, index) => {
    // console.log(e.getAttribute("data-count"));

    if (num == index) {
      e.classList.remove("hidden");
      e.classList.add("visible");
    }
  });
    checkClick(countTranding);
  });

}

function ClickLeft() {

  checkClick(countTranding);
  num--;


  allTranding.forEach((el) => {
    el.classList.add("hidden");
    el.classList.remove("visible");
  });

  allTranding.forEach((e , index) => {
    // console.log(e.getAttribute("data-count"));

    if (num == index) {
      e.classList.remove("hidden");
      e.classList.add("visible");
    }
  });
  
  checkClick(countTranding);
}

function checkClick(n) {
  if (num === n - 1) {
    right.style.display = "none";
  } else {
    right.style.display = "inline";
  }

  if (num === 0) {
    left.style.display = "none";
  } else {
    left.style.display = "inline";
  }
}


function showProdect(num) {
  let icon = document.querySelector(`.num-${num} .icon svg`)

  if (icon.classList.contains("fa-plus")) {
    document.querySelector(`.num-${num} .icon`).innerHTML = `<i class="fa-solid fa-minus sign "></i>`;

    let showProdets = document.querySelector(`.num-${num} + .show-prodects`);

    showProdets.classList.add("is-visible")

  }
  else {
    document.querySelector(
      `.num-${num} .icon`
    ).innerHTML = `<i class="fa-solid fa-plus sign "></i>`;

    let showProdets = document.querySelector(`.num-${num} + .show-prodects`);

    
    showProdets.classList.remove("is-visible");
  
  }
};


let allShowProdect = document.querySelectorAll(".show-prodects .content-prodect");
let countShowProdect = allShowProdect.length;

let rightTwo = document.querySelector(".show-prodects .right");
let leftTwo = document.querySelector(".show-prodects .left");

let num_2 = 0;

checkClickTwo(countShowProdect);

function ClickRightTwo() {
  num_2++;
  checkClickTwo(countShowProdect);

  allShowProdect.forEach((e, index) => {
    // console.log(e.getAttribute("data-count"));

    allShowProdect.forEach((el) => {
      el.classList.add("hidden");
      el.classList.remove("show");
    });

    allShowProdect.forEach((e, index) => {
      // console.log(e.getAttribute("data-count"));

      if (num_2 == index) {
        e.classList.remove("hidden");
        e.classList.add("show");
      }
    });
    checkClickTwo(countShowProdect);
  });
}
function ClickLefttTwo() {
  checkClickTwo(countShowProdect);
  num_2--;

  allShowProdect.forEach((el) => {
    el.classList.add("hidden");
    el.classList.remove("show");
  });

  allShowProdect.forEach((e, index) => {
    // console.log(e.getAttribute("data-count"));

    if (num == index) {
      e.classList.remove("hidden");
      e.classList.add("show");
    }
  });

  checkClickTwo(countShowProdect);
}

function checkClickTwo(n) {
  if (num_2 === n - 1) {
    rightTwo.style.display = "none";
  } else {
    rightTwo.style.display = "inline";
  }

  if (num_2 === 0) {
    leftTwo.style.display = "none";
  } else {
    leftTwo.style.display = "inline";
  }
}



// let dropDown = document.querySelectorAll(".navbar-mobile ul li.drop-down");
// let showDropdown = document.querySelectorAll(".navbar-mobile ul .drop-down .drop");


// showDropdown.forEach((show, i) => {
//   show.classList.add(`num-${i}`)
// });

// dropDown.forEach((drop, i) => {
//   drop.setAttribute("data-count" , i)
// })

// dropDown.forEach((e) => {
//   e.addEventListener("click", (el) => {

//     let theCount = el.currentTarget.getAttribute("data-count")

//     let drop = document.querySelector(`.drop-down .num-${theCount}`);

//     drop.classList.add("show")

//   });
// });

let allDrop = document.querySelectorAll(".drop-down .drop");

let iconPlusAll = document.querySelectorAll(
  ".drop-down .show-content span i"
);

function showProdectMobial(id) {

  // allDrop.forEach((e) => {
  //   e.classList.remove("show");
  // })

  // iconPlusAll.forEach((e, index) => {
    
  //   console.log(e)
  //   if (e.classList.contains("fa-minus")) {
  //     e.classList.add("fa-plus");
  //     e.classList.remove("fa-minus");
  //     console.log("Yes" + index)
  //   }
  // });

  let liDropDowen = document.querySelector(`#${id} .drop`);

  let icon = document.querySelector(`#${id} .show-content span svg`);

  if (icon.classList.contains("fa-plus")) {
    liDropDowen.classList.add("show");

    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  }
  else {
    liDropDowen.classList.remove("show");

    icon.classList.add("fa-plus");
    icon.classList.remove("fa-minus");
  }
}


let overlay = document.querySelector(".overlay");
let navbarMobile = document.querySelector(".navbar-mobile");

console.log(navbarMobile);

function showNavbar() {
  overlay.classList.add("active")
  navbarMobile.classList.add("show");
  navbarMobile.classList.remove("hidden");
}

function hiddenNavBar() {

  overlay.classList.remove("active");
  navbarMobile.classList.remove("show");
  navbarMobile.classList.add("hidden");
}

overlay.addEventListener(("click"), (el) => {
  
  overlay.classList.remove("active");
  navbarMobile.classList.remove("show");
  navbarMobile.classList.add("hidden");
})


function showPlateform(id) {
  let drop = document.querySelector(`#${id} .drop`)

  let icon = document.querySelector(`#${id} .contant span svg`);

  console.log(icon)
  if (icon.classList.contains("fa-caret-left")) {
    drop.classList.add("show")

    icon.classList.remove("fa-caret-left");
    icon.classList.add("fa-caret-down");
  }
  else {
    drop.classList.remove("show");

    icon.classList.add("fa-caret-left");
    icon.classList.remove("fa-caret-down");
  }
}
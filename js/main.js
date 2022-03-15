//loader
let loader = document.getElementById('preloader');
window.addEventListener('load', function () {
  loader.style.display = 'none';
});
//loader

//=========== Active navbar Link in multi pages =============
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".nav-links li a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  }
}
//=========== Active navbar Link in multi pages =============

//=========== Active navbar Link in multi pages =============
// var url = window.location;
// // for treeview
// $(".sidebar .nav-pills .nav-item a")
//   .filter(function () {
//     return this.href == url;
//   })
//   .parentsUntil("flex-column collapse active")  
//   .addClass("flex-column collapse show");
const Location = location.href;
// const Parent = document.querySelectorAll(".sidebar .collapse");
const Item = document.querySelectorAll(".sidebar .nav-pills .nav-item a");
const Length = Item.length;
for (let i = 0; i < Length; i++) {
  if (Item[i].href === Location) {
    // Item.className = "flex-column collapse show";
    Item[i].className = "nav-link align-middle active";
  }
}
//=========== Active navbar Link in multi pages =============

// document.getElementById("new-shipment-btn").onclick = function () {
//   swal(
//     {
//       title: "قريبا",
//       text: "هذه الخدمة غير متوفرة الان",
//       type: "warning",
//       confirmButtonColor: "#AEDEF4",
//       closeOnConfirm: false,
//     },
//   );
// };

// $(".hamburger").click(function(){
//   $(".body").toggleClass("main");
// });

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("toggle");
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const logoLight = document.getElementById("logoLight");
const logoDark = document.getElementById("logoDark");
const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. toggle classes
  dark.style.display = "none";
  light.style.display = "flex";
  light.style.opacity = 1;
  // 3. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. toggle classes

  light.style.display = "none";
  dark.style.display = "flex";
  // 3. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}
// toggle icon
// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");
  logoLight.style.display = "block";
  logoDark.style.display = "none";
  //  light.style.display="block";
  //  dark.style.display="none";

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    //  dark.style.display="block";
    //  light.style.display="none";
  } else {
    disableDarkMode();
    // dark.style.display="block";
    // light.style.display="none";
    // dark.style.display="none";
  }
});

//    light&& dark



$(document).ready(function () {
  $(".accept").click(function () {
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'تم قبول الطلب بنجاح',
          showConfirmButton: false,
          timer: 1500,
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
          }
      })
  })

  $(".reject").click(function () {
      Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'تم رفض الطلب',
          showConfirmButton: false,
          timer: 1500,
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
          }
      })
  })
})
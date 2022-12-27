
// // import $ from "jquery"
//   var bar = document.getElementById("bar");
//   if (bar){
//       var progress = setInterval(function () {
//         console.log(bar.offsetWidth)
//         if (parseInt(bar.style.width) >= 400) {
//             clearInterval(progress);
//         } else {
//             bar.style.width = (bar.offsetWidth + 60) + "px";
//         }
//         bar.innerHTML = (Math.round(bar.offsetWidth / 3) + "%");
//         if (bar.offsetWidth / 3 == 100){
//           bar.innerHTML = "Still working ... " + bar.offsetWidth / 3 + "%";
//         }
//     }, 300);

//     window.onload(function() {
//       $("#bar").width(600);
//       $(".loader").fadeOut(3000);
//     });
//   }
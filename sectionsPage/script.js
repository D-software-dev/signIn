var icons = document.querySelectorAll(".row-one i")
// var rowones = document.querySelectorAll(".row-one");
// var removeClass = document.querySelector("#removeClass");

// removeClass.onclick = function() {
//     var seconds = document.querySelectorAll("#removeClass .full-card__row-two");
//     seconds.forEach(function(second) {
//         second.classList.remove("open")
//     })
// }

icons.forEach(function(icon) {
    icon.onclick = function() {
        // icon.classList.remove("open")
        this.classList.toggle("open");
    }
})
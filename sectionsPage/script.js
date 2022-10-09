var icons = document.querySelectorAll(".row-one i")

icons.forEach(function(icon) {
    icon.onclick = function() {
        this.classList.toggle("open")
    }
})
document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    alert('Hello World');
    thumbnailElement.className;
    thumbnailElement.addEventListener("click", function () {
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        } else {
            thumbnailElement.className = "";
        }
    });

});


function otherLanguages() {
    document.querySelector(".dropdown").classList.toggle("show")

}

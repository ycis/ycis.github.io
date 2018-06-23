

$(document).ready(function () {
    var navholder = $("#nav-placeholder");
    navholder.load("nav.txt")
    $(".nav-link").removeClass("active");
    var jqEl = document.getElementById(navholder.attr("data-calling-page"));
    jqEl.classList.add("active")
    jqEl.innerHTML = jqEl.innerHTML + '<span class="sr-only">(current)</span>';
})

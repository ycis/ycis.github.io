

$(document).ready(function () {
    var cnt = 0;
    var navholder = $("#nav-placeholder");
    var callinNameStr = navholder.attr("data-calling-page");
    
    navholder.load("nav.txt")
    $(".nav-link").removeClass("active");
    do {
        cnt++
        var jqEl = document.getElementById(callinNameStr);
    } while (jqEl != null || cnt > 100)

    if (cnt > 100) {alert("failed to find elemant to update active")}
    jqEl.classList.add("active")
    jqEl.innerHTML = jqEl.innerHTML + '<span class="sr-only">(current)</span>';
})

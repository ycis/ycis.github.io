function returnLocString () {
    var locArr, locStr = window.location.href;
    locArr = locStr.split("/");
    locArr = locArr[locArr.length - 1].split(".");
    return locArr[locArr.length - 2]
}

$(document).ready(function () {
    $("#nav-placeholder").load("nav.html");
    var location;
    location = "#" + returnLocString();
    $(".nav-link").removeClass("active");
    $(location).addClass("active");
})

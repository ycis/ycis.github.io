function returnLocString () {
    var locArr, locStr = window.location.href;
    locArr = locStr.split("/");
    locArr = locArr[locArr.length - 1].split(".");
    return locArr[locArr.length - 2]
}

// function fillNavBar() {
    
// }

$(document).ready(function () {
    var holderDiv = $("#nav-placeholder");
    holderDiv.load("nav.html", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    var populatedNavDiv = $("#nav-placeholder");
    console.log(populatedNavDiv.html());
    // var navDiv = $("#nav-placeholder");
    // var holderDiv = $("<div>").html('<object type="text/html" data="nav.html"></object>');
    // console.log(holderDiv.html());
    // document.getElementById("nav-placeholder").innerHTML='<object type="text/html" data="nav.html" ></object>';
    // navDiv.append(holderDiv);
    // var htmlStr = navDiv.text();
    // console.log(htmlStr);
    var location;
    location = "#" + returnLocString();
    $(".nav-link").removeClass("active");
    console.log(location);
    $(location).addClass("active");
})

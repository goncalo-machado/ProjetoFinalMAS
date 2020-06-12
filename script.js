function login() {
    var retVal = true;
    var input_email = document.getElementById("email_login").value;
    var input_pass = document.getElementById("pass_login").value;
    if (input_email != "123@ua.pt")
        retVal = false;
    if (input_pass != "123")
        retVal = false;
    if (retVal)
        location.href = 'index.html';
    else
        alert("N\u00e3o foi poss\u00edvel iniciar sess\u00e3o, tente novamente");
}

function favoritos() {
    var fav1 = localStorage.getItem("card1");
    if (fav1 == 1) {
        var x = document.getElementById("container1")
        x.style.display = "block";
    } else {
        var x = document.getElementById("container1")
        x.style.display = "none";
    }
    var fav2 = localStorage.getItem("card2");
    if (fav2 == 2) {
        var x = document.getElementById("container2")
        x.style.display = "block";
    } else {
        var x = document.getElementById("container2")
        x.style.display = "none";
    }
    var fav3 = localStorage.getItem("card3");
    if (fav3 == 3) {
        var x = document.getElementById("container3")
        x.style.display = "block";
    } else {
        var x = document.getElementById("container3")
        x.style.display = "none";
    }
    var fav4 = localStorage.getItem("card4");
    if (fav4 == 4) {
        var x = document.getElementById("container4")
        x.style.display = "block";
    } else {
        var x = document.getElementById("container4")
        x.style.display = "none";
    }
    var fav5 = localStorage.getItem("card5");
    if (fav5 == 5) {
        var x = document.getElementById("container5")
        x.style.display = "block";
    } else {
        var x = document.getElementById("container5")
        x.style.display = "none";
    }
}

$(document).ready(function () {
    var parques = document.getElementsByClassName("parque");
    for (var i = 0; i < parques.length; i++) {
        parques[i].style.display = 'none';
    }
    favoritos();
});


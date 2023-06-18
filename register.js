document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    let infoName = document.getElementsByClassName("name")[0].value;
    let infoPassword = document.getElementsByClassName("password")[0].value;
    let infoDate = document.getElementsByClassName("date")[0].value;
    let infoGender = document.getElementsByClassName("gender")[0].value;

    localStorage.setItem("name", infoName);
    localStorage.setItem("password", infoPassword);
    localStorage.setItem("date", infoDate);
    localStorage.setItem("gender", infoGender);

    document.getElementById("nameInfo").innerHTML = localStorage.getItem("name");
    document.getElementById("passwordInfo").innerHTML = localStorage.getItem("password");
    document.getElementById("dateInfo").innerHTML = localStorage.getItem("date");
    document.getElementById("genderInfo").innerHTML = localStorage.getItem("gender");
}
    
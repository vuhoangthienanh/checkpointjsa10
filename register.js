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

    let name = document.getElementById("name");
    let pass = document.getElementById("pass");
    let dob = document.getElementById("dob");
    let gender = document.getElementById("gender");
    if (name.value.length == 0 || pass.value.length == 0 || dob.value.length == 0 || gender.value == "Gender")
    {
        document.getElementById("thongbao").innerHTML = "Bạn cần nhập đầy đủ thông tin";
    }
    else 
    {
        document.getElementById("thongbao").innerHTML = "Bạn đã đủ thông tin";
    }
    
    

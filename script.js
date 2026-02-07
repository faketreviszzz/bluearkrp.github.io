function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "blueark"){
        window.location.href = "admin.html";
    } else {
        alert("Hibás bejelentkezés!");
    }
}

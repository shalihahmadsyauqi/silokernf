function login(){
    let uname = document.getElementById("username");
    let pass = document.getElementById("password");

    console.log("Username : " + uname.value);
    console.log("Password : " + pass.value);
    if(uname.value=="siloker" && pass.value=="siloker123"){
        alert("Selamat Datang Di Program Kami !!");
        window.location = "admin.html";
    }else{
        alert("Username atau Password Salah !!");
    }
}
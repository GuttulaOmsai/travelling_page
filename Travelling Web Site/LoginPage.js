let user=document.getElementById("user");
let loginBtn=document.getElementById("loginBtn");

let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");

user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active1");
})


loginBtn.addEventListener("click", function(){

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if((email.value == "") && (password.value == ""))
    {
        alert("Please Provide Proper credentials")
    }
    else{
        alert("Your Login completed succesfully...")
        document.querySelector(".loginPage").style.display="none"
    }
})

submit.addEventListener("click", function(){
    if(placeName.value == ""){
        alert("Fill Form")
    }
    else{
        alert(placeName.value + " Tour Booked")
    }
})



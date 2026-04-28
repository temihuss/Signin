function display() {
    let emailEl = document.getElementById("email").value
    let pwdEl = document.getElementById("pwd").value

    if (pwdEl == "" || emailEl == "") {
        alert("Please Fill in Both Fields!!")
    }
    document.getElementById("showEmail").innerText = emailEl
    document.getElementById("showPwd").innerText = pwdEl

}
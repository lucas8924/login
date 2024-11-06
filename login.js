// ========= show hidden - passmoro =======
const showHiddePassword = () => {

    const input = document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");

    iconEye.addEventListener("click", () => {
     alert("works");
    //  change password to text
    if (input.Type === 'password') {
        // switch to text
        input.Type = 'text';

        // icon change
        iconEye.classList.remove('ri-eye-off-line');
        iconEye.classList.add('ri-eye-line');
    } else {
        // change text to password
        input.type = 'password';
        iconEye.classList.remove('ri-eye-line');
        iconEye.classList.add('ri-eye-off-line');
    }
    });
};

showHiddePassword();
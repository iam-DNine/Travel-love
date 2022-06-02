let formLogin = `<div id="login">
<form action="" id="form-login">
    <h1 class="form-head">Đăng Nhập</h1>
    <div class="login-1">
        <i class="fa-solid fa-user"></i>
        <input type="email" class="eml" placeholder="Tên đăng nhập">
    </div>
    <div class="login-1">
        <i class="fa-solid fa-key"></i>
        <input type="password" class="eml" placeholder="Mật khẩu">
        <div id="eye">
            <i class="fa-solid fa-eye"></i>
        </div>
    </div>
    <input type="submit" value="Đăng Nhập" class="form-submit">
    <a href="#" class="signup">Hoặc có thể</a>
    <button type="" class="icon">
        <i class="fa-brands fa-facebook"></i>
    </button>
    <button class="icon">
        <i class="fa-brands fa-google"></i>
    </button>
    <button class="icon">
        <i class="fa-brands fa-twitter"></i>
    </button>
</form>
</div>`

let formSignup = `<div id="signup">
<form action="" id="form-signup">
    <h1 class="form-head">Đăng Ký</h1>
    <div class="login-1">
        <i class="fa-solid fa-user"></i>
        <input type="email" class="eml" placeholder="Tên đăng nhập">
    </div>
    <div class="login-1">
        <i class="fa-solid fa-key"></i>
        <input type="password" class="eml" placeholder="Mật khẩu">
        <div id="eye">
            <i class="fa-solid fa-eye"></i>
        </div>
    </div>
    <div class="login-1">
        <i class="fa-solid fa-key"></i>
        <input type="password" class="eml" placeholder="Nhập lại mật khẩu">
        <div id="eye">
            <i class="fa-solid fa-eye"></i>
        </div>
    </div>
    <input type="submit" value="Đăng ký" class="form-submit">
    <a href="#" class="signup">Hoặc có thể</a>
    <button type="" class="icon">
        <i class="fa-brands fa-facebook"></i>
    </button>
    <button class="icon">
        <i class="fa-brands fa-google"></i>
    </button>
    <button class="icon">
        <i class="fa-brands fa-twitter"></i>
    </button>
</form>
</div>`
let loginBtn = document.getElementById('loginBtn')
let signupForm = document.getElementById('signupForm')
let modalContent = document.getElementById('modal-content')
let myModal = document.getElementById('myModal')
loginBtn.onclick = function () {
    myModal.style.display = "block";
    modalContent.innerHTML = formLogin

}
window.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}
// đây là phần Signup
signupForm.onclick = function () {
    myModal.style.display = "block";
    modalContent.innerHTML = formSignup

}
window.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}
// Ae viết từ đây nhé :)))

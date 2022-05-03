const thanksForRegisterHtml = `
<div class="form-container">
    <h2 class="form-header">
        Dziękujemy za rejestrację!
    </h2>
    <span>
        Możesz się już zalogować
    </span>
    <button style="height: 30px" onclick="location.href ='../login/login.html'">Zaloguj się</button>
</div>
`;

function onSubmit() {
    document.getElementsByTagName('main')[0].innerHTML = thanksForRegisterHtml;
}
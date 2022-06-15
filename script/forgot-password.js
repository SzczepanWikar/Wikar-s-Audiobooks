const sentEmail = `
<h2 class="form-header">
    Zresetowano hasło
</h2>
<span>
    Na podany adres e-mail przesłaliśmy wiadomość z linkiem prowadzacąym do formularza zmiany hasła.
</span>
<button onclick="location.href ='login.html'">Zaloguj się</button>
`;
function onResetPassword() {
  document.getElementsByClassName("form-container")[0].innerHTML = sentEmail;
}

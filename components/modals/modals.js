export function changePasswordModal() {
    return  `
        <div onclick="document.getElementById('changePasswordModal').remove()" class="modal-background">
            <div onclick="event.stopPropagation()" class="modal-container">
                <div class="modal-header">
                    <h2>
                        Zmień hasło
                    </h2>
                    <ion-icon onclick="document.getElementById('changePasswordModal').remove()" style="cursor: pointer" name="close-outline"></ion-icon>
                </div>
                <div class="modal-content">
                    <div class="input-container">
                        <label>
                            Stare hasło
                        </label>
                        <input type="password" name="oldPassword" placeholder="Stare hasło">
                    </div>
                    <div class="input-container">
                        <label>
                            Nowe hasło
                        </label>
                        <input type="password" name="newPassword" placeholder="Nowe hasło">
                    </div>
                    <div class="input-container">
                        <label>
                            Powtórz nowe hasło
                        </label>
                        <input type="password" name="newPassword" placeholder="Powtórz nowe hasło">
                    </div>
                </div> 
                <button onclick="document.getElementById('changePasswordModal').remove()" class="save-button"> Zapisz </button>
            </div>
        <div>
    `
}

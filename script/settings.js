import {changePasswordModal} from '../components/modals/modals.js'

document.getElementById("changePassword").onclick = () => {
    console.log(changePasswordModal()); 
    let modal = document.createElement('div');
    modal.innerHTML = changePasswordModal();
    modal.setAttribute('id','changePasswordModal');
    document.getElementsByTagName('main')[0].appendChild(modal);
}

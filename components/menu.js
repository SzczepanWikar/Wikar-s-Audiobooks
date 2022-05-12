// export function mobileMenu() {
//     document.getElementsByTagName('body')[0].getElementsByClassName('desktop-menu')[0]?.remove();
//     let menuContainer = document.createElement('div');
//     menuContainer.innerHTML = `
    
//     <style>
//         .mobile-menu {
//             height: 40px;
//             width: 100%;
//             position: fixed;
//             bottom:0;
//             padding: 0;
//             margin: 0;
//             font-size: 30px;
//             background-color: #fff;
//             z-index: 999;
//         }
//         .mobile-menu > table {
//             width: 100%;
//         }

//         .menu-option {
//             vertical-align: center;
//             text-align: center;
//         }
//     </style>
//     <menu class="mobile-menu">
//         <table>
//             <tr>
//                 <td class="menu-option">
//                     <ion-icon name="basket-outline"></ion-icon>            
//                 </td>
//                 <td onclick="location.href='../library/library.html'" class="menu-option"> 
//                 <ion-icon name="library-outline"></ion-icon>  
//                 </td>
//                 <td class="menu-option">
//                     <ion-icon name="settings-outline"></ion-icon>  
//                 </td>
//             </tr>
//         </table>
//     </menu>
// `;
//     document.getElementsByTagName('body')[0].appendChild(menuContainer);
// }

// export function desktopMenu() {
//     document.getElementsByTagName('body')[0].getElementsByClassName('mobile-menu')[0]?.remove();
//     let menuContainer = document.createElement('div');
//     menuContainer.innerHTML =`

//     <style>
//         .desktop-menu {
//             height: 100%;
//             background-color: blue;
//         }

//         .menu-option {
//             vertical-align: center;
//             text-align: center;
//         }
//     </style>

//     <menu class="desktop-menu">
//                 <div class="menu-option">
//                     <ion-icon name="basket-outline"></ion-icon>  Sklep  
//                 </div>
//                 <div class="menu-option" onclick="location.href='../library/library.html'">
//                     <ion-icon name="library-outline"></ion-icon>  Biblioteka      
//                 </div>
//                 <div class="menu-option">
//                     <ion-icon name="settings-outline"></ion-icon>  Ustawienia  
//                 </div>
//     <menu>
//     `;
//     document.getElementsByTagName('body')[0].appendChild(menuContainer);
// }
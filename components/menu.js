export function mobileMenu() {
    let menuContainer = document.createElement('main');
    menuContainer.innerHTML = `
    <style>
        .mobile-menu {
            height: 40px;
            width: 100%;
            position: fixed;
            bottom:0;
            padding: 0;
        }
        .mobile-menu > table {
            width: 100%;
        }

        .menu-option {
            text-align: center;
        }
    </style>
    <menu class="mobile-menu">
        <table>
            <tr>
                <td class="menu-option">
                    <img height="30px" src="..\\assets\\icons\\basket-outline.svg"> 
                </td>
                <td onclick="location.href='../library/library.html'" class="menu-option"> 
                    <img height="30px" src="..\\assets\\icons\\library-outline.svg"> 
                </td>
                <td class="menu-option">
                    <img height="30px" src="..\\assets\\icons\\settings-outline.svg"> 
                </td>
            </tr>
        </table>
    </menu>
`;
    document.getElementsByTagName('body')[0].appendChild(menuContainer);
}
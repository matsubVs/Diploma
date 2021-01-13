const toggleMenu = () => {
    const popupMenu = document.querySelector('.popup-menu'),
        popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu'),
        menuButton = document.querySelector('.menu'),
        popupCloseButton = popupMenu.querySelector('.close-menu'),
        footerUpButton = document.querySelector('.button-footer'),
        servicesButton = [...document.querySelectorAll('.link-list')];

    let open = false;

    const openMenu = () => {
        popupMenu.style.visibility = 'visible';
        popupDialogMenu.style.transform = "translate3d(0,0,0)";
        open = !open;
    };

    const closeMenu = () => {
        popupMenu.style.visibility = "";
        popupDialogMenu.style.transform = "";    
        open = !open;
    };

    const popupMenuToggler = () => {
        if (!open) {
            openMenu();
        } else {
            closeMenu();
        }
    };

    popupMenu.addEventListener('click', event => {
        const target = event.target;

        if (servicesButton.some(item => item.contains(target))) {
            popupMenuToggler();
        } else if (target.matches('.menu-link')) {
            event.preventDefault();
            const anchor = document.querySelector(target.getAttribute('href'));
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
            popupMenuToggler();
        } else if (target === popupCloseButton) {
            popupMenuToggler();
        }
    });

    menuButton.addEventListener('click', () => {
        popupMenuToggler();
    });

    footerUpButton.addEventListener('click', event => {
        const innerLink = footerUpButton.querySelector('a');
        const hrefItem = document.querySelector(innerLink.getAttribute('href'));

        event.preventDefault();
        hrefItem.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }); 
};

export default toggleMenu;

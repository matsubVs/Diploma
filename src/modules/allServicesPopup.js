const allServicesPopup = () => {
    const servicesButton = [...document.querySelectorAll('.link-list')];
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    const closeButton = popupRepairTypes.querySelector('.close');

    let open = false;

    const openModalPopup = () => {
        popupRepairTypes.style.visibility = 'visible';
    };

    const closeModalPopup = () => {
        popupRepairTypes.style.visibility = "";
    };

    const modalPopupsHandler = () => {
        if (!open) {
            openModalPopup();
            open = !open;
        } else {
            closeModalPopup();
            open = !open;
        }

        popupRepairTypes.addEventListener('click', event => {
            const target = event.target;

            if (target.contains(closeButton)) {
                modalPopupsHandler();
            }
        });
    };

    servicesButton.forEach(item => item.addEventListener('click', () => modalPopupsHandler()));
};

export default allServicesPopup;

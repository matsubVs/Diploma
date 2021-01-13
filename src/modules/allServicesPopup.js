const allServicesPopup = () => {
    const servicesButton = [...document.querySelectorAll('.link-list')];
    const popupRepairTypes = document.querySelector('.popup-repair-types');

    const openModalPopup = () => {
        popupRepairTypes.style.visibility = 'visible';
    };

    servicesButton.forEach(item => item.addEventListener('click', () => openModalPopup()));
};

export default allServicesPopup;

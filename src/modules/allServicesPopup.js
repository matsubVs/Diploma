const allServicesPopup = () => {
    const openPopup = () => {
        const servicesButton = [...document.querySelectorAll('.link-list')];
        const popupRepairTypes = document.querySelector('.popup-repair-types');

        const openModalPopup = () => {
            popupRepairTypes.style.visibility = 'visible';
        };
        servicesButton.forEach(item => item.addEventListener('click', () => openModalPopup()));
    };

    const getMonth = monthInt => {
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        return months[parseInt(monthInt) - 1];
    };

    const setData = data => {
        console.log(data);
        const date = data[0].date.split('.');
        const formatDate = [date[0], getMonth(date[1]), date[2]].join(' ');
        console.log(formatDate);
        
        const serviceData = data.slice(1, 7);
        console.log(serviceData);

    };

    const fetchData = () => {
        fetch('../db/db.json')
            .then(response => response.json())
            .then(object => {
                setTimeout(() => setData(object), 1500);
            })
            .catch(error => console.log(error));
    };

    

    fetchData();
    openPopup();
};

export default allServicesPopup;

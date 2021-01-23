const allServicesPopup = () => {
    const openPopup = () => {
        const servicesButton = [...document.querySelectorAll('.link-list')];
        const popupRepairTypes = document.querySelector('.popup-repair-types');

        const openModalPopup = () => {
            popupRepairTypes.style.visibility = 'visible';
        };
        servicesButton.forEach(item => item.addEventListener('click', () => openModalPopup()));
    };

    const switchService = () => {
        const buttonsWrapper = document.querySelector('.nav-list-popup-repair');
        const buttonList = [...buttonsWrapper.children];
        const tableList = [...document.querySelectorAll('.popup-repair-types-content-table__list')];

        buttonsWrapper.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('.popup-repair-types-nav__item')) {
                const clickedButton = target.closest('.popup-repair-types-nav__item');
                const blockTitle = document.querySelector('.popup-repair-types-content__head-title');
                blockTitle.textContent = clickedButton.textContent;
                buttonList.forEach((item, index) => {
                    if (item === clickedButton) {
                        tableList[index].style.display = 'block';
                    } else {
                        tableList[index].style.display = 'none';
                    }
                });
            }
        });

        buttonList[0].click();
    };

    const getMonth = monthInt => {
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        return months[parseInt(monthInt) - 1];
    };

    const createTabs = tabInfo => {
        const tabs = [];
        tabInfo.forEach(title => {
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('button-o');
            buttonElement.classList.add('popup-repair-types-nav__item');
            buttonElement.textContent = title;

            tabs.push(buttonElement);
        });

        return tabs;
    };

    const createTable = tableInfo => {
        const tables = [];
        for (const table of tableInfo) {
            const tableElement = document.createElement('table');
            const tbody = document.createElement('tbody');
            tableElement.appendChild(tbody);

            tableElement.classList.add('popup-repair-types-content-table__list');
            table.forEach(item => {
                const { typeService: name, units, cost } = item;
                const tableRow = document.createElement('tr');
                tableRow.classList.add('mobile-row');
                
                const tdName = document.createElement('td');
                tdName.classList.add('repair-types-name');
                tdName.textContent = name;

                const tdValueDimension = document.createElement('td');
                tdValueDimension.classList.add('repair-types-value');
                tdValueDimension.insertAdjacentHTML('afterbegin', 
                    units[1] === '2' ? units[0] + `<sup>${units[1]}</sup>` : units);

                const tdValue = document.createElement('td');
                tdValue.classList.add('repair-types-value');
                tdValue.textContent = cost + ' руб.';

                tableRow.appendChild(tdName);
                tableRow.appendChild(tdValueDimension);
                tableRow.appendChild(tdValue);

                [...tableElement.children][0].appendChild(tableRow);
            });
            tables.push(tableElement);
        }

        return tables;
    };

    const setData = data => {
        const date = data[0].date.split('.');
        const formatDate = [date[0], getMonth(date[1]), date[2]].join(' ');
        const serviceData = data.slice(1, 7);

        const repairWrapper = document.querySelector('.nav-list-popup-repair'),
            dateBlock = document.querySelector('.popup-repair-types-content__head-date'),
            tableWrapper = document.querySelector('.popup-repair-types-content-table');

        const tabs = createTabs(serviceData.map(item => item.title));
        const tables = createTable(serviceData.map(item => item.priceList));

        repairWrapper.textContent = '';
        tabs.forEach(item => repairWrapper.appendChild(item));
        dateBlock.textContent = formatDate;

        tableWrapper.textContent = '';
        tables.forEach(item => tableWrapper.appendChild(item));

        switchService();
    };

    const fetchData = () => {
        fetch('db.json')
            .then(response => response.json())
            .then(object => setData(object));
    };

    fetchData();
    openPopup();
};

export default allServicesPopup;

import animation from "./animation";

const sendForm = () => {
    const sendForms = document.querySelectorAll('form');
    
    for (const form of sendForms) {
        const descrBlock = form.querySelector('.checkbox__descr').querySelector('.link-privacy'),
            popupPrivacy = document.querySelector('.popup-privacy'),
            sendButton = form.querySelector('.button'),
            checkBox = form.querySelector('.checkbox__input'),
            userInputs = [...form.querySelectorAll('input')].filter(item => item.type !== 'checkbox'),
            nameFileds = [...form.querySelectorAll('input[name=name]')];
            
        for (const name of nameFileds) {
            name.addEventListener('input', event => {
                event.target.value = event.target.value.replace(/[^а-яё ]/ig, '');
            });
        }

        const checkBoxValidation = checkbox => {
            if (checkbox.checked) return true;
            else {
                const label = checkbox.nextElementSibling;
                label.style.border = '1px solid red';
                setTimeout(() => label.style.border = '', 1000);
                return false;
            }
        };

        const checkForms = (inputs = []) => {
            if (inputs.length === 2) {
                if (inputs[0].value.length >= 2 && inputs[1].value.length === 18) {
                    return true;
                } else {
                    inputs[0].style.border = '1px solid red';
                    inputs[1].style.border = '1px solid red';
                    setTimeout(() => inputs[0].style.border = '', 1000);
                    setTimeout(() => inputs[1].style.border = '', 1000);
                    return false;
                }
            } else {
                if (inputs[0].value.length === 18) {
                    return true;
                } else {
                    inputs[0].style.border = '1px solid red';
                    setTimeout(() => inputs[0].style.border = '', 1000);
                    return false;
                }
            }
        };
        
        const sendRequest = data => {
            const dataObject = {};
            if (data.length === 2) {
                dataObject.name = data[0].value;
                dataObject.phone = data[1].value;
            } else {
                dataObject.phone = data[0].value;
            }

            fetch('../../server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObject)
            })
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('error');
                    }

                    const popupThank = document.querySelector('.popup-thank');
                    popupThank.style.visibility = 'visible';
                    popupThank.style.opacity = 0;

                    animation({
                        duration: 400,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            popupThank.style.opacity = progress;
                        }
                    });

                    setTimeout(() => {
                        animation({
                            duration: 500,
                            timing(timeFraction) {
                                return timeFraction;
                            },
                            draw(progress) {
                                popupThank.style.opacity = 1 - progress;
                            }
                        });
                    }, 2000); 

                    setTimeout(() => popupThank.style.visibility = 'hidden', 2500);
                    userInputs.forEach(item => item.value = '');
                    checkBox.checked = false;
                })
                .catch(error => {
                    console.error(error);
                    return;
                });
        };

        sendButton.addEventListener('click', event => {
            event.preventDefault();

            if (checkBoxValidation(checkBox) && checkForms(userInputs)) {
                sendRequest(userInputs);   
            }
        });

        descrBlock.addEventListener('click', () => {
            popupPrivacy.style.visibility = 'visible';
        });
    }
};

export default sendForm;

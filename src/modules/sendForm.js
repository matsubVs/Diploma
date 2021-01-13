import animation from "./animation";

const sendForm = () => {
    const sendForms = document.querySelectorAll('form');
    
    for (const form of sendForms) {
        const descrBlock = form.querySelector('.checkbox__descr').querySelector('.link-privacy'),
            popupPrivacy = document.querySelector('.popup-privacy'),
            sendButton = form.querySelector('.button'),
            checkBox = form.querySelector('.checkbox__input'),
            userInputs = [...form.querySelectorAll('input')].filter(item => item.type !== 'checkbox');

        const checkBoxValidation = checkbox => {
            if (checkbox.checked) return true;
            else return false;
        };

        const checkForms = (inputs = []) => {
            console.log(inputs);
            if (inputs.length === 2) {
                if (inputs[0].value !== '' && inputs[1].value.length === 18) {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (inputs[0].value.length === 18) {
                    return true;
                } else {
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
                
            } else {
                console.warn('warn');
            }
        });

        descrBlock.addEventListener('click', () => {
            popupPrivacy.style.visibility = 'visible';

            popupPrivacy.addEventListener('click', event => {
                if (event.target.matches('.close')) {
                    popupPrivacy.style.visibility = 'hidden';
                }
            });
        });
    }
};

export default sendForm;

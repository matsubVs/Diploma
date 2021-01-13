const consultations = () => {
    const consultButtons = [...document.querySelectorAll('.button')].filter(item => 
        item.textContent === 'Проконсультироваться');
    const consultBlock = document.querySelector('.popup-consultation');
    
    consultButtons.forEach(button => {
        button.addEventListener('click', () => {
            consultBlock.style.visibility = 'visible';
        });
    });
};

export default consultations;

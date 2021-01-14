const closePopups = () => {
    const allCloseButtons = [...document.querySelectorAll('.close')];
    allCloseButtons.forEach(button => {
        if (button.closest('.popup')) {
            const buttonParent = button.closest('.popup');
            button.addEventListener('click', () => {
                buttonParent.style.visibility = 'hidden';
            });
        }
    }); 
};

export default closePopups;

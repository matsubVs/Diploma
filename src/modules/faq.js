const faq = () => {
    const accordion = document.querySelector('.accordion');
    accordion.addEventListener('click', event => {
        const target = event.target;
        if (target.matches('.title_block')) {
            target.classList.toggle('msg-active');
        }
    });
};

export default faq;

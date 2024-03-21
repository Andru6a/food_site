function openModal(modalSelector, modalTimerID) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    // modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerID);
    if(modalTimerID){
        clearInterval(modalTimerID);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('show');
    // modal.classList.toggle('show');
    document.body.style.overflow = '';
}

function modals(triggerSelector, modalSelector, modalTimerID) {
    // ============Modals====================================================================

    const modal = document.querySelector(modalSelector),
        btnOpenModal = document.querySelectorAll(triggerSelector);


    btnOpenModal.forEach((e) => {
        e.addEventListener('click', () => {
            openModal(modalSelector, modalTimerID);
        })
    });

    modal.addEventListener('click', e => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);

        }
    });


    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerID);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}


export default modals;
export {closeModal};
export {openModal};


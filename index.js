const toggleAccordion = (e) => {
    const hiddenClass = 'hidden';
    const rotate180Class = 'rotate180';
    const boldClass = 'bold';

    let titleEl = e.getElementsByClassName('accordion__title')[0];
    let descripionEl = e.getElementsByClassName('accordion__description')[0];
    let toggleIconEl = e.getElementsByClassName('accordion__toggle-icon')[0];

    if (descripionEl.classList.contains(hiddenClass)) {
        titleEl.classList.add(boldClass);
        toggleIconEl.classList.add(rotate180Class);
        descripionEl.classList.remove(hiddenClass);
    } else {
        titleEl.classList.remove(boldClass);
        toggleIconEl.classList.remove(rotate180Class);
        descripionEl.classList.add(hiddenClass);
    }
}

const attachClickListener = () => {
    let accordionEl = document.getElementsByClassName('accordion');
    Array.from(accordionEl).forEach(e => {
        e.addEventListener('click', () => toggleAccordion(e));
    })
}

attachClickListener();
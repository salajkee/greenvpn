// Dynamic Adaptive
import { useDynamicAdapt } from './module/dynamicAdapt.js'
useDynamicAdapt();


// Accordion
const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach(item => {
    const faqTop = item.querySelector('.faq__item-top'),
        faqContent = item.querySelector('.faq__item-content');

    faqTop.addEventListener('click', () => {
        item.classList.toggle('faq__item-active');
        if(item.classList.contains('faq__item-active')) {
            faqContent.style.height = `${faqContent.scrollHeight}px`;
            faqContent.style.marginTop = `10px`;
        } else {
            faqContent.style.height = `0px`;
            faqContent.style.marginTop = `0`;
        }
    });
});


// Hamburger
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('menu__active');
});

menuLink.forEach(link => {
    link.addEventListener('click', () => {
        if(hamburger.classList.contains('active')) {
            menu.classList.remove('menu__active');
            hamburger.classList.remove('active');
        }
    });
});
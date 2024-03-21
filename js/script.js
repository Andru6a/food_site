'use strict';
import tabs from './modules/tabs';
import modal from './modules/modals';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import slider from './modules/slider';
import forms from './modules/forms';
import { openModal } from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 30000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerID);
    timer('.timer', '2024-12-18');
    cards();
    calculator();
    slider({
        slide: '.offer__slide',
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        wrapper: '.offer__slider-wrapper',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        field: '.offer__slider-inner'
    });
    forms('form', modalTimerID);

});
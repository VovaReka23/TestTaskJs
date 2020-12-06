import {$} from './base'
import {ModalWindow} from './modal'
ModalWindow();
export function Task2() {

    function createModal() {
        const modal = $.modal();
        modal.open();
    }

    const element = document.querySelector('.wrapper');
    const fragmant = document.createDocumentFragment();
    const heading = document.createElement('h2');
    heading.textContent = 'Task 2';
    fragmant.appendChild(heading)

    const button = document.createElement('button');
    button.textContent = 'Open Modal Window';
    button.classList.add('open-modul__btn');
    fragmant.appendChild(button);
    element.appendChild(fragmant);
    button.addEventListener("click",  createModal);

}
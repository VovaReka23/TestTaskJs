import {$} from './base'

export function ModalWindow() {
    function _createModal(option) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.insertAdjacentHTML('afterbegin', ` 
            <div class="modal-overlay" data-close="true">
              <div class="modal-window">
                <div class="modal-header">
                  <span class="modal-title">Modal window</span>
                  <span class="modal-close" data-close="true">&times;</span>
                </div>
                <div class="modal-body">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
            </div>
        `)
        document.body.appendChild(modal)
        return modal;
    }

    $.modal = function (option) {
        const ANIMATION_SPEED = 200;
        const $modal = _createModal(option)
        let closing = false;
        let destroy = false;

        const modal = {
            open() {
                if (destroy) {
                    return console.log('Modal is destroyed');
                }
                !closing && $modal.classList.add('open');
            },
            close() {
                closing = true;
                $modal.classList.remove('open');
                $modal.classList.add('hide');
                setTimeout(() => {
                    $modal.classList.remove('hide')
                    closing = false
                }, ANIMATION_SPEED);
            },
        }
        const listner = event => {
            if(event.target.dataset.close) {
                modal.close()
                modal.destroy()
            }
        }
        $modal.addEventListener('click', listner)

        return Object.assign(modal, {
            destroy() {
                $modal.parentNode.removeChild($modal);
                $modal.removeEventListener('click', listner)
                destroy = true;
            }
        })
    }

}
export default class GameWidget {
    constructor(element, size) {
        this._element = element;
        this.size = size
        for (let i = 0; i < size * size; i++) {
            const item = document.createElement('div');
            item.classList.add('cell-item');
            element.appendChild(item);
        }
        const position = Math.floor(Math.random() * this.size * this.size);
        this.cells = document.querySelectorAll('.cell-item');
        this.cells[position].classList.add('goblinFace');
        this.goblinFace = position;
        
    }
    moveGoblin() {
        let position = -1;
        do {
            position = Math.floor(Math.random() * this.size * this.size);
        } while (position === this.goblinFace); 
 
        this.cells[this.goblinFace].classList.remove('goblinFace');
        this.cells[position].classList.add('goblinFace');
        this.goblinFace = position;
    }
}

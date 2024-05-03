import '../css/style.css';
import GameWidget from './game-widget.js';

document.addEventListener('DOMContentLoaded', () => {
    const widget = new GameWidget(document.querySelector('.game-widget'), 4);
   
    setInterval(() => {
      widget.moveGoblin();
    }, 1000);

})

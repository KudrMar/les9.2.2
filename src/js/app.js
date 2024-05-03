import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
    const widget = new GameWidget(document.querySelector('.game-widget'), 4);
   
    setInterval(() => {
      widget.moveGoblin();
    }, 1000);

})

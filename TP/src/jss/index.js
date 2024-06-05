
function evento(event) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.width = '100px';
    });

    let currentBox = event.currentTarget;
    currentBox.style.width = '600px';
}
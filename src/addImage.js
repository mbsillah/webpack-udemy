import Magneto from './magnus.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = "Magneto";
    img.src = Magneto;

    const body = document.querySelector('body');
    body.appendChild(img)
}

export default addImage;
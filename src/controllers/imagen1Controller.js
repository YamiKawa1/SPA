import views from '../views/imagen.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views;
    return divElement;
};
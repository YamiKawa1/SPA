import views from '../views/home.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    
    
    const btnclick = divElement.querySelector('#btnclick')
    btnclick.addEventListener('click', () => {
            alert('click!!!!')
        })
    
    
    
    return divElement
};
import {pages} from '../controllers/index'
var content = document.getElementById('root');

const routes = async(route) => {
content.innerHTML = '';

    switch(route) {
        case '#/': {
            return content.appendChild(pages.home())
        }
            
        case '#/post':{
            return content.appendChild(await pages.post())
        }
            
        case '#/products':
            return console.log('products');
        
        case '#/imagen1': {
            return content.appendChild(pages.imagen1())
        }
        
        case '#/imagen2':
            return console.log('imagen2');
        
        default:{
            return content.appendChild(pages.notFound())
        }
    }
};

export {routes};

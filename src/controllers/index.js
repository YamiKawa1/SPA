import Home from './homeController'
import Post from './postController'
import NotFound from './404Controller'
import Imagen1 from './imagen1Controller'


const pages = {
    home: Home,
    post: Post,
    notFound: NotFound,
    imagen1: Imagen1
}

export {pages};
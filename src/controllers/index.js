import Home from './homeController'
import Post from './postController'
import NotFound from './404Controller'


const pages = {
    home: Home,
    post: Post,
    notFound: NotFound,
}

export {pages};
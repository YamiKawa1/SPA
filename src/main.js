import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.scss";

import { routes } from './router/indexRoutes';

routes(window.location.hash);

window.addEventListener('hashchange', ()=> {
    routes(window.location.hash);
})
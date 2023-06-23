import All from '../pages/All';
import Home from '../pages/Home';
import MyInfo from '../pages/MyInfo';
const publicRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/info', component: MyInfo, layout: null },
    { path: '/all', component: All, layout: null },
];
export { publicRoutes };

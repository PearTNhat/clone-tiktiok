import { routes } from '../config/routes';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/component/Layout/Upload';
const publicRoures = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.following,
        component: Following,
    },
    {
        path: routes.profile,
        component: Profile,
    },
    {
        path: routes.upload,
        component: Upload,
        layout: null,
    },
];
const privateRoues = [];
export { publicRoures, privateRoues };

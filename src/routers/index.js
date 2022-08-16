import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/component/Layout/Upload';
const publicRoures = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/@:nickname',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: null,
    },
];
const privateRoues = [];
export { publicRoures, privateRoues };

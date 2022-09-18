import config from '~/config';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/Layouts/Upload';
import Live from '~/pages/Live';
import Tag from '~/pages/Tag';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.tag,
        component: Tag,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: null,
    },
];
const privateRoues = [];
export { publicRoutes, privateRoues };

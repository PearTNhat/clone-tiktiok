import classNames from 'classnames/bind';
//
import {
    GroupIconRegular,
    GroupIconSolid,
    HomeIconRegular,
    HomeIconSolid,
    LiveIconRegular,
    LiveIconSolid,
} from '~/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('container')}>
            <Menu>
                <MenuItem
                    className={cx('home-icon')}
                    to={config.routes.home}
                    icon={<HomeIconRegular />}
                    iconActive={<HomeIconSolid />}
                    title="For You"
                />
                <MenuItem
                    to={config.routes.following}
                    icon={<GroupIconRegular />}
                    iconActive={<GroupIconSolid />}
                    title="Following"
                />
                <MenuItem
                    to={config.routes.live}
                    icon={<LiveIconRegular />}
                    iconActive={<LiveIconSolid />}
                    title="Live"
                />
            </Menu>
        </div>
    );
}

export default Sidebar;

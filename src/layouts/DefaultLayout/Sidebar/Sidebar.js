import classNames from 'classnames/bind';
//
import {
    GroupIconRegular,
    GroupIconSolid,
    HomeIconRegular,
    HomeIconSolid,
    LiveIconRegular,
    LiveIconSolid,
    MusicNoteIcon,
} from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import RenderAccountsSidebar from '../../components/RenderAccountsSidebar';
import Tag from '~/components/Tag';
import { HashTagIcon } from '~/components/Icons';
import Discover from '~/components/Discover';
//
const cx = classNames.bind(styles);

const suggestedUsers = [
    {
        id: 1,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1662724800&x-signature=gQQzFJn%2FnNBZ3v5XGa1yd5phJ%2F0%3D',
        userName: 'hoaa.hanassii',
        nickName: 'Đào Lê Phương Hoa',
        to: 'hoa.asaa',
        isTick: true,
    },
    {
        id: 2,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1662724800&x-signature=gQQzFJn%2FnNBZ3v5XGa1yd5phJ%2F0%3D',
        userName: 'hoaa.hanassii',
        nickName: 'Đạt villa',
        to: 'davvila',
        isTick: true,
    },
    {
        id: 3,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1662724800&x-signature=gQQzFJn%2FnNBZ3v5XGa1yd5phJ%2F0%3D',
        userName: 'hoaa.hanassii',
        nickName: 'Đạt villamik',
        to: 'hoa.asaaZZZ',
        isTick: true,
    },
];
const hashTags = [
    {
        id: 1,
        title: 'mackedoi',
        to: 'mackedoi',
    },
    {
        id: 2,
        title: 'helloWorld',
        to: 'helloWorld',
    },
];
const musicTags = [
    {
        id: 1,
        title: 'PearTuanN',
        to: 'PearTuanN',
    },
    {
        id: 2,
        title: 'PearTuanN',
        to: 'PearTuanN',
    },
];
function Sidebar() {
    return (
        <div className={cx('container')}>
            <div className={cx('div-wrapper')}>
                <Menu>
                    <MenuItem
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
                <RenderAccountsSidebar
                    isTippy={true}
                    title={'Suggested accounts'}
                    data={suggestedUsers}
                />
                <RenderAccountsSidebar
                    title={'Following accounts'}
                    data={suggestedUsers}
                />
                <Discover>
                    <Tag data={hashTags} icon={<HashTagIcon />} />
                    <Tag data={musicTags} icon={<MusicNoteIcon />} />
                </Discover>
                <footer
                    className={cx('footer', 'line-separate-sidebar-w90per')}
                >
                    <div className={cx('footer__line')}>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            Help
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            Safety
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                    </div>
                    <div className={cx('footer__line')}>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            Help
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            Safety
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                        <a href="/#" className={cx('footer__link')}>
                            hello
                        </a>
                    </div>
                    <span className={cx('footer__des')}>© 2022 TikTok</span>
                </footer>
            </div>
        </div>
    );
}

export default Sidebar;

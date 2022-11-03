import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
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
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './components/Menu';
import RenderAccountsSidebar from '../../components/RenderAccountsSidebar';
import Tag from '~/components/Tag';
import { HashTagIcon } from '~/components/Icons';
import Discover from '~/layouts/DefaultLayout/Sidebar/components/Discover';
import * as usersService from '~/service/usersSuggest';
import Footer from './components/Footer';
import FooterLine from './components/Footer/FooterLine';
//
const cx = classNames.bind(styles);

const suggestedUsers = [
    {
        id: 1,
        avatar: 'https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-44.jpg',
        nickname: 'hoaa.hanassii',
        first_name: 'Đào Lê Phương Hoa',
        last_name: '',
        tick: true,
    },
    {
        id: 2,
        avatar: 'https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-44.jpg',
        nickname: 'hoaa.hanassii',
        first_name: 'Đào Lê Phương Hoa',
        last_name: '',
        tick: true,
    },
    {
        id: 3,
        avatar: 'https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-44.jpg',
        nickname: 'hoaa.hanassii',
        first_name: 'Đào Lê Phương Hoa',
        last_name: '',
        tick: true,
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
    const [isSeeAll, setIsSeeAll] = useState({
        suggested: true,
        following: true,
    });
    const [page, setPage] = useState({
        suggested: 1,
        following: 1,
    });
    const [suggestUsers, setSuggestUsers] = useState([]);
    const handleChangeSeeSuggest = () => {
        if (page.suggested < 2) {
            setPage((pre) => ({ ...pre, suggested: page.suggested + 1 }));
        }
        setIsSeeAll((pre) => ({
            ...pre,
            suggested: !pre.suggested,
        }));
    };
    // suggested
    useEffect(() => {
        usersService
            .getSuggest({ page: page.suggested, perPage: 5 })
            .then((res) => {
                setSuggestUsers((pre) => [...pre, ...res.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page.suggested]);
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
                    data={suggestUsers}
                    isSeeAll={isSeeAll.suggested}
                    changeSee={handleChangeSeeSuggest}
                />
                <RenderAccountsSidebar
                    title={'Following accounts'}
                    data={suggestedUsers}
                    isSeeAll={isSeeAll.following}
                />
                <Discover>
                    <Tag data={hashTags} icon={<HashTagIcon />} />
                    <Tag data={musicTags} icon={<MusicNoteIcon />} />
                </Discover>
                <Footer>
                    <FooterLine />
                    <FooterLine />
                    <span className={cx('footer__des')}>© 2022 TikTok</span>
                </Footer>
            </div>
        </div>
    );
}
export default Sidebar;

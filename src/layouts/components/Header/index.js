import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
//
import { Link } from 'react-router-dom';
import config from '~/config';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/asset/images';
import Button from '~/component/button';
import Menu from '~/component/Popper/Menu';
import ShowTitle from '~/component/Popper/showTittle';
import {
    BuisinessIcon,
    CoinsIcon,
    InboxIcon,
    MessagesIcon,
    QuestionIcon,
    SettingIcon,
    UserIcon,
} from '~/Icons';
import Image from '~/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MenuItems = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            header: true,
            title: 'Language',
            data: [
                { code: 'vi', title: 'Tiếng việt' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng việt' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng việt' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng việt' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng việt' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng việt' },
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng việt' },
                { code: 'en', title: 'English' },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        to: '/feedback',
        title: 'Feedback and help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
//  la mảng nên dãi phần tử trùng nhau k bị ghi đè
const userMenu = [
    {
        icon: <UserIcon />,
        to: '/profile',
        title: 'View profile',
    },
    {
        icon: <CoinsIcon />,
        to: '/coins',
        title: 'Get coins',
    },
    {
        icon: <BuisinessIcon />,
        to: '/buisiness-suite',
        title: 'Buisiness suite',
    },
    {
        icon: <SettingIcon />,
        to: '/setting',
        title: 'Setting',
    },
    ...MenuItems,
    {
        separate: true,
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log in',
    },
];
let userAccount = true;
function Header() {
    const handleChange = useCallback((item) => {
        console.log(item);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* Using a wrapper <div> tag around the reference element solves
                 this by creating a new parentNode context.  */}
                <div>
                    <Search />
                </div>
                <div className={cx('actions')}>
                    <Button
                        className={cx('custom-upload')}
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        <span className={cx('title-upload')}>Upload</span>
                    </Button>
                    {userAccount ? (
                        <>
                            <ShowTitle content={'Messages'}>
                                <a
                                    href="/message"
                                    className={cx('w-actions-i')}
                                >
                                    <MessagesIcon />
                                </a>
                            </ShowTitle>
                            <ShowTitle content={'Inbox'}>
                                <div
                                    className={cx('w-actions-i')}
                                    style={{ marginBottom: '6px' }}
                                >
                                    <InboxIcon />
                                    <span className={cx('notification')}>
                                        35
                                    </span>
                                </div>
                            </ShowTitle>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    {/* user and login */}
                    <Menu
                        items={userAccount ? userMenu : MenuItems}
                        onChange={handleChange}
                    >
                        {userAccount ? (
                            <Image
                                className={cx('user-img')}
                                src=""
                                alt="Ahii"
                                fallback={
                                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/6fea5d7bb6b5972682fa8255eee6495c~c5_720x720.jpeg?x-expires=1660402800&x-signature=okHq%2FFlpIyZK7MU5OEhPaUcw8q0%3D'
                                }
                            />
                        ) : (
                            <button className={cx('icon-ellipsis')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;

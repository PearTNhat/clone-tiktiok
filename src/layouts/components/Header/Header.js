import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useCallback, useState } from 'react';
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
import MenuLogIn from '~/component/Popper/Menu';
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
function Header() {
    const [logIn, setLogIn] = useState(true);
    const handleChange = useCallback((item) => {
        console.log(item);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
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
                    {logIn ? (
                        <>
                            <ShowTitle content={'Messages'}>
                                <a
                                    href="/message"
                                    className={cx('w-actions-i')}
                                >
                                    <MessagesIcon width="26" height="26" />
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
                            <Button
                                primary
                                child
                                onClick={() => {
                                    setLogIn((prev) => !prev);
                                }}
                            >
                                Log in
                            </Button>
                        </>
                    )}

                    {/* user and login */}
                    <MenuLogIn
                        setLogIn={setLogIn}
                        items={logIn ? userMenu : MenuItems}
                        onChange={handleChange}
                        offset={[10, 10]}
                        placement="bottom-start"
                    >
                        {logIn ? (
                            <Image
                                className={cx('user-img')}
                                src="data:image/jpeg;base64,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"
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
                    </MenuLogIn>
                </div>
            </div>
        </header>
    );
}
export default Header;

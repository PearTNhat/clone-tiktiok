import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
import {
    faMagnifyingGlass,
    faSpinner,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import images from '~/asset/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AcountSearch from '~/component/accountsItem/accountsSearch';
import Button from '~/component/button';
import Menu from '~/component/Popper/Menu';
import ShowTitle from '~/component/Popper/showTittle';
import {
    Buisiness,
    Coins,
    Inbox,
    Messages,
    Question,
    Setting,
    UserIcon,
} from '~/Icons';
import Image from '~/Image';
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
            ],
        },
    },
    {
        icon: <Question />,
        to: '/feedback',
        title: 'Feedback and help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shotcuts',
    },
];
//  la mang nên dãi phần tử trùng nhau k bị ghi đè
const userMenu = [
    {
        icon: <UserIcon />,
        to: '/profile',
        title: 'View profile',
    },
    {
        icon: <Coins />,
        to: '/coins',
        title: 'Get coins',
    },
    {
        icon: <Buisiness />,
        to: '/buisiness-suite',
        title: 'Buisiness suite',
    },
    {
        icon: <Setting />,
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
let userAcount = true;
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const handleChange = useCallback((item) => {
        console.log(item);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AcountSearch />
                                <AcountSearch />
                                <AcountSearch />
                                <AcountSearch />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                        />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('search-icon')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button
                        className={cx('custom-upload')}
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        <span className={cx('title-upload')}>Upload</span>
                    </Button>
                    {userAcount ? (
                        <>
                            <ShowTitle content={'Messages'}>
                                <a
                                    href="/message"
                                    className={cx('w-actions-i')}
                                >
                                    <Messages />
                                </a>
                            </ShowTitle>
                            <ShowTitle content={'Inbox'}>
                                <div
                                    className={cx('w-actions-i')}
                                    style={{ marginBottom: '6px' }}
                                >
                                    <Inbox />
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
                        items={userAcount ? userMenu : MenuItems}
                        onChange={handleChange}
                    >
                        {userAcount ? (
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

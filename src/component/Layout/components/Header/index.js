import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
import {
    faMagnifyingGlass,
    faSpinner,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faBriefcase,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import images from '~/asset/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AcountSearch from '~/component/accountsItem/accountsSearch';
import Button from '~/component/button';
import Menu from '~/component/Popper/Menu';
import ShowTitle from '~/component/Popper/showTittle';
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
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback',
        title: 'Feedback and help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shotcuts',
    },
];
//  la mangr nên dãi phần tử trùng nhau k bị ghi đè
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/profile',
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        to: '/coins',
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        to: '/buisiness-suite',
        title: 'Buisiness suite',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
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
                                    <svg
                                        className={cx('actions-i')}
                                        viewBox="0 0 48 48"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
                                        ></path>
                                    </svg>
                                </a>
                            </ShowTitle>
                            <ShowTitle content={'Inbox'}>
                                <div
                                    className={cx('w-actions-i')}
                                    style={{ marginBottom: '6px' }}
                                >
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                                        ></path>
                                    </svg>
                                </div>
                            </ShowTitle>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={userAcount ? userMenu : MenuItems}
                        onChange={handleChange}
                    >
                        {userAcount ? (
                            <img
                                className={cx('user-img')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/6fea5d7bb6b5972682fa8255eee6495c~c5_720x720.jpeg?x-expires=1660402800&x-signature=okHq%2FFlpIyZK7MU5OEhPaUcw8q0%3D"
                                alt="Ahii"
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

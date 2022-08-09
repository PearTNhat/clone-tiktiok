import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSpinner,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import images from '~/asset/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AcountSearch from '~/component/accountsItem/accountsSearch';
import Button from '~/component/button';
import Menu from '~/component/Popper/Menu';
const cx = classNames.bind(styles);
const items = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
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

function Header() {
    const [searchResult, setSearchResult] = useState([]);
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
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
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
                        <input type="text" placeholder="Search accounts and videos" />

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
                    <Button className={cx('custom-upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        <span className={cx('title-upload')}>Upload</span>
                    </Button>
                    <Button primary>Log in</Button>

                    <Menu items={items}>
                        <button className={cx('icon-ellipsis')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;

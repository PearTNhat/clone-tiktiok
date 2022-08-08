import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import images from '~/asset/images';
import { Wrapper as ProperWrapper } from '~/component/Popper';
import AcountSearch from '~/component/accountsItem/accountsSearch';
import Button from '~/component/button';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([1]);

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
                            <ProperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AcountSearch />
                                <AcountSearch />
                                <AcountSearch />
                                <AcountSearch />
                            </ProperWrapper>
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
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}
export default Header;

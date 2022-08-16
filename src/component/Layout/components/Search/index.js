import HeaderLess from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
import styles from './Search.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AcountSearch from '~/component/accountsItem/accountsSearch';
import { SearchIcon } from '~/Icons';
import useDebounce from '~/component/hooks/useDebounce';
import * as request from '~/apiService/searchService';
//
const cx = classNames.bind(styles);
function Search() {
    const [showPopperS, setShowPopperS] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchValue, 600);
    const refInput = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            const response = await request.searchApi(debounce);
            setSearchResult(response.data);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);
    const handleHiddenPopperS = () => {
        setShowPopperS(false);
    };
    const handleShowPopperS = () => {
        setShowPopperS(true);
    };
    const hanleClearV = () => {
        setSearchValue('');
        refInput.current.focus();
    };
    return (
        <HeaderLess
            onClickOutside={handleHiddenPopperS}
            interactive
            visible={showPopperS && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((item) => {
                            return <AcountSearch data={item} key={item.id} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={refInput}
                    type="text"
                    value={
                        searchValue && searchValue !== ' '
                            ? searchValue
                            : searchValue.trim()
                    }
                    placeholder="Search accounts and videos"
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={handleShowPopperS}
                />

                {!!searchValue && searchValue !== ' ' && !loading && (
                    <button className={cx('clear')} onClick={hanleClearV}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                )}

                <button className={cx('search-icon')}>
                    <SearchIcon width={24} height={24} />
                </button>
            </div>
        </HeaderLess>
    );
}

export default Search;

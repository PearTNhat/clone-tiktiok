import HeaderLess from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
import styles from './Search.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountSearch from '~/component/accountsItem/AccountsSearch';
import { SearchIcon } from '~/Icons';
import useDebounce from '~/component/hooks/useDebounce';
import * as request from '~/service/searchService';
import RenderAccount from './RenderAccount';
//
const cx = classNames.bind(styles);
function Search() {
    const [showPopperS, setShowPopperS] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const debounceValue = useDebounce(searchValue, 600);
    const refInput = useRef();
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            const response = await request.searchApi(debounceValue);
            setSearchResult(response.data);
            setLoading(false);
        };
        fetchApi();
    }, [debounceValue]);
    const handleHiddenPopperS = () => {
        setShowPopperS(false);
    };
    const handleShowPopperS = () => {
        setShowPopperS(true);
    };
    const handleClearV = () => {
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
                        <RenderAccount searchResult={searchResult} />
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
                        const valueInput = e.target.value;
                        setSearchValue(
                            valueInput.startsWith(' ') ? '' : valueInput,
                        );
                    }}
                    onFocus={handleShowPopperS}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearV}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                )}

                <button
                    className={cx('search-icon')}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <SearchIcon width={24} height={24} />
                </button>
            </div>
        </HeaderLess>
    );
}

export default Search;

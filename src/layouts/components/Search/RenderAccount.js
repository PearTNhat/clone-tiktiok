import classNames from 'classnames';
import { memo } from 'react';
//
import AccountSearch from '~/component/accountsItem/AccountsSearch';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function RenderAccount({ searchResult }) {
    return (
        <>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((item) => {
                console.log('re');
                return <AccountSearch data={item} key={item.id} />;
            })}
        </>
    );
}

export default memo(RenderAccount);
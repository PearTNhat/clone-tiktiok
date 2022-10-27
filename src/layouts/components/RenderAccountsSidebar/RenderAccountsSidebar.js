import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
//
import AccountSideBar from '~/layouts/components/AccountSideBar';
import styles from './RenderAccountsSidebar.module.scss';
const cx = classNames.bind(styles);
function RenderAccountsSidebar({ title, data, isTippy, isSeeAll, changeSee }) {
    return (
        <div
            className={cx('suggested-accounts', 'line-separate-sidebar-w90per')}
        >
            <h4 className={cx('suggested-accounts__text')}>{title}</h4>
            <AccountSideBar data={data} isTippy={isTippy} isSeeAll={isSeeAll} />
            <p className={cx('see')} onClick={changeSee}>
                {isSeeAll ? 'See all' : 'See less'}
            </p>
        </div>
    );
}
RenderAccountsSidebar.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default RenderAccountsSidebar;

import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
//
import AccountSideBar from '~/layouts/components/AccountSideBar';
import styles from './RenderAccountsSidebar.module.scss';
const cx = classNames.bind(styles);
function RenderAccountsSidebar({ title, data, isTippy }) {
    return (
        <div
            className={cx('suggested-accounts', 'line-separate-sidebar-w90per')}
        >
            <h4 className={cx('suggested-accounts__text')}>{title}</h4>
            <AccountSideBar data={data} isTippy={isTippy} />
            <p className={cx('see')}>See all</p>
        </div>
    );
}
RenderAccountsSidebar.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
};
export default RenderAccountsSidebar;

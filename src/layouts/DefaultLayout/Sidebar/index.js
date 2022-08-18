import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
function Sidebar() {
    return <div className={cx('container')}>sidebar</div>;
}

export default Sidebar;

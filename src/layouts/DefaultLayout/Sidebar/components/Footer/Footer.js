import classNames from 'classnames/bind';
import styles from '../../Sidebar.module.scss';
const cx = classNames.bind(styles);
function Footer({ children }) {
    return (
        <div className={cx('footer', 'line-separate-sidebar-w90per')}>
            {children}
        </div>
    );
}

export default Footer;

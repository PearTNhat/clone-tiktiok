import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
const cx = classNames.bind(styles);
function Discover({ children }) {
    return (
        <div className={cx('container', 'line-separate-sidebar')}>
            <p className={cx('text')}>Discover</p>
            {children}
        </div>
    );
}

export default Discover;

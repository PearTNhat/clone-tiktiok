import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';
const cx = classNames.bind(styles);
function Wrapper({ className, children }) {
    return <div className={cx('popper', className)}>{children}</div>;
}

export default Wrapper;

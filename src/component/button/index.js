import classNames from 'classnames/bind';
import styles from './Button.module.scss';
//
const cx = classNames.bind(styles);
function Button({ title, color }) {
    return <button className={cx('button', color)}>{title}</button>;
}

export default Button;

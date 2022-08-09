import { faL } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    //
    primary = false,
    outline = false,
    small = false,
    round = false,
    large = false,
    text = false,
    leftIcon = false,
    rightIcon = false,
    disable = false,
    //
    className,
    children,
    passProps,
    onClick,
}) {
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof key === 'function') {
                delete _props.key;
            }
        });
    }
    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }
    return (
        <Comp
            className={cx('wrapper', {
                primary,
                outline,
                round,
                small,
                large,
                text,
                leftIcon,
                rightIcon,
                [className]: className,
                disable,
                passProps,
            })}
            {..._props}
        >
            {leftIcon && <span className={cx('icon')}> {leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}> {rightIcon}</span>}
        </Comp>
    );
}

export default Button;

import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
//
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ to, title, icon, iconActive, className }) {
    return (
        <NavLink
            to={to}
            className={(nav) => {
                return cx('wrapper', {
                    active: nav.isActive,
                    [className]: className,
                });
            }}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;

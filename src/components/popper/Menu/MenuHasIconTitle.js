import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
//
import Button from '~/components/Button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuHasIconTitle({
    data,
    onClick,
    cssIcon,
    cssTitle,
    cssWrapIconText,
}) {
    const cl = cx('menu-item', {
        separate: data.separate,
        [cssWrapIconText]: cssWrapIconText,
    });
    return (
        <Button
            cssTitle={cssTitle}
            cssIcon={cssIcon}
            to={data.to}
            className={cl}
            leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}
MenuHasIconTitle.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuHasIconTitle;

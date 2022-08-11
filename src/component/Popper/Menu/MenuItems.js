import classNames from 'classnames/bind';
//
import Button from '~/component/button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const cl = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            to={data.to}
            className={cl}
            leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;

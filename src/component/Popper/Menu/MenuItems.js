import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
import Button from '~/component/button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;

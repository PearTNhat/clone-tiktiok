import classNames from 'classnames/bind';
import { data } from '~/data';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    return <div className={cx('container')}></div>;
}

export default Home;

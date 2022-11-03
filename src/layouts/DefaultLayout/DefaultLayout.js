import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
//
import Header from '../components/Header';
import Sidebar from './Sidebar';
import ShowToTop from './ShowToTop';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const [isToTop, setIsToTop] = useState(false);
    const handleListenScroll = () => {
        if (window.scrollY > 0 && !isToTop) {
            setIsToTop(true);
        }
        if (window.scrollY === 0) setIsToTop(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleListenScroll);
        return () => {
            window.removeEventListener('scroll', handleListenScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isToTop]);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <ShowToTop isToTop={isToTop} />
            </div>
        </div>
    );
}

export default DefaultLayout;

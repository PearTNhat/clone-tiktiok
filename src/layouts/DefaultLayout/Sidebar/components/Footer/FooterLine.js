import classNames from 'classnames/bind';
import styles from '../../Sidebar.module.scss';
const cx = classNames.bind(styles);

function FooterLine() {
    return (
        <>
            <div className={cx('footer__line')}>
                <a href="/#" className={cx('footer__link')}>
                    hello
                </a>
                <a href="/#" className={cx('footer__link')}>
                    Help
                </a>
                <a href="/#" className={cx('footer__link')}>
                    Safety
                </a>
                <a href="/#" className={cx('footer__link')}>
                    hello
                </a>
                <a href="/#" className={cx('footer__link')}>
                    hello
                </a>
                <a href="/#" className={cx('footer__link')}>
                    hello
                </a>
                <a href="/#" className={cx('footer__link')}>
                    hello
                </a>
            </div>
        </>
    );
}

export default FooterLine;

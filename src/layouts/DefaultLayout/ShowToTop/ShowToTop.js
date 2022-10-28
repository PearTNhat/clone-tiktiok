import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { ShowToTopIcon } from '~/components/Icons';
//
import styles from '../DefaultLayout.module.scss';
const cx = classNames.bind(styles);
function ShowToTop({ isToTop }) {
    return (
        <>
            <div
                className={cx('bottomContainer', {
                    show: isToTop,
                })}
            >
                <Button className={cx('btn-get-app')} small text>
                    Get App
                </Button>

                <span
                    className={cx('to-top')}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <ShowToTopIcon />
                </span>
            </div>
        </>
    );
}

export default ShowToTop;

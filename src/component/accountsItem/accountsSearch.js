import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './accountsSearch.module.scss';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AcountSearch() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('imgage')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/205d4812d9f51f6bc23308d18580f805~c5_300x300.webp?x-expires=1660118400&x-signature=xcqp3enszntJs%2Bt0HgivRZH0EP4%3D"
                alt=""
            ></img>
            <div>
                <h4 className={cx('user')}>
                    hasaki.ac
                    <span className={cx('check-icon')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </h4>
                <p className={cx('user-name')}>Người phán sét</p>
            </div>
        </div>
    );
}

export default AcountSearch;

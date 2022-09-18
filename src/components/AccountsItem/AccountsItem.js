import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './accountsSearch.module.scss';
import { Link } from 'react-router-dom';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountSearch({ data }) {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image
                className={cx('imgage')}
                src={data.avatar}
                alt={data.full_name}
            ></Image>
            <div>
                <h4 className={cx('user')}>
                    {data.full_name}
                    <span className={cx('check-icon')}>
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                    </span>
                </h4>
                <p className={cx('user-name')}>{data.nickname}</p>
            </div>
        </Link>
    );
}
AccountSearch.prototype = {
    data: PropTypes.object,
};
export default AccountSearch;

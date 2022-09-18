import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
//
import styles from './Language.module.scss';
const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <div className={cx('H-wrappper')}>
            <span className={cx('w-chevron-icon')} onClick={onBack}>
                <FontAwesomeIcon
                    className={cx('chevron-icon')}
                    icon={faChevronLeft}
                />
            </span>
            <h4 className={cx('H-title')}>{title}</h4>
        </div>
    );
}
Header.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
};
export default Header;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//

import styles from './Tag.module.scss';
const cx = classNames.bind(styles);

function Tag({ data, icon }) {
    return (
        <div className={cx('container')}>
            {data.map((hashTag) => (
                <div className={cx('wrapper')} key={hashTag.id}>
                    <span className={cx('icon')}>{icon}</span>
                    <Link className={cx('text')} to={`/tag/${hashTag.to}`}>
                        {hashTag.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}
Tag.propTypes = {
    data: PropTypes.array.isRequired,
    icon: PropTypes.node.isRequired,
};
export default Tag;

import classNames from 'classnames/bind';
import styles from './TagInPost.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function TagInPost({ hashtag, originMusic }) {
    return (
        <div className={cx('container')}>
            {hashtag.map((title, index) => (
                <div className={cx('tag')} key={index}>
                    <Link
                        className={cx('tag__link')}
                        to={`/tag/${title.slice(1)}`}
                    >
                        <strong className="tag__title">{title}</strong>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TagInPost;

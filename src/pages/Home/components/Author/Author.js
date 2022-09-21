import classNames from 'classnames/bind';
import styles from './Author.module.scss';
//
import { MusicNoteIcon } from '~/components/Icons';
import TagInPost from '../TagInPost';
const cx = classNames.bind(styles);
function Author({ data }) {
    return (
        <div className={cx('author')}>
            <h3 className={cx('author-unique')}>{data.userName}</h3>
            <h4 className={cx('author-nickname')}>{data.nickName}</h4>
            <div className={'description'}>
                <span className={cx('description__text')}>
                    {data.description}
                </span>
                <TagInPost className={cx('hashtag')} hashtag={data.hashTag} />
            </div>
            <div className={cx('music')}>
                <MusicNoteIcon width="16" height="16" />
                <strong className={cx('music__text')}>
                    {`nhạc nền - ${data.originMusic}`}
                </strong>
            </div>
        </div>
    );
}

export default Author;

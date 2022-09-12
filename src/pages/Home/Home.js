import classNames from 'classnames/bind';
//
import { StoreData } from '~/data/StoreData';
import styles from './Home.module.scss';
import Image from '~/Image';
import Video from '~/Video';
import { MessagesDotIcon, ShareIcon, MusicNoteIcon } from '~/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//
import TagInPost from './components/TagInPost';
import ShowInformation from '~/component/Popper/ShowInformation';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('container')}>
            {StoreData.postOfPerson.map((data) => (
                <div className={cx('post')} key={data.id}>
                    {/* div : fix show tippy */}
                    <div>
                        <ShowInformation data={data} separate>
                            <Link to={data.to}>
                                <Image
                                    src={data.avatar}
                                    className={cx('image')}
                                    alt=""
                                />
                            </Link>
                        </ShowInformation>
                    </div>
                    <div className={cx('wrapper')}>
                        <div className={cx('author')}>
                            <h3 className={cx('author-unique')}>
                                {data.userName}
                            </h3>
                            <h4 className={cx('author-nickname')}>
                                {data.nickName}
                            </h4>
                            <div className={'description'}>
                                <span className={cx('description__text')}>
                                    {data.description}
                                </span>
                                <TagInPost
                                    className={cx('hashtag')}
                                    hashtag={data.hashTag}
                                />
                            </div>
                            <div className={cx('music')}>
                                <MusicNoteIcon width="16" height="16" />
                                <strong className={cx('music__text')}>
                                    {`nhạc nền - ${data.originMusic}`}
                                </strong>
                            </div>
                        </div>

                        <div className={cx('video-container')}>
                            <Video src={data.video} controls />
                            <div className={cx('action')}>
                                <span className={cx('action__wrap')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span className={cx('number')}>
                                        {data.like}
                                    </span>
                                </span>
                                <span className={cx('action__wrap')}>
                                    <MessagesDotIcon />
                                    <span className={cx('number')}>
                                        {data.comment}
                                    </span>
                                </span>
                                <span className={cx('action__wrap')}>
                                    <ShareIcon />
                                    <span className={cx('number')}>
                                        {data.share}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;

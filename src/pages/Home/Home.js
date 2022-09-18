import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import {
    MessagesDotIcon,
    ShareIcon,
    MusicNoteIcon,
    EmbedIcon,
    SendMessagesRedICon,
    FacebookIcon,
    WhatsAppIcon,
    CopyLinkICon,
    TwitterIcon,
    LinkedinIcon,
    TelegramIcon,
    EmailIcon,
    LineIcon,
    PinterestIcon,
} from '~/Icons';
import Image from '~/Image';
import Video from '~/Video';
import { StoreData } from '~/data/StoreData';
import TagInPost from './components/TagInPost';
import ShowInformation from '~/components/Popper/ShowInformation';
import MenuLogIn from '~/components/Popper/Menu';

const methodShare = [
    {
        icon: <EmbedIcon />,
        title: 'Embed',
    },
    {
        icon: <SendMessagesRedICon />,
        title: 'Send to friends',
    },
    {
        icon: <FacebookIcon />,
        title: 'Share to Facebook',
    },
    {
        icon: <WhatsAppIcon />,
        title: 'Share to WhatsApp',
    },
    {
        icon: <CopyLinkICon />,
        title: 'Copy link',
    },
    {
        icon: <TwitterIcon />,
        title: 'Share to Twitter',
    },
    {
        icon: <LinkedinIcon />,
        title: 'Share to Linkedin',
    },
    {
        icon: <TelegramIcon />,
        title: 'Share to Telegram',
    },
    {
        icon: <EmailIcon />,
        title: 'Share to Email',
    },
    {
        icon: <LineIcon />,
        title: 'Share to Line',
    },
    {
        icon: <PinterestIcon />,
        title: 'Share to Pinterest',
    },
];
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('container')}>
            {StoreData.postOfPerson.map((data) => (
                <div className={cx('post')} key={data.id}>
                    {/* div : fix show tippy */}
                    <div className={cx('w-image')}>
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
                            <div className={cx('video')}>
                                <Video src={data.video} controls />
                            </div>
                            <div className={cx('action')}>
                                <div className={cx('w-icon-number')}>
                                    <span className={cx('action__icon')}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                    <span className={cx('action__number')}>
                                        {data.like}
                                    </span>
                                </div>

                                <div className={cx('w-icon-number')}>
                                    <span className={cx('action__icon')}>
                                        <MessagesDotIcon />
                                    </span>
                                    <span className={cx('action__number')}>
                                        {data.comment}
                                    </span>
                                </div>
                                <MenuLogIn items={methodShare}>
                                    <div className={cx('w-icon-number')}>
                                        <span className={cx('action__icon')}>
                                            <ShareIcon />
                                        </span>
                                        <span className={cx('action__number')}>
                                            {data.share}
                                        </span>
                                    </div>
                                </MenuLogIn>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;

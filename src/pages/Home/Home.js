import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';
import {
    MessagesDotIcon,
    ShareIcon,
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
} from '~/components/Icons';
import Image from '~/components/Image';
import { StoreData } from '~/data/StoreData';
import Author from './components/Author';
import ShowInformation from '~/components/popper/ShowInformation';
import { MenuLogIn as MenuShare } from '~/components/popper/Menu';
import WrapperVideo from './components/WrapperVideo/WrapperVideo';

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
            {StoreData.postOfPerson.map((data, i) => {
                // if (i >= 1) return;
                return (
                    <div
                        className={cx('post', {
                            'line-separate-sidebar-w100per': data.id !== 1,
                        })}
                        key={data.id}
                    >
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
                            <Author data={data} />
                            <div className={cx('video-container')}>
                                <WrapperVideo data={data} />
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
                                    <MenuShare
                                        items={methodShare}
                                        arrow={true}
                                        offset={[78, 6]}
                                        delay={[200, 500]}
                                        classCompShare={cx('w-item-share')}
                                        cssIcon={cx('icon-item-in-share')}
                                        cssWrapIconText={cx('w-item')}
                                        chevronIcon={true}
                                        cssChevronIcon={cx('chevron-icon')}
                                        howMany={5}
                                    >
                                        <div className={cx('w-icon-number')}>
                                            <span
                                                className={cx('action__icon')}
                                            >
                                                <ShareIcon />
                                            </span>
                                            <span
                                                className={cx('action__number')}
                                            >
                                                {data.share}
                                            </span>
                                        </div>
                                    </MenuShare>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;

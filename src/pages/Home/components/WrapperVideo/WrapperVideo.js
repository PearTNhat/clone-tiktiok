import classNames from 'classnames/bind';
import styles from './WrapperVideo.module.scss';
import { useState } from 'react';
import Video from '~/components/Video';
const cx = classNames.bind(styles);
function WrapperVideo({ data }) {
    console.log(styles.sizeVideo);
    const [ratoVideo] = useState(() => data.width / data.height);
    return (
        <div
            className={cx('wrapper-video')}
            style={{
                width: ratoVideo > 1 ? `${styles.sizeVideo}` : '',
                height: ratoVideo < 1 ? `${styles.sizeVideo}` : '',
            }}
        >
            <Video src={data.video} controls />
        </div>
    );
}

export default WrapperVideo;

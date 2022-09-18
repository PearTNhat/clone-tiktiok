import classNames from 'classnames/bind';
import styles from './Video.module.scss';
const cx = classNames.bind(styles);
function Video({ src, ...props }) {
    return <video src={src} {...props} className={cx('video')}></video>;
}

export default Video;

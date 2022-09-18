import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ShowInformation.module.scss';
import { TickBlue } from '~/Icons';
import { Wrapper as PopperWrapper } from '../../Popper';
import Image from '~/Image';
import Button from '~/component/Button/Button';
const cx = classNames.bind(styles);
function ShowInformation({ data, children, separate }) {
    const handleRender = (attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <Image
                        src={data.avatar}
                        alt="avatar"
                        className={cx('avatar')}
                    />
                    <Button primary className={cx('btn-follow')}>
                        Follow
                    </Button>
                </div>
                <Link className={cx('user-name')} to={`@${data.to}`}>
                    {data.userName}
                    {data.isTick && (
                        <span className={cx('tickBlue')}>
                            <TickBlue />
                        </span>
                    )}
                </Link>
                <Link className={cx('nick-name')} to={`@${data.to}`}>
                    {data.nickName}
                </Link>
                <p className={cx('analysis')}>
                    <span className={cx('number')}>7.1M</span>
                    <span className={cx('text')}>Followers</span>
                    <span className={cx('number')}>3569M</span>
                    <span className={cx('text')}>Likes</span>
                </p>
                {separate && (
                    <div
                        className={cx(
                            'w-description',
                            'line-separate-sidebar-w100per',
                        )}
                    >
                        <h2 className={cx('description')}>
                            Hello World Email:abc@gmail.com
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
    return (
        <Tippy
            offset={[0, 0]}
            interactive
            // visible
            delay={[500, 0]}
            placement="bottom-start"
            render={handleRender}
        >
            <div>{children}</div>
        </Tippy>
    );
}

export default ShowInformation;

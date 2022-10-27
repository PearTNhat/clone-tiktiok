import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ShowInformation.module.scss';
import { TickBlue } from '~/components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);
function ShowInformation({ data, children, separate }) {
    function formatDecimal(number) {
        const stringNum = number.toString();
        let num = stringNum.split('.')[0];
        let decimal = stringNum.split('.')[1];
        return `${num}.${decimal[0]}`;
    }
    function formatNumber(number) {
        if (number === undefined) return '';
        const countNum = number.toString().length;
        if (countNum >= 4 && countNum < 7)
            return `${formatDecimal(number / 1000)}K`;
        if (countNum >= 7) return `${formatDecimal(number / 1000000)}M`;
        return number;
    }
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
                <Link className={cx('user-name')} to={`@${data.nickname}`}>
                    {`${data.first_name} ${data.last_name}`}
                    {data.tick && (
                        <span className={cx('tickBlue')}>
                            <TickBlue />
                        </span>
                    )}
                </Link>
                <Link className={cx('nick-name')} to={`@${data.nickname}`}>
                    {data.nickname}
                </Link>
                <p className={cx('analysis')}>
                    <span className={cx('number')}>
                        {formatNumber(data.followers_count)}
                    </span>
                    <span className={cx('text')}>Followers</span>
                    <span className={cx('number')}>
                        {formatNumber(data.likes_count)}
                    </span>
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
            delay={[500, 0]}
            placement="bottom-start"
            render={handleRender}
        >
            <div>{children}</div>
        </Tippy>
    );
}

export default ShowInformation;

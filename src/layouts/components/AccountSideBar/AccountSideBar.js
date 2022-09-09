import classNames from 'classnames/bind';
import style from './AccountSearch.module.scss';
import ShowInformation from '~/component/Popper/ShowInformation';
import { Link } from 'react-router-dom';
import Image from '~/Image';
import { TickBlue } from '~/Icons';
const cx = classNames.bind(style);
function AccountSideBar({ data, isTippy = false }) {
    let Comp = 'div';
    if (isTippy) Comp = ShowInformation;
    return data.map((item) => (
        // fix bug tippy
        <div key={item.id}>
            <Comp data={item}>
                <Link className={cx('container')} to={`/@${item.to}`}>
                    <Image
                        className={cx('avatar')}
                        alt="avatar"
                        src={item.avatar}
                    />
                    <div className={cx('wrapper')}>
                        <h4 className={cx('userName')}>
                            {item.userName}
                            {item.isTick && (
                                <span className={cx('tickBlue')}>
                                    <TickBlue />
                                </span>
                            )}
                        </h4>
                        <span className={cx('nickName')}>{item.nickName}</span>
                    </div>
                </Link>
            </Comp>
        </div>
    ));
}

export default AccountSideBar;

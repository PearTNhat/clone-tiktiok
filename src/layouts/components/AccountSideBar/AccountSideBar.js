import classNames from 'classnames/bind';
import style from './AccountSearch.module.scss';
import ShowInformation from '~/components/popper/ShowInformation';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { TickBlue } from '~/components/Icons';
const cx = classNames.bind(style);
function AccountSideBar({ data, isTippy = false, isSeeAll }) {
    let Comp = 'div';
    if (isTippy) Comp = ShowInformation;
    return data.map((account, i) => {
        if (isSeeAll && i >= 5) return '';
        return (
            // fix bug tippy
            <div key={account.id}>
                <Comp data={account}>
                    <Link
                        className={cx('container')}
                        to={`/@${account.nickname}`}
                    >
                        <Image
                            className={cx('avatar')}
                            alt="avatar"
                            src={account.avatar}
                        />
                        <div className={cx('wrapper')}>
                            <h4 className={cx('userName')}>
                                {`${account.first_name} ${account.last_name}`}
                                {account.tick && (
                                    <span className={cx('tickBlue')}>
                                        <TickBlue />
                                    </span>
                                )}
                            </h4>
                            <span className={cx('nickName')}>
                                {account.nickname}
                            </span>
                        </div>
                    </Link>
                </Comp>
            </div>
        );
    });
}

export default AccountSideBar;

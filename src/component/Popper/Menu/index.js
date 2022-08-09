import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
//
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItems';
const cx = classNames.bind(styles);
function Menu({ items = [], children }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem data={item} key={index} />;
        });
    };
    return (
        <Tippy
            delay={(700, null)}
            interactive
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

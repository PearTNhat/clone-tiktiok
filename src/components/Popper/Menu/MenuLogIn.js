import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';
import 'tippy.js/dist/svg-arrow.css';
//
import { Wrapper as PopperWrapper } from '..';
import { MenuHasIconTitle } from '../Menu';
import Header from './Language/Header';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function MenuLogIn({
    setLogIn,
    items = [],
    offset,
    delay,
    arrow = false,
    classCompShare,
    chevronIcon = false,
    cssChevronIcon = false,
    cssIcon = false,
    cssTitle = false,
    cssWrapIconText = false,
    howMany = false,
    placement,
    onChange = () => {},
    hideOnClick = false,
    children,
}) {
    const [howManyRender, setHowManyRender] = useState(howMany || items.length);
    const [history, setHistory] = useState([{ data: items }]);
    const currentItems = history[history.length - 1];
    const refWChevronICon = useRef();
    useEffect(() => {
        setHistory((prev) => [{ data: items }]);
    }, [items]);
    const renderItems = () => {
        return currentItems.data.map((item, index) => {
            if (index >= howManyRender) return '';
            // là fuc nên mỗi lần chạy qua 1 item lại tạo ra 1 phạm vi mới
            const isParent = !!item.children;
            return (
                <MenuHasIconTitle
                    data={item}
                    key={index}
                    cssIcon={cssIcon}
                    cssTitle={cssTitle}
                    cssWrapIconText={cssWrapIconText}
                    onClick={() => {
                        item.title === 'Log in' && setLogIn((prev) => !prev);
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <div className={cx('tippy')}>
            <Tippy
                hideOnClick={hideOnClick}
                offset={offset}
                delay={delay}
                interactive
                placement={placement}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper
                            className={cx('menu-wrapper', {
                                [classCompShare]: classCompShare,
                            })}
                        >
                            {currentItems.header && (
                                <Header
                                    title={currentItems.title}
                                    onBack={() => {
                                        setHistory((prev) => {
                                            return prev.slice(
                                                0,
                                                prev.length - 1,
                                            );
                                        });
                                    }}
                                />
                            )}
                            <div className={cx('wrapper-item')}>
                                <div className={cx('render-item')}>
                                    {renderItems()}
                                    {chevronIcon && (
                                        <div
                                            className={cx('w-chevron-icon')}
                                            ref={refWChevronICon}
                                            onClick={() => {
                                                refWChevronICon.current.style.display =
                                                    'none';
                                                return setHowManyRender(
                                                    items.length,
                                                );
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                className={cx({
                                                    [cssChevronIcon]:
                                                        cssChevronIcon,
                                                })}
                                                icon={faChevronLeft}
                                            />
                                        </div>
                                    )}
                                </div>
                                {arrow && <span className={cx('arrow')}></span>}
                            </div>
                        </PopperWrapper>
                        {/* fix bug number language <=4 */}
                        {currentItems.data.length <= 3 &&
                            currentItems.header && (
                                <div className={cx('overlay-bottom')}></div>
                            )}
                    </div>
                )}
                onHide={() => {
                    setHistory(history.slice(0, 1));
                    if (howMany) {
                        setHowManyRender(howMany);
                        refWChevronICon.current.style.display = 'block';
                    }
                }}
            >
                {children}
            </Tippy>
        </div>
    );
}
MenuLogIn.prototype = {
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
    children: PropTypes.node.isRequired,
};
export default MenuLogIn;

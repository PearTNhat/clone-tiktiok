import classNames from 'classnames/bind';
import styles from './showTitle.module.scss';
import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';

const cx = classNames.bind(styles);
function ShowTitle({ content, children }) {
    return (
        <Tippy
            arrow={roundArrow}
            content={<span className={cx('content')}>{content}</span>}
        >
            {children}
        </Tippy>
    );
}

export default ShowTitle;

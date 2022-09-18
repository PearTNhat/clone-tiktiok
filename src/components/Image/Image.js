import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '~/asset/images';
import styles from './Image.module.scss';
function Image(
    {
        alt,
        src,
        fallback: customFallback = images.noImage,
        className,
        ...props
    },
    ref,
) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={(classNames(styles.wrapper), className)}
            {...props}
            ref={ref}
            alt={alt}
            src={fallback || src}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);

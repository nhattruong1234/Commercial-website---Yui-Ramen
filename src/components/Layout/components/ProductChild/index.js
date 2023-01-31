import classNames from 'classnames/bind';
import styles from './ProductChild.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

function ProductChild(products) {
    return (
        <div className={cx('product-wrapper')}>
            <img src={products.image} alt={products.title} />
            <h4 className={cx('product-name')}>{products.title}</h4>
            <p className={cx('product-price')}>{products.price}</p>
        </div>
    );
}

export default ProductChild;

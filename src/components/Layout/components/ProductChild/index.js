import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function ProductChild({ products }) {
    return (
        <div className={cx('product-wrapper')}>
            {products.map((title) => (
                <div key={title}>{title}</div>
            ))}
        </div>
    );
}

export default ProductChild;

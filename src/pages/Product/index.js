import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import ProductChild from '~/components/Layout/components/ProductChild';
import Footer from '~/components/Layout/components/Footer';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('products-page')}>
            <div className={cx('products-wrapper')}>
                <ProductChild
                    image={images.background}
                    title="Mì Ramen 1"
                    price="50.000đ"
                />
                <ProductChild
                    image={images.background}
                    title="Mì Ramen 2"
                    price="55.000đ"
                />
                <ProductChild
                    image={images.background}
                    title="Mì Ramen 3"
                    price="80.000đ"
                />
                <ProductChild
                    image={images.background}
                    title="Mì Ramen 1"
                    price="50.000đ"
                />
                <ProductChild
                    image={images.background}
                    title="Mì Ramen 1"
                    price="50.000đ"
                />
                <ProductChild
                    image={images.background}
                    title="Mì Ramen 1"
                    price="50.000đ"
                />
                <ProductChild
                    image={images.background}
                    title="Mì Ramen 1"
                    price="50.000đ"
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Product;

import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Footer from '~/components/Layout/components/Footer';

const cx = classNames.bind(styles);

function Home() {
    return (
        <header className={cx('wrapper')}>
            <h2 className={cx('title-background')}>YUI RAMEN</h2>
            <img
                className={cx('background')}
                src={images.background}
                alt="background"
            />
            <h2 className={cx('title-background')}>
                01/02 - 01/03/2023 SALE 20%{' '}
            </h2>
            <Footer />
        </header>
    );
}

export default Home;

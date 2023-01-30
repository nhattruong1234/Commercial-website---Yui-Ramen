import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <p>
                Giờ mở cửa Hàng ngày:
                <br />
                3 giờ chiều - Nửa đêm
                <br />
                Khách sạn Nikko, tầng trệt, Quận 1, Tp Hồ Chí Minh, Việt Nam
                <br />
                Điện thoại : 028 6688 7888
            </p>
        </footer>
    );
}

export default Footer;

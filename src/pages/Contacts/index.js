import {
    faFacebook,
    faInstagram,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Footer from '~/components/Layout/components/Footer';
import styles from './Contacts.module.scss';

const cx = classNames.bind(styles);

function Contacts() {
    return (
        <div>
            <div className={cx('contacts-page')}>
                <form className={cx('contacts-form')}>
                    <h2>Phản hồi chúng tôi</h2>
                    <label htmlfor="name-input">Họ và tên:</label>
                    <input
                        type="text"
                        name="name"
                    />
                    <label htmlfor="name-input">Email:</label>
                    <input
                        type="email"
                        name="name"
                    />
                    <label htmlfor="idea-input">Đóng góp ý kiến:</label>
                    <textarea />
                    <Button
                        primary
                        onClick={() => {
                            alert('Cảm ơn phản hồi của bạn!');
                        }}
                    >
                        Gửi
                    </Button>
                </form>
                <form className={cx('contacts-info')}>
                    <h2>Liên hệ chúng tôi</h2>
                    <div className={cx('contacts-icon')}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <p className={cx('contacts-fb')}>
                            Facebook.com/yuiramen
                        </p>
                        <FontAwesomeIcon icon={faYoutube} />
                        <p className={cx('contacts-ytb')}>
                            Youtube.com/yuiramen
                        </p>
                        <FontAwesomeIcon icon={faInstagram} />
                        <p className={cx('contacts-ins')}>
                            Instagram.com/yuiramen
                        </p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contacts;

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faPhone,
    faChair,
    faLocation,
} from '@fortawesome/free-solid-svg-icons';

import routesConfig from '~/config/routes';
import images from '~/assets/images';
import styles from './Header.module.scss';
import { PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLocation} />,
        title: 'Hà Nội',
        children: {
            title: 'Địa chỉ',
            data: [
                {
                    title: 'Hồ Chí Minh',
                },
                {
                    title: 'Hà Nội',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faChair} />,
        title: 'Đặt chỗ',
    },
    {
        icon: <FontAwesomeIcon icon={faPhone} />,
        title: 'Hỗ trợ - Tư vấn',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link className={cx('link-logo')} to={routesConfig.home}>
                        <img src={images.logo} alt="Logo" />
                    </Link>
                </div>
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-key')}>hi</h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button
                        primary
                        rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                    >
                        Đăng nhập
                    </Button>
                    <Button outline>Đăng ký</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

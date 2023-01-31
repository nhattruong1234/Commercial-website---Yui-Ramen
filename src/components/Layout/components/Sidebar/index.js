import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import routesConfig from '~/config/routes'
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Trang chủ" to={routesConfig.home} />
                <MenuItem title="Ẩm thực" to={routesConfig.product} />
                <MenuItem title="Liên hệ" to={routesConfig.contacts} />
            </Menu>
        </aside>
    );
}

export default Sidebar;

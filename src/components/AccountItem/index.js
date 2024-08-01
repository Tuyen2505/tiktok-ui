import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c1e04ca453189d9e40ddb5cca3e5b78c.jpeg?lk3s=a5d48078&nonce=48946&refresh_token=e630dd7bd9d54ae79532999eedf30574&x-expires=1722153600&x-signature=387MfQWsSjCFgr7c3cyFqQgZG%2F4%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Ngoc Meo</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ngocmeo</span>
            </div>
        </div>
    );
}

export default AccountItem;

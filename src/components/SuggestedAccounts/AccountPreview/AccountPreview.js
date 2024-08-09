import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/53a875c8c75159b5570c1a0e7e032d66.jpeg?lk3s=30310797&nonce=80460&refresh_token=80a62c5a547d3035cb16311d33bbe53c&x-expires=1723276800&x-signature=sIQy87lu23HFKo0kmeFl8CTEHRM%3D&shp=30310797&shcp=-"
                    alt=""
                />
                <Button className={cx('btn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <span className={cx('nickname')}>
                    <strong>nbun167</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </span>
                <p className={cx('username')}>Nhung Búnn🐳</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>3.4M</strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>3.4M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;

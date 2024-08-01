import classNames from 'classnames/bind';
import stytes from './Popper.module.scss';

const cx = classNames.bind(stytes);
function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default wrapper;

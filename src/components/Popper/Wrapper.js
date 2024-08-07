import classNames from 'classnames/bind';
import stytes from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(stytes);
function wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default wrapper;

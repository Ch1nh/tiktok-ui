import className from 'classnames/bind';
import styles from './Popper.module.scss';
const cx = className.bind(styles);
function wrapper({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default wrapper;

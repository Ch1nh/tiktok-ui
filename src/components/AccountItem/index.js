import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://static2.yan.vn/YanNews/2167221/202011/thay-giao-ba-la-ai-tieu-su-su-nghiep-doi-tu-cua-thay-giao-ba-4011fed7-22176437.png"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>baroibeo</span>
          <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>Phan Tấn Trung</span>
      </div>
    </div>
  );
}

export default AccountItem;

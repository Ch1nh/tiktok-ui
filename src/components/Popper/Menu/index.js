import { wrapper as PopperWapper } from '~/components/Popper';
import className from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
const cx = className.bind(styles);
function Menu({ children, items = [] }) {
  const itemRender = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      visible
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PopperWapper>{itemRender()}</PopperWapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import {
  NavLinks,
} from '../../styles/appbar/index';
import { Link } from 'react-router-dom';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <NavLinks
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}>
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            style={{
              fontFamily: "inherit",
            }}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 &&
              window.innerWidth < 960 ? null : depthLevel > 0 &&
                window.innerWidth > 960 ? (
              <span>
                <KeyboardArrowRightRoundedIcon style={{ width: '80%', marginTop: '4px', }} />
              </span>
            ) : (
              <span>
                <KeyboardArrowDownRoundedIcon style={{ marginTop: '3px' }} />
              </span>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            style={{
              fontFamily: "inherit",
            }}
          >
            {items.title}{' '}
            {depthLevel > 0 ? (
              <span>
                <KeyboardArrowRightRoundedIcon style={{ width: '80%', marginTop: '2px', }} />
              </span>
            ) : (
              <span>
                <KeyboardArrowDownRoundedIcon style={{ marginTop: '3px' }} />
              </span>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </NavLinks>
  );
};

export default MenuItems;
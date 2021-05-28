import React, {useState, memo} from 'react';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import MainNavigation from '../main-navigation/main-navigation';
import Logo from '../logo/logo';
import Wrapper from '../wrapper/wrapper';
import MenuButtons from '../menu-buttons/menu-buttons';
import {WindowWidth} from '../../const';

const MemoWrapper = memo(Wrapper);

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {width} = useWindowDimensions();

  const isTablet = width > WindowWidth.TABLET;

  return (
    <header className="header">
      <MemoWrapper name={`header`}>
        <Logo block={`header`} />
        {
          !isTablet &&
          <MenuButtons
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setMenuOpen((prevState) => !prevState)}
            onMenuClose={() => setMenuOpen(false)}
          />
        }
        {
          (isMenuOpen || isTablet) &&
            <div className="header__nav-wrapper">
              <MainNavigation
                isTablet={isTablet}
              />
            </div>
        }
      </MemoWrapper>
    </header>
  );
};

export default Header;

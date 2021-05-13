import React, {useState, memo} from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import MainNavigation from '../main-navigation/main-navigation';
import Logo from '../logo/logo';
import Wrapper from '../wrapper/wrapper';
import MenuButtons from '../menu-buttons/menu-buttons';

const MemoWrapper = memo(Wrapper);

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {width} = useWindowDimensions();

  const isMobile = width > 767;

  return (
    <header className="header">
      <MemoWrapper name={`header`}>
        <Logo block={`header`} />
        {
          !isMobile &&
          <MenuButtons
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setMenuOpen((prevState) => !prevState)}
            onMenuClose={() => setMenuOpen(false)}
          />
        }
        {(isMenuOpen || isMobile) && <MainNavigation/>}
      </MemoWrapper>
    </header>
  );
};

export default Header;

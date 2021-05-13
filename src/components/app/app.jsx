import React, {memo} from 'react';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

const MemoHeader = memo(Header);

const App = () => {
  return (
    <>
      <MemoHeader />
      <Main />
      <Footer />
    </>
  );
};

export default App;

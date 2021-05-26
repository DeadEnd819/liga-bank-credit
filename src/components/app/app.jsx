import React from 'react';
import Main from '../main/main';
import loadable from '@loadable/component';

const Header = loadable(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "header" */
  '../header/header'
  ));

const Footer = loadable(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "footer" */
  '../footer/footer'
  ));

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;

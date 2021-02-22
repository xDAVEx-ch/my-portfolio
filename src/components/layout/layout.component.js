import React from 'react';

import Header from '../header/header.component';

const Layout = ({ children }) =>(
  <>
    <Header />
    <div>
      {children}
    </div>
  </>
);

export default Layout;
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <h2>Layout</h2>
    <Outlet />

  </div>
)

export default Layout;

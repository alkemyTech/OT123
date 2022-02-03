/* eslint-disable import/no-cycle */
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import ContactPage from '../pages/ContactPage'
import Home from '../pages/Home'
import Layout from '../pages/Layout'

const AppRoutes = () => (
  <Router>

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>
    </Routes>
  </Router>
)

export default AppRoutes
